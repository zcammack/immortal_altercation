class AbilitySerializer < ActiveModel::Serializer
  attributes :id, :fighter, :name, :img_url, :damage
end
