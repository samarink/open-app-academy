  def better_tracks_query
    # TODO: your code here
    albums = self
      .albums
      .select('albums.*, COUNT(*) as tracks_count')
      .joins(:tracks)
      .group('albums.id')

    albums_count = {}
    albums.each |album| do
      albums_count[album.title] = album.tracks_count
    end

    albums_count
  end
