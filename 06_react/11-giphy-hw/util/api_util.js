export const fetchSearchGiphys = searchTerm => (
  $.ajax({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=8SjtMFlHPfendsSlkutCkQ0gHAkpguLP&limit=2`
  })
);

