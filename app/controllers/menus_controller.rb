class MenusController < ApplicationController
  def index
    render json: Menu.all
  end

  def show
    id = params[:id]
    menu = Menu.find(id)
    render json: menu
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: {error: "something went wrong. menu was not saved"}
    end
  end

  def update
    menu = Menu.find(menu_params[:id])
    if menu.update(menu_params)
      render json: menu
    else
      render json: {error: "something went wrong. menu was not updated"}
    end
  end

  def destroy
    menu = Menu.find(menu_params[:id])
    menu.destroy
    render json: {notice: "menu removed."}
  end

  private

  def menu_params
    params.require(:menu).permit(:id, :title, :menu_items => [:title, :description, :user_contributed, :menu_id])
  end
end
