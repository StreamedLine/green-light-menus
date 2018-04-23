class Menu < ApplicationRecord
	belongs_to :restaurant
	has_many :menuItems

	validates :title, presence: true

	accepts_nested_attributes_for :menuItems
end
