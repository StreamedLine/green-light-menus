class RestaurantsController < ApplicationController
  def index
    render json: Restaurant.all
  end

  def show
    id = params[:id]
    restaurant = Restaurant.find(id)
    render json: restaurant
  end

  def create
    restaurant = restaurant.new(restaurant_params)
    if restaurant.save
      render json: restaurant
    else
      render json: {error: "something went wrong. restaurant was not saved"}
    end
  end

  def update
    restaurant = restaurant.find(restaurant_params[:id])
    if restaurant.update(restaurant_params)
      render json: restaurant
    else
      render json: {error: "something went wrong. restaurant was not updated"}
    end
  end

  def destroy
    restaurant = restaurant.find(restaurant_params[:id])
    restaurant.destroy
    render json: {notice: "Restaurant removed."}
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:id, :name, :description, :phone, :address, :zip, :website, :owner)
  end
end
