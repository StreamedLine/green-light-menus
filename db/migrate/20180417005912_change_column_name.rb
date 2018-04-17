class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
  	rename_column :item_allergies, :item_id, :menu_item_id
  end
end
