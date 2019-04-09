class ChangeTicketAttributes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :tickets, :event_id, false
    remove_index :tickets, name: "index_tickets_on_event_id"
    remove_index :tickets, name: "index_tickets_on_registrant_id"
    add_index :tickets, [:registrant_id, :event_id]
  end
end
