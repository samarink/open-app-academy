class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title
      t.string :body
      t.references :todo
      t.boolean :done

      t.timestamps
    end
  end
end
