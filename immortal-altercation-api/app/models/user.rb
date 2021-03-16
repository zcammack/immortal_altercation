class User < ApplicationRecord
    has_many :user_combats
    has_many :combats through: :user_combats
end
