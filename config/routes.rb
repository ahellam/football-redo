Rails.application.routes.draw do

  resources :users, only: [:index, :create, :destrtoy]
  get '/profile', to: 'users#profile'
  post '/login', to: 'authentication#login'

end
