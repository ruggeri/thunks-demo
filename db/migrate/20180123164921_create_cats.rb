class CreateCats < ActiveRecord::Migration[5.1]
  def change
    create_table :cats do |t|
      t.string :name, null: false
      t.string :personal_legend, null: false
      t.boolean :is_awesome, null: false
    end
  end
end
