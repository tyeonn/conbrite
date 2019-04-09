class ChangeTickets < ActiveRecord::Migration[5.2]
  def change
    drop_table :events_users
    change_column_null :tickets, :registrant_id, true
    change_column_null :tickets, :event_id, true
    add_column :tickets, :quantity, :integer, null: false
    add_column :tickets, :name, :string, null: false
  end
end
