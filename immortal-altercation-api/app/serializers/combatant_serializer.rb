class CombatantSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :abilities, :hp
end
