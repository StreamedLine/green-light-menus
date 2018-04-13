class Menu < ApplicationRecord
	belongs_to :restaurant
	has_many :menuItems

	accepts_nested_attributes_for :menuItems
end
