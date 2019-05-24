Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { render: :json } do
    resources :users, only: %i[create destroy update show]
    patch 'users/:id/addBookmark', to: 'users#add_bookmark'
    patch 'users/:id/removeBookmark', to: 'users#remove_bookmark'
    get '/session/', to: 'sessions#show'
    resource :session, only: %i[create destroy]
    resources :events, only: %i[create destroy update show index]
    resources :tickets, only: %i[create destroy update show index]
    patch '/tickets/:id/sell', to: 'tickets#sell_ticket'
    patch '/tickets/:id/refund', to: 'tickets#refund_ticket'
  end
end
