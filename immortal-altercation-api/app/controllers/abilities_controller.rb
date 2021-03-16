class AbilitiesController < ApplicationController

    def index
        render json: Ability.all
    end
end
