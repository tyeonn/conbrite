# == Schema Information
#
# Table name: events
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :text             not null
#  address      :string           not null
#  image_url    :string           not null
#  start_date   :string           not null
#  end_date     :string           not null
#  location_id  :integer
#  category_id  :integer          not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Event < ApplicationRecord
  validates :title, :description, :address, :image_url, :start_date, :end_date,
    :category_id, :organizer_id, presence: true
  
  belongs_to :organizer,
    class_name: :User
  
  has_many :tickets, dependent: :destroy

  has_many :registrants,
    through: :tickets
  
  belongs_to :category

  has_many :bookmarks

  has_many :followers,
    through: :bookmarks,
    source: :user

  # belongs_to :location
  # belongs_to :category

end
