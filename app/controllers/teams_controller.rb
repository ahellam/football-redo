class TeamsController < ApplicationController

  def index 
    render json: Team.all, status: :ok 
  end

  def show
    team = Team.find!(params[:id])
    render json: team, status: :ok
  end

  def create
    team = Team.create!(team_params)
    render json: team, status: :created
  end

  def destroy 
    team = Team.find(params[:id])
    team.destroy
    head :no_content
  end

  private 

  def team_params
    params.permit(:user_id)
  end

  # def team_params
  #   params.permit(:user_id, { players: 
  #     [:canDelete, :id, :image, :name, :pos, :position_id, :price, :rank, 
  #       { games: [:id, :player_id, :week, :points] }
  #     ]
  #     })
  # end

end
