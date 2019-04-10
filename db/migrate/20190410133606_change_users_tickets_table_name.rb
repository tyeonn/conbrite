class ChangeUsersTicketsTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :users_tickets, :registrations
  end
end
