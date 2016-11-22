Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :bees
  root to: "bees#index"
  # get '/honey' => 'bees#honey'
  (BeesController.action_methods).each do |route_sym|
  match route_sym.to_s, to: "bees##{route_sym.to_s}", via: 'get'
  end

end
