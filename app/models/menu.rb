class Menu < ApplicationRecord
	belongs_to :restaurant

	accepts_nested_attributes_for :menu_items
end
