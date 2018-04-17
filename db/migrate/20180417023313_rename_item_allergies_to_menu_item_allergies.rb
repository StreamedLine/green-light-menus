class RenameItemAllergiesToMenuItemAllergies < ActiveRecord::Migration[5.1]
  def change
  	rename_table :item_allergies, :menu_item_allergies
  end
end
