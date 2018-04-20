class AllergiesController < ApplicationController
  def index
  	render json: Allergy.all
  end
end
