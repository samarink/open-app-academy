class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end

    add_index :artworks, :artist_id
    add_index :artworks, :image_url, unique: true

    # single artist is not to be able to to have two pieces with same title
    add_index :artworks, [:title, :artist_id], unique: true
  end
end
