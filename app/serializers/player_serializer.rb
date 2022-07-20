class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :rank, :position_id, :price, :canDelete, :games
  belongs_to :position
  
  def games 
    object.games
  end
end
