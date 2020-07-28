import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductIndex from '../components/products/ProductIndex';
import Login from '../components/Login';
import AuthRoute from '../util/route_util';
import Nav from './Nav';

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
        <Route path ='/' component={Nav} />
        <Route exact path='/' component={ProductIndex} />
        <AuthRoute exact path='/login' component={Login} routeType='auth' />
    </div>
  );
};

export default App;
