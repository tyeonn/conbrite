class DeleteCategoriesEventsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :categories_events
  end
end
