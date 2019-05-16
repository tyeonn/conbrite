# frozen_string_literal: true

class Api::TicketsController < ApplicationController
  before_action :ensure_logged_in, only: %i[create update destroy]
  before_action :check_quantity, only: [:sell_ticket]

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
    # @tickets = Ticket.all.includes(:event, :registrant)
    @tickets = Ticket.where('event_id = ?', params[:eventId].to_i)
    if @tickets
      render :index
    else
      render json: ['There are no tickets'], status: 404
    end
  end

  # Errors might be from update!, subtraction, check quant t/f, << curr,
  def sell_ticket
    @ticket = Ticket.find_by(id: params[:id])
    if @ticket
      @ticket.update!(quantity: @ticket.quantity - params['ticket'][:quantity].to_i)
      params['ticket'][:quantity].to_i.times { @ticket.registered_users << current_user }
      render :show
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def refund_ticket
    @ticket = Ticket.find_by(id: params[:id])
    if @ticket
      @ticket.update!(quantity: @ticket.quantity + params['ticket'][:quantity].to_i)
      # params['ticket'][:quantity].to_i.times { @ticket.registered_users.delete(current_user) }
        @ticket.registrations.first.delete
      # @ticket.registered_users.delete(current_user)
      render :show
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  private

  def ticket_params
    params.require(:ticket).permit(
      :name, :price, :ticket_type, :quantity, :event_id
    )
  end

  # might have error
  def check_quantity
    ticket = Ticket.find(params[:id])

    # ticket.quantity > params['ticket'][:quantity].to_i
    if ticket.quantity - params['ticket'][:quantity].to_i >= 0
      return true
    else
      render json: ['Sold Out'], status: 422
    end
  end
end
