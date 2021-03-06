class RestaurantsController < ApplicationController
  before_action :authenticate_user,  only: [:create, :update, :destroy]

  def index
    restaurants = Restaurant.all
    render json: restaurants, each_serializer: RestaurantIndexSerializer
  end

  def show
    id = params[:id]
    restaurant = Restaurant.find(id)
    render json: restaurant, include: '**'
  end

  def create
    user = User.find_by(username: params[:username])
    restaurant = user.restaurants.new(restaurant_params) if user
    if restaurant.save
      render json: restaurant
    else
      render json: {error: restaurant.errors.full_messages}
    end
  end

  def update
    restaurant = Restaurant.find(restaurant_params[:id])
    if is_restaurant_owner(restaurant.user.id) && restaurant.update(restaurant_params)
      render json: restaurant, include: '**'
    else
      render json: {error: restaurant.errors.full_messages}
    end
  end

  def destroy
    render json: {error: '!'} unless is_restaurant_owner(restaurant.user.id)
    restaurant = Restaurant.find(restaurant_params[:id])
    restaurant.destroy
    render json: {notice: "Restaurant removed."}
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:id, :name, :description, :phone, :address, :zip, :website, :owner)
  end

end


