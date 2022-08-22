Rails.application.routes.draw do
  resources :team_players
  resources :teams
  resources :positions
  resources :games
  resources :players

  resources :users, only: [:index, :show, :create, :destroy]

  get '/profile', to: 'users#profile'
  post '/login', to: 'authentication#login'
  post '/draft', to: 'teams#draft'
  get '/opponents', to: 'teams#opponents'

end
