class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :description
      t.string :phone
      t.string :address
      t.string :zip
      t.string :website
      t.boolean :owner

      t.timestamps
    end
  end
end
