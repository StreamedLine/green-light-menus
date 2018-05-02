class RestaurantIndexSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :address, :zip, :website
end