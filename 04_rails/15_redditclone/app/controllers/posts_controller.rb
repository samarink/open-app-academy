class PostsController < ApplicationController
  before_action :require_user_owns_post!, only: [:edit, :update]
  def show
    @post = Post.find_by(id: params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
    end
  end

  def edit
    @post = Post.find_by(id: params[:id])
  end

  def update
    @post = Post.find_by(id: arams[:id])

    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
    end
  end

  private

  def post_params
    params.require(:post).permit(
      :url, :title, :content, :user_id, sub_ids: []
    )
  end

  def require_user_owns_post!
    return if current_user.posts.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end
end
