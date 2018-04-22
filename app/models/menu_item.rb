class MenuItem < ApplicationRecord
	belongs_to :menu
	has_many :menuItemAllergies
	has_many :allergies, :through => :menuItemAllergies

	#accepts_nested_attributes_for :allergies

	def allergies_attributes=(allergies_attributes)
		allergies_attributes.each do |allergy|
			puts allergy
			mia = self.menuItemAllergies.new
			puts mia
			mia.allergy = Allergy.find_by(name: allergy[:name])
			puts mia.allergy
			mia.save
		end
	end
end
