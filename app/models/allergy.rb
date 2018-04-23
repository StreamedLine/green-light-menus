class Allergy < ApplicationRecord
	has_many :menuItemAllergies
	has_many :menuItems, :through => :menuItemAllergies

	validates :name, presence: true
end
