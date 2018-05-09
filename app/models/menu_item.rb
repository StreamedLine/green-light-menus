class MenuItem < ApplicationRecord
	belongs_to :menu
	has_many :menuItemAllergies, :foreign_key => :menu_item_id
	has_many :allergies, :through => :menuItemAllergies

	validates :title, presence: true

	def allergies_attributes=(allergies_attributes)
		# self.save
		self.menuItemAllergies.delete_all
		allergies_attributes.each do |allergy_attributes|
			next if self.allergies.count > 0 && self.allergies.any?{|a| a[:name] == allergy_attributes[:name]}
			self.allergies << Allergy.find_by(name: allergy_attributes[:name])
		end
	end

	
end
