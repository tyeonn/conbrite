# == Schema Information
#
# Table name: tickets
#
#  id            :bigint(8)        not null, primary key
#  price         :float            not null
#  type          :string           not null
#  registrant_id :integer          not null
#  event_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Ticket < ApplicationRecord
end
