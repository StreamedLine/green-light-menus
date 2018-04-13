class MenuSerializer < ActiveModel::Serializer
  attributes :id
  has_many :menuItems
end
