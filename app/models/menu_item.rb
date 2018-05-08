class MenuItem < ApplicationRecord
	belongs_to :menu
	has_many :menuItemAllergies
	has_many :allergies, :through => :menuItemAllergies

	validates :title, presence: true

	def allergies_attributes=(allergies_attributes)
		allergies_attributes.each do |allergy|
			next if self.allergies.count > 0 && self.allergies.any?{|a| a[:name] == allergy[:name]}
			mia = self.menuItemAllergies.new 
			mia.allergy = Allergy.find_by(name: allergy[:name])
			mia.save
		end
		self.allergies.each do |allergy|
			if allergies_attributes.none?{|a| a[:name] == allergy[:name]}
				self.menuItemAllergies.find_by(allergy_id: allergy[:id]).delete
			end
		end
	end
end
