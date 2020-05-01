  def better_tracks_query
    albums = self
      .albums
      .select('albums.*, COUNT(*) AS tracks_count')
      .joins(:tracks)
      .group('albums.id')

    album_counts = {}
    albums.each do |album|
      album_counts[album.title] = album.tracks_count
    end

    album_counts
  end
