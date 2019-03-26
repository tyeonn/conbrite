class RemoveIndexOnCategoriesEvents < ActiveRecord::Migration[5.2]
  def change
    remove_index :categories_events, name: "index_categories_events_on_category_id"
    remove_index :categories_events, name: "index_categories_events_on_event_id"
    add_index :categories_events, [:category_id, :event_id]
  end
end
