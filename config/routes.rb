# frozen_string_literal: true

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { render: :json } do
    resources :users, only: %i[create destroy update show]
    get '/session/', to: 'sessions#show'
    resource :session, only: %i[create destroy]
    resources :events, only: %i[create destroy update show index]
    resources :tickets, only: %i[create destroy update show index]
    patch '/tickets/:id/sell', to: 'tickets#sell_ticket'
    patch '/tickets/:id/refund', to: 'tickets#refund_ticket'
  end
end
