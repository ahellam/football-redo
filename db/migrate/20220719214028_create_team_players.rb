class CreateTeamPlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :team_players do |t|
      t.integer :team_id
      t.integer :player_id
      t.timestamps
    end
  end
end
