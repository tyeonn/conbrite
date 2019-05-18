class Api::UsersController < ApplicationController 
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end

  end


  def show
    @user = User.includes({registered_tickets: :event}, :bookmarked_events).find_by(id: params[:id])
    
    if @user 
      render 'api/users/show'
    else
      render json: ['User not found'], status: 404
    end
  end

  def add_bookmark
    @event = Event.find_by(id: params[:event][:id])
    @user = User.find_by(id: params[:id])
    if @event && @user
      @event.followers << current_user
      render 'api/users/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def remove_bookmark
    @event = Event.find_by(id: params[:event][:id])
    @user = User.find_by(id: params[:id])

    if @event && @user
      @event.followers.delete(@user)
      render 'api/users/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end
 
  
  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :image_url, :event)
  end
end