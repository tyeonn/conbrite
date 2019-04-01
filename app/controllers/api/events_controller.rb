class Api::EventsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def index
    @events = Event.all
  end

  def show

  end

  def create

  end

  def update
    
  end

  def destroy

  end
end