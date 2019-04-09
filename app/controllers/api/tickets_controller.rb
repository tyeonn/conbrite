class Api::TicketsController < ApplicationController 
  before_action :ensure_logged_in, only: [:create, :update, :destroy]

  def create
    debugger
    @ticket = Ticket.new(ticket_params)
    
  end

  def update

  end

  def destroy

  end

  def show

  end

  def index

  end

  private
  def ticket_params
    params.require(:ticket).permit(
      :name, :price, :type, :quantity, :event_id, :registrant_id
    )
  end
end