class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :image
      t.integer :rank
      t.integer :position_id
      t.integer :price
      t.boolean :canDelete
      t.timestamps
    end
  end
end
