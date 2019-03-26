class UsersEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events_users do |t|
      t.integer :registrant_id, null: false
      t.integer :event_id, null: false
      t.timestamps
    end
    add_index :events_users, :registrant_id
    add_index :events_users, :event_id

  end
end
