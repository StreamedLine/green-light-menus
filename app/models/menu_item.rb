class MenuItem < ApplicationRecord
	belongs_to :menu
	has_many :menuItemAllergies
	has_many :allergies, :through => :menuItemAllergies
end
