import React from 'react';

const BenchIndexItem = ({ bench }) => (
  <li className='bench-item'>
    {bench.description}
  </li>
);

export default BenchIndexItem;
