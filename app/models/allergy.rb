class Allergy < ApplicationRecord
	has_many :menuItemAllergies
	has_many :menuItems, :through => :menuItemAllergies
end
