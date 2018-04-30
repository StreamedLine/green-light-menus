class Restaurant < ApplicationRecord
	belongs_to :user
	has_many :menus
	has_many :menuItems, :through => :menus

	validates :name, presence: true
	validates :address, presence: true
	validates :zip, presence: true

	def self.search(search_params)
		results = Restaurant.where("name LIKE '%#{search_params[:query]}%'")
	end
end
