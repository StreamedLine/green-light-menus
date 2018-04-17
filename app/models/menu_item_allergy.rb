class MenuItemAllergy < ApplicationRecord
	belongs_to :menu_item 
	belongs_to :allergy
end
