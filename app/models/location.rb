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

class Location < ApplicationRecord
  validates :city, :state, :country, :zip_code, presence: true

  has_many :events

end
