class CreateItemAllergies < ActiveRecord::Migration[5.1]
  def change
    create_table :item_allergies do |t|
      t.integer :item_id
      t.integer :allergy_id

      t.timestamps
    end
  end
end
