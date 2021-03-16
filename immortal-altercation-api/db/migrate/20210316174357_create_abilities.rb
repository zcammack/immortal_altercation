class CreateAbilities < ActiveRecord::Migration[6.0]
  def change
    create_table :abilities do |t|
      t.string :name
      t.string :image
      t.integer :damage
      t.belongs_to :combatant, foreign_key: true

      t.timestamps
    end
  end
end
