class TeamsController < ApplicationController
  
  def index 
    # hitting /teams will just show all teams that belong to the logged in user
    render json: @user.teams, status: :ok
  end

  def opponents
    # all_teams = Team.all
    # render json: all_teams.select { |team| team[:user_id] != @user.id }, status: :ok
    render json: Team.where.not(user_id: @user.id)
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

    team = @user.teams.create!(
      # user_id: params[:user_id] <= dont need this because using @user.teams.create (rails way)
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

  # dont need this because its happening in application controller with before action authorize
  # def set_user
  #   @user = User.find(params[:user_id])
  # end

end
