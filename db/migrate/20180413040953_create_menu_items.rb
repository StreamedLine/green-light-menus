class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.string :title
      t.string :description
      t.boolean :user_contributed
      t.integer :menu_id

      t.timestamps
    end
  end
end
