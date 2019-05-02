# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  image_url       :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :first_name, :last_name, :email, :password_digest,
            :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, uniqueness: true
  after_initialize :ensure_session_token

  has_many :organized_events, dependent: :destroy,
           class_name: :Event,
           foreign_key: :organizer_id

  has_many :registrations, dependent: :destroy,
           foreign_key: :registrant_id

  has_many :registered_tickets, dependent: :destroy,
           through: :registrations,
           source: :event_ticket

  # has_many :tickets,
  #   foreign_key: :registrant_id

  # has_many :registered_events,
  #   through: :tickets,
  #   source: :event

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user&.is_password?(password)

    user
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    update!(session_token: User.generate_session_token)
    session_token
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
