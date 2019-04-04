class Changedatetype < ActiveRecord::Migration[5.2]
  def change
    change_column :events, :start_date, :string
    change_column :events, :end_date, :string
  end
end
