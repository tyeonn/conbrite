class CreateUserTicketJoinTableAndChangeTickets < ActiveRecord::Migration[5.2]
  def change
    remove_index :tickets, name: "index_tickets_on_registrant_id_and_event_id"
    remove_column :tickets, :registrant_id
    add_index :tickets, :id

    create_table :users_tickets do |t|
      t.integer :registrant_id, null: false
      t.integer :event_ticket_id, null: false
      t.timestamps
    end
    add_index :users_tickets, [:registrant_id, :event_ticket_id]
  end
end
