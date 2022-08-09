class TeamSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name
  has_many :team_players
  has_many :players, through: :team_players
end
