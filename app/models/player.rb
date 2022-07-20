class Player < ApplicationRecord
  has_many :games, dependent: :destroy
  belongs_to :position
  has_many :team_players
  has_many :teams, through: :team_players
end
