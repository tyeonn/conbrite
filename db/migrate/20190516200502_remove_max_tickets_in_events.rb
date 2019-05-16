class RemoveMaxTicketsInEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :max_tickets
  end
end
