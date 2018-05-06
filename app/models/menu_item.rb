class MenuItem < ApplicationRecord
	belongs_to :menu
	has_many :menuItemAllergies
	has_many :allergies, :through => :menuItemAllergies

	validates :title, presence: true

	def allergies_attributes=(allergies_attributes)
		allergies_attributes.each do |allergy|
			mia = self.menuItemAllergies.new 
			mia.allergy = Allergy.find_by(name: allergy[:name])
			mia.save
		end
	end
end
