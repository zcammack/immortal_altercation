class AbilitySerializer < ActiveModel::Serializer
  attributes :id, :fighter, 
  :name1, :img_url1, :dp1, 
  :name2, :img_url2, :dp2, 
  :name3, :img_url3, :dp3,
  :name4, :img_url4, :dp4
end
