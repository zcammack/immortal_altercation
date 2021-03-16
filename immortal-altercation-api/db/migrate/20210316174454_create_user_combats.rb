class CreateUserCombats < ActiveRecord::Migration[6.0]
  def change
    create_table :user_combats do |t|
      t.integer :user_id
      t.integer :combat_id

      t.timestamps
    end
  end
end
