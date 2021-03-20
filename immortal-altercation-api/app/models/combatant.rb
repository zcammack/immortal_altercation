class Combatant < ApplicationRecord
    has_many :abilities, dependent: :destroy
end
