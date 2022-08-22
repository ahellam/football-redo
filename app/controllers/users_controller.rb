class UsersController < ApplicationController

  skip_before_action :authorize, only: :create 

  def index
    render json: User.all, status: :ok
  end

  def show 
    user = User.find(params[:id])
    render json: user, status: :ok
  end

  def profile 
    # this @user is from the application controller in the JWT decode process
    render json: @user, status: :ok
  end

  def create 
    user = User.create!(
      username: params[:username],
      password: params[:password]
    ) 
    render json: user, status: :created
  end

  def destroy 
    user = User.find(params[:id])
    user.destroy
    head :no_content

  end



end
