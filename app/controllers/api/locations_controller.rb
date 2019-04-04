class LocationsController < ApplicationController
  def create
    @location = Location.new(location_params)
    if @location.save
      render :show
    else
      render json: @location.errors.full_messages, status: 422
    end
  end

  private
  def location_params
    params.require(:location).permit(:city, :state, :country, :zip_code)
  end


end