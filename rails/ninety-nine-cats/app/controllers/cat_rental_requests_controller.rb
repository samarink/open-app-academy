class CatsRentalRequestsController < ApplicationController
  def create
    @rental_request = CatRentalRequest.new(cat_rental_request_params)

    if rental_request.save
      redirecit_to cat_url(@rental_request.cat)
    else
      flash.now[:errors] = @rental_request.errors.full_messages
      render :new
    end
  end

  def new
    @rental_request = CatRentalRequest.new
  end

  private

  def cat_rental_request_params
    params.require(:cat_rental_requests).permit(:cat_id, :end_date, :start_date)
  end
end
