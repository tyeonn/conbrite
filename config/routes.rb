Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {render: :json} do 
    resources :users, only: [:create, :destroy, :update, :show]
    get '/session/', to: 'sessions#show'
    resource :session, only: [:create, :destroy]
    resources :events, only: [:create, :destroy, :update, :show, :index]
  end

end
