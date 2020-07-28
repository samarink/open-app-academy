import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductIndex from '../components/products/ProductIndex';
import Login from '../components/Login';

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Switch>
        <Route exact path='/' component={ProductIndex} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
};

export default App;
