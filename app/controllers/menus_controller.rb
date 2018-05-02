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
      render json: menu
    else
      render json: {error: menu.errors.full_messages}
    end
  end

  def update
    menu = Menu.find(menu_params[:id])

    if menu.update(menu_params)
      render json: menu
    else
      render json: {error: menu.errors.full_messages}
    end
  end

  def destroy
    menu = Menu.find(menu_params[:id])
    menu.destroy
    render json: {notice: "menu removed."}
  end

  private

  def menu_params
    params.require(:menu).permit(:id, :title, :menuItems_attributes => [:title, :description, :user_contributed, :menu_id, :allergies_attributes => [:name]])
  end
end
