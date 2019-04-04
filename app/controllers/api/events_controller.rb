class Api::EventsController < ApplicationController
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def index
    @events = Event.all
    if @events
      render :index
    else
      render json: ['There are no events'], status: 404
    end
  end

  def show
    @event = Event.find_by(id: params[:id])
    if @event
      render :show
    else
      render json: ['Event does not exist'], status: 404
    end
    
  end

  # only after login 
  def create
    debugger
    @event = current_user.organized_events.new(event_params)
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find_by(id: params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find_by(id: params[:id])
    if @event
      @event.destroy
      render :show
    else
      render json: ["Event doesn't exist"], status: 404
    end
  end

  private 
  def event_params
    params.require(:event).permit(
      :title, :description, :address, :image_url, :start_date, :end_date,
      :max_tickets, :location_id, :category_id, :organizer_id
    )
  end
end