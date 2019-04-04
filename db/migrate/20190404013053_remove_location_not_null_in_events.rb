class RemoveLocationNotNullInEvents < ActiveRecord::Migration[5.2]
  def change
    change_column_null :events, :location_id, true
  end
end
