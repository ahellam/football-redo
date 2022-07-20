Rails.application.routes.draw do
  resources :team_players
  resources :teams
  resources :positions
  resources :games
  resources :players

  resources :users, only: [:index, :create, :destrtoy]
  get '/profile', to: 'users#profile'
  post '/login', to: 'authentication#login'

end
