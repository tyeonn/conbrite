# == Schema Information
#
# Table name: events
#
#  id           :bigint(8)        not null, primary key
#  title        :string           not null
#  description  :text             not null
#  address      :string           not null
#  image_url    :string           not null
#  start_date   :datetime         not null
#  end_date     :datetime         not null
#  max_tickets  :integer          not null
#  location_id  :integer          not null
#  category_id  :integer          not null
#  organizer_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
