# == Schema Information
#
# Table name: registrations
#
#  id              :bigint(8)        not null, primary key
#  registrant_id   :integer          not null
#  event_ticket_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Registration < ApplicationRecord
  validates :registrant_id, :event_ticket_id, presence: true
  belongs_to :event_ticket,
    class_name: :Ticket

  belongs_to :registrant,
    class_name: :User
end
