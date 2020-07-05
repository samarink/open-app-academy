import React from 'react';

import GiphysIndexItem from './giphys_index_item';

const GiphysIndex = ({ giphys }) => (
  <ul>
    { giphys.map(giphy => <GiphysIndexItem key={giphy.id} giphy={giphy} />) }
  </ul>
);

export default GiphysIndex;
