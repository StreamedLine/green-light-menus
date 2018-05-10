class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :phone, :address, :zip, :website, :owner
  has_many :menus
  has_one :user
end
