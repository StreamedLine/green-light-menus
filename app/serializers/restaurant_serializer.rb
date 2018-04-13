class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :phone, :address, :zip, :website, :owner
end
