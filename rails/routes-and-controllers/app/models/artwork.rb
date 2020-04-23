class Artwork < ApplicationRecord
  validates :title, :image_url, :artist_id, presence: true
  validates :image_url, uniquiness: true
  validates :title, uniquiness: { scope: :artist_id }

  has_many :artwork_shares
  has_many :shared_viewers, through: :artwork_shares, source: :viewer
  belongs_to :artist, foreign_key: :artist_id, class_name: 'User'
end
