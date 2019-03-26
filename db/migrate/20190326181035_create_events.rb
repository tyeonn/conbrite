class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.string :image_url, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.integer :max_tickets, null: false
      t.integer :location_id, null: false
      t.integer :category_id, null: false
      t.integer :organizer_id, null: false
      t.timestamps

    end
    add_index :events, :title
    add_index :events, :location_id
    add_index :events, :category_id
    add_index :events, :organizer_id

  end
end
