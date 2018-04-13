class Allergy < ApplicationRecord
	has_many :itemAllergies
	has_many :menuItems, :through => :itemAllergies
end
