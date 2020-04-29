class UsersController < ApplicationController
  before_action :require_current_user!, except: [:create, :new]
  before_action :only_show_own_page, only: :show

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      redirect_to user_url(@user)
    else
      render json: @user.errors.full_messages
    end
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private

  def only_show_own_page
    redirect_to user_url(current_user) unless current_user.id == params[:id].to_i
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
