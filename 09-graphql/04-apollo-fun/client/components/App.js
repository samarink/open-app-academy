import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DogIndex from './dogs/DogIndex';
import DogDetail from './dogs/DogDetail';

const App = () => (
  <div>
    <Switch>
      <Route path="/dogs/:dogId" component={DogDetail} />
      {/* <Route path='/toys' component={ToyIndex} /> */}
      <Route path="/" component={DogIndex} />
    </Switch>
  </div>
);

export default App;
