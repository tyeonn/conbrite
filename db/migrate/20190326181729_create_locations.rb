class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :city, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.integer :zip_code, null: false


      t.timestamps
    end
  end
end
