# == Schema Information
#
# Table name: tickets
#
#  id          :bigint(8)        not null, primary key
#  price       :float            not null
#  ticket_type :string           not null
#  event_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  quantity    :integer          not null
#  name        :string           not null
#

class Ticket < ApplicationRecord
  validates :name, :price, :ticket_type, :quantity, :event_id, presence: true
  belongs_to :event
  has_many :registrations,
    foreign_key: :event_ticket_id
    
  has_many :registered_users,
    through: :registrations,
    source: :registrant

  
    

 
end
