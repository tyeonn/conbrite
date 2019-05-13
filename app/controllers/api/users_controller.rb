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
  # def update

  # end

  def show
    @user = User.includes(:registered_tickets).find_by(id: params[:id])
    if @user 
      render 'api/users/show'
    else
      render json: ['User not found'], status: 404
    end
  end
  
  # def destroy

  # end
  
  private
  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :image_url)
  end
end