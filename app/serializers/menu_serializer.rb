class MenuSerializer < ActiveModel::Serializer
  attributes :id, :title
  has_many :menuItems
end
