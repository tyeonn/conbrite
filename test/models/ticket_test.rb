# == Schema Information
#
# Table name: tickets
#
#  id            :bigint(8)        not null, primary key
#  price         :float            not null
#  type          :string           not null
#  registrant_id :integer
#  event_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  quantity      :integer          not null
#  name          :string           not null
#

require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
