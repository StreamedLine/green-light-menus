class RestaurantsController < ApplicationController
  def index
    restaurants = Restaurant.all
    render json: restaurants, each_serializer: RestaurantIndexSerializer
  end

  def show
    id = params[:id]
    restaurant = Restaurant.find(id)
    render json: restaurant
  end

  def create
    user = User.find_by(username: params[:username])
    restaurant = user.restaurants.new(restaurant_params) if user
    if restaurant.save
      render json: restaurant
    else
      render json: {error: "something went wrong. restaurant was not saved"}
    end
  end

  def update
    restaurant = Restaurant.find(restaurant_params[:id])
    if restaurant.update(restaurant_params)
      render json: restaurant
    else
      render json: {error: "something went wrong. restaurant was not updated"}
    end
  end

  def destroy
    restaurant = Restaurant.find(restaurant_params[:id])
    restaurant.destroy
    render json: {notice: "Restaurant removed."}
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:id, :name, :description, :phone, :address, :zip, :website, :owner)
  end
end


