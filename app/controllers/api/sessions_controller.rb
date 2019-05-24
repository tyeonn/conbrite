class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render 'api/users/show'
    else
      render json: ['Nobody is signed in'], status: 404
    end
  end

  # session show is for checking email on sign in
  def show
    @user = User.find_by(email: params[:email] )
    if @user 
      render :show
    else
      render json: ['Email not found'], status: 422
    end

  end
end
