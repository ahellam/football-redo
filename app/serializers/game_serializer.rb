class GameSerializer < ActiveModel::Serializer
  attributes :id, :week, :points
  belongs_to :player
end
