class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def show
  end

  def create
  end

  private 
  def item_params
    params.require(:item).permit(:name, :image, :description, :likes)
  end
end
