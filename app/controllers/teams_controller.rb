class TeamsController < ApplicationController
  
  # skip_before_action :authorize
  # before_action :set_user
  
  def index 
    render json: @user.teams, status: :ok 
  end

  def show
    team = Team.find(params[:id])
    render json: team, status: :ok
  end

  def create
    team = @user.teams.create(name: params[:name])
    render json: team, status: :created
  end

  def destroy 
    team = Team.find(params[:id])
    team.destroy
    head :no_content
  end

  def draft 

    # create a team
    team = @user.teams.create!(
      # user_id: params[:user_id],
      name: params[:name]
  ) 

    # create three TeamPlayer records associated with the team and each player on the drafted team
    team.team_players.create([
      {player_id: params.dig('playersOnTeam')[0]}, 
      {player_id: params.dig('playersOnTeam')[1]},
      {player_id: params.dig('playersOnTeam')[2]}
    ]
  )

    render json: team, include: ['players', 'players.games'], status: :created
  end

  private 

  def set_user
    @user = User.find(params[:user_id])
  end

end
