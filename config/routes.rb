Rails.application.routes.draw do

  get 'allergies/index'

  # Home controller routes.
  root   'home#index'
  get    'auth'            => 'home#auth'
  
  # Get login token from Knock
  post   'user_token'      => 'user_token#create'
  
  # User actions
  get    '/users'          => 'users#index'
  get    '/users/current'  => 'users#current'
  post   '/users/create'   => 'users#create'
  patch  '/user/:id'       => 'users#update'
  delete '/user/:id'       => 'users#destroy'


  post '/search' => 'search#filter'

  #restaurant actions
  resources :restaurants, only: [:index, :show, :create, :update, :destroy] do 
    resources :menus, only: [:index, :show, :create, :destroy]
  end

  resources :menus, only: [:show, :update] do 
    resources :menu_items, only: [:index, :show, :create, :update, :destroy]
  end

  resources :allergies, only: [:index]


end