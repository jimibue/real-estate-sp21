class Api::AgentsController < ApplicationController

    def index
      render json: Agent.by_property_count
      
    end

    def show
    #   agent = Agent.find(params[:id])
    #   render json agent.buyers
    render json: Agent.get_buyers(params[:id])
    end
end
