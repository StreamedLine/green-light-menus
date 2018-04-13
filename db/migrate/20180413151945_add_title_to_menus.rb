class AddTitleToMenus < ActiveRecord::Migration[5.1]
  def change
  	add_column :menus, :title, :string
  end
end
