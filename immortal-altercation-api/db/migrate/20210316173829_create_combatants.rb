class CreateCombatants < ActiveRecord::Migration[6.0]
  def change
    create_table :combatants do |t|
      t.string :name
      t.string :img_url
      t.integer :hp

      t.timestamps
    end
  end
end
