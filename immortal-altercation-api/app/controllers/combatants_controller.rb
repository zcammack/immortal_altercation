class CombatantsController < ApplicationController

    def index
        render json: Combatant.all
    end
end
