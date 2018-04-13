class ItemAllergy < ApplicationRecord
	belongs_to :item 
	belongs_to :allergy
end
