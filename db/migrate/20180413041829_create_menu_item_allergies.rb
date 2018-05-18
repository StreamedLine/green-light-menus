class CreateMenuItemAllergies < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_item_allergies do |t|
      t.integer :menu_item_id
      t.integer :allergy_id

      t.timestamps
    end
  end
end
