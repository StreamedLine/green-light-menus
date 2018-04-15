class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :phone, :address, :zip, :website, :owner
  has_many :menus
end
