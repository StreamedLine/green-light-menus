class MenuItemAllergy < ApplicationRecord
	belongs_to :menuItem, optional: true
	belongs_to :allergy
end
