class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    user = User.new(params.require(:user).permit(:name, :email))
    user.save!

    render json: user
  end

  def show
    redner json: params
  end
end
