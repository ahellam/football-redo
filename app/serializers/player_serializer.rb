class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :rank, :position_id, :pos, :price, :canDelete, :games
  belongs_to :position
  
  def games 
    object.games
  end

  def pos 
    positions = [nil, 'QB', 'WR', 'RB']
    positions[object.position_id]
  end

end
