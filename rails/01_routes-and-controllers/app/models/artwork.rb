class Artwork < ApplicationRecord
  validates :title, :image_url, :artist_id, presence: true
  validates :image_url, uniqueness: true
  validates :title, uniqueness: { scope: :artist_id }

  has_many :artwork_shares
  has_many :shared_viewers, through: :artwork_shares, source: :viewer
  has_many :comments, dependent: :destroy
  belongs_to :artist, foreign_key: :artist_id, class_name: 'User'

  def self.artworks_for_user_id(user_id)
    joins_cond = <<-SQL
      LEFT OUTER JOIN
        artwork_shares ON artworks.id = artwork_shares.artrwork_id
    SQL
    where_cond = <<-SQL
      ((artworks.artist_id = :user_id) OR (artwork_shares.viewer_id = :user_id))
    SQL

    Artwork
      .joins(joins_cond)
      .where(where_cond, user_id: user_id)
      .uniq
  end
end
