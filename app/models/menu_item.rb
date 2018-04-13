class MenuItem < ApplicationRecord
	belongs_to :menu
	has_many :itemAllergies
	has_many :allergies, :through => :itemAllergies
end
