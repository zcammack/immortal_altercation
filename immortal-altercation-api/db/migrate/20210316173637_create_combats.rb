class CreateCombats < ActiveRecord::Migration[6.0]
  def change
    create_table :combats do |t|
      t.string :name
      t.string :combatant_a
      t.string :combatant_b

      t.timestamps
    end
  end
end
