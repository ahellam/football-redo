class TeamPlayersController < ApplicationController

  # skip_before_action :authorize

  def index
    # binding.pry
    render json: TeamPlayer.all 
    # render json: TeamPlayer.where(:user.id => @user.id)
    # render json: TeamPlayer.all   ????  need to test this ^^
  end

  def destroy 
    team = TeamPlayer.find_by(:id)
    team.destroy
    head :no_content
  end

end
