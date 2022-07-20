class Position < ApplicationRecord
  has_many :players
  has_many :games, through: :players
end
