import React from 'react';
import { Route } from 'react-router-dom';
import GodsList from './gods/GodsList';
import Create from './create/Create';
import Nav from './navigation/Nav';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path='/' component={Nav} />
        <Route exact path='/gods/:id' component={GodDetail} />
        <Route exact path='/new' component={Create} />
        <Route exact path='/' component={GodsList} />
      </Switch>
    </div>
  );
};

export default App;
