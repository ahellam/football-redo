class TeamPlayer < ApplicationRecord
  belongs_to :team
  belongs_to :player
  has_many :games, through: :player
end
