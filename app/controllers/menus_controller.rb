class MenusController < ApplicationController
  before_action :authenticate_user,  only: [:create, :update, :destroy]
  
  def index
    render json: Menu.all
  end

  def show
    id = params[:id]
    menu = Menu.find(id)
    render json: menu
  end

  def create
    restaurant = Restaurant.find(params[:restaurant_id])
    menu = restaurant.menus.new(menu_params) if restaurant
    
    if menu.save
      render json: menu, include: '**'
    else
      render json: {error: menu.errors.full_messages}
    end
  end

  def update
    menu = Menu.find(menu_params[:id])
    
    if is_restaurant_owner(menu.restaurant.user.id) && menu.update(menu_params)
      render json: menu, include: '**'
    else
      render json: {error: menu.errors.full_messages}
    end
  end

  def destroy
    render json: {error: '!'} unless is_restaurant_owner(menu.restaurant.user.id)
    menu = Menu.find(menu_params[:id])
    menu.destroy
    render json: {notice: "menu removed."}
  end

  private

  def menu_params
    params.require(:menu).permit(:id, :title, :menuItems_attributes => [:id, :title, :description, :user_contributed, :menu_id, :allergies_attributes => [:name, :id]])
  end
end
