class Api::TicketsController < ApplicationController 
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def create
    @ticket = Ticket.new(ticket_params)
    if @ticket.save
      render :show
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def update
    @ticket = Ticket.find_by(id: params[:id])
    if @ticket.update(ticket_params)
      render :show
    else
      render json: @ticket.errors.full_messages, status: 422
    end

  end

  def destroy
    @ticket = Ticket.find_by(id: params[:id])
    if @ticket
      @ticket.destroy
      render :show
    else
      render json: ["Ticket doesn't exist"], status: 404
    end

  end

  def show
    @ticket = Ticket.find_by(id: params[:id])
    if @ticket 
      render :show
    else
      render json: ["Ticket doesn't exist"], status: 404
    end

  end

  def index
    @tickets = Ticket.all.includes(:event, :registrant)
    if @tickets
      render :index
    else
      render json: ["There are no tickets"], status: 404
    end


  end

  private
  def ticket_params
    params.require(:ticket).permit(
      :name, :price, :ticket_type, :quantity, :event_id, :registrant_id
    )
  end
end