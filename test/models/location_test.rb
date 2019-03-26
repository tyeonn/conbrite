# == Schema Information
#
# Table name: locations
#
#  id         :bigint(8)        not null, primary key
#  city       :string           not null
#  state      :string           not null
#  country    :string           not null
#  zip_code   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
