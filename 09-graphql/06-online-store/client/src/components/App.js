import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import ProductIndex from '../components/products/ProductIndex';

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Route exact path='/' component={ProductIndex} />
    </div>
  );
};

export default App;
