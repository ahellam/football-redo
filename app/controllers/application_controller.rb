class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  # before all actions, run this authorization code...
  # .. go to specific controllers to skip_before_action like login and create user
  before_action :authorize

  # def current_user
  #   user_id = decoded_token['user_id']
  #   @user = User.find user_id
  # end

  def authorize 
    auth_header = request.headers[:Authorization]

    if !auth_header
      render json: { message: 'Must send token in request.' }, status: :forbidden
    else
      token = auth_header.split(' ')[1]
      secret = 'sgs'
      begin
        decoded_token = JWT.decode(token, secret).first
        #  use .first because its [0] because its an array with two objects, the {user_id} and the encryp {algo 256}
        # current_user
        user_id = decoded_token['user_id']
        @user = User.find user_id
      rescue 
        render json: { message: 'Invalid token.' }, status: :forbidden
      end
    end
  end

  private 
  
  def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  
  def render_not_found_response(invalid)
    render json: {error: "#{invalid.model} not found"}, status: :not_found
  end

end


  # =================================================================================================
  # CODE FROM BB Walkthrough 

  # def authorized 
  #   render json: {error: "Please log in"} unless logged_in
  # end
  
  # def logged_in 
  #   !!current_user
  # end
  
  # def current_user 
  #   auth_header = request.headers["Authorization"]
  #   if auth_header
  #     token = auth_header.split(" ")[1]
  #     begin
  #       @user_id = JWT.decode(token, 'sgs')["user_id"]
  #     rescue JWT::DecodeError
  #       nil
  #     end
  #   end
  #   if @user_id
  #     @user = User.find(@user_id)
  #   else
  #     nil
  #   end
  # end




