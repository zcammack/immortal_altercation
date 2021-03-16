class UserCombat < ApplicationRecord
    belongs_to :users
    belongs_to :combats
end
