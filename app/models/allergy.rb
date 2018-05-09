class Allergy < ApplicationRecord
	has_many :menuItemAllergies, :foreign_key => :allergy_id
	has_many :menuItems, :through => :menuItemAllergies

	validates :name, presence: true
end
