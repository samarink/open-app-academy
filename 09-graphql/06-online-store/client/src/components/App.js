import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductIndex from '../components/products/ProductIndex';
import Login from '../components/Login';
import AuthRoute from '../util/route_util';

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Switch>
        <Route exact path='/' component={ProductIndex} />
        <AuthRoute exact path='/login' component={Login} routeType='auth' />
      </Switch>
    </div>
  );
};

export default App;
