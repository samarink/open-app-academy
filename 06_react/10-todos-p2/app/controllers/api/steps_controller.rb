class Api::StepsController < ApplicationController
  def index
    render json: Todo.find(params[:todo_id]).steps
  end

  def create
    @step = Step.new(steps_params)
    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @step = Step.find(params[:id])
    if @step.update(steps_params)
      render json: @step
    else
      render json: @step.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @step = Step.find(params[:id])
    if @step.destroy
      render json: @step
    else
      render json: @step.errors.full_messages, status: :unprocessable_entity
    end
  end


  private
  def steps_params
    params.require(:step).permit(:title, :body, :done, :todo_id)
  end
end
