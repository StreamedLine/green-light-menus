class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :user_contributed
  has_many :allergies
end
