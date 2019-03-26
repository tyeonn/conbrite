class CategoriesEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :categories_events do |t|
      t.integer :category_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :categories_events, :category_id
    add_index :categories_events, :event_id
  end
end
