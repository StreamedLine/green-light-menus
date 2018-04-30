class SearchController < ApplicationController
	def filter
		restaurants = Restaurant.search(search_params)
		render json: restaurants, each_serializer: RestaurantIndexSerializer
	end

	def search_params
		params.require(:search).permit(:query, :zip, :allergies_attributes=>[:name])
	end
end