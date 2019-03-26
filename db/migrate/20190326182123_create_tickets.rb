class CreateTickets < ActiveRecord::Migration[5.2]
  def change
    create_table :tickets do |t|
      t.float :price, null: false
      t.string :type, null: false
      t.integer :registrant_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :tickets, :registrant_id
    add_index :tickets, :event_id
  end
end
