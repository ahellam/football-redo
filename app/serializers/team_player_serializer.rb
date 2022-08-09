class TeamPlayerSerializer < ActiveModel::Serializer
  attributes :id, :team_id, :player_id
  belongs_to :team
  belongs_to :player
  has_many :games, through: :player
end
