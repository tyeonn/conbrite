class Api::EventsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def index
    @events = Event.all
    render :index
  end

  def show
    @event = Event.find_by(id: params[:id])
    
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render :show
  end

  private 
  def event_params
    params.require(:event).permit(
      :title, :description, :address, :image_url, :start_date, :end_date,
      :max_tickets, :location_id, :category_id, :organizer_id
    )
  end
end