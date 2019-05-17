# == Schema Information
#
# Table name: categories_events
#
#  id          :bigint(8)        not null, primary key
#  category_id :integer          not null
#  event_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Categories_Event < ApplicationRecord
  validates :category_id, :event_id, presence: true
  belongs_to :category
  belongs_to :event

end
