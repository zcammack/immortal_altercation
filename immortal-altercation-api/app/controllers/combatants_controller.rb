class CombatantsController < ApplicationController

    def index
        render json: Combatant.all
    end

    def create
        @combatant = Combatant.create(:name => params["combatantName"], :img_url => params["combatantImage"], :hp => params["health"])
        
        @ability_one = Ability.create(:name => params["abilityOne"]["name"], :image => params["abilityOne"]["image"], :damage => params["abilityOne"]["damage"], :combatant_id => @combatant.id)

        @ability_two = Ability.create(:name => params["abilityTwo"]["name"], :image => params["abilityTwo"]["image"], :damage => params["abilityTwo"]["damage"], :combatant_id => @combatant.id)

        @ability_three = Ability.create(:name => params["abilityThree"]["name"], :image => params["abilityThree"]["image"], :damage => params["abilityThree"]["damage"], :combatant_id => @combatant.id)

        @ability_four = Ability.create(:name => params["abilityFour"]["name"], :image => params["abilityFour"]["image"], :damage => params["abilityFour"]["damage"], :combatant_id => @combatant.id)

        render json: @combatant
    end

    def update
        @combatant = Combatant.find(params[:id])
        @combatant.update(name: params["name"], img_url: params["image"])
        render json: @combatant
    end

    def show
        render json: Combatant.find(params[:id])
    end

    def destroy
        @combatant = Combatant.find(params[:id])
        @combatant.destroy

        render json: Fighter.all
    end

end
