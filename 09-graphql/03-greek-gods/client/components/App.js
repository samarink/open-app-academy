import React from 'react';
import { Route } from 'react-router-dom';
import GodsList from './gods/GodsList';
import Create from './create/Create';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={GodsList} />
      <Route path='/new' component={Create} />
    </div>
  );
};

export default App;
