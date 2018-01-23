Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    # /api/cats/123
    resources :cats
    # /api/dogs/123
    resources :dogs
  end
end
