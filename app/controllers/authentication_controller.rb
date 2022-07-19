class AuthenticationController < ApplicationController

  skip_before_action :authorize, only: :login
  
  def login
    user = User.find_by username: params[:username]

    if !user 
      render(
        json: { message: 'Invalid username or password.' },
        status: :unauthorized
      ) 
    else

      if !user.authenticate params[:password]
        render(
          json: { message: 'Invalid username or password.' },
          status: :unauthorized
        ) 
      else
        # create JWT 
        payload = { user_id: user.id }
        secret = 'sgs'
        token = JWT.encode(payload, secret)

        render json: { user: user, token: token }, status: :ok
      end
    end
  end
end

# could also potentially do if user && user.authenticate(params[:password])
# and then the else render json: {error: 'Invalid Credentials' }, status: :unauthorized