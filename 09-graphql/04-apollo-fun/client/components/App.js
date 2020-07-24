import React from 'react';
import { Route } from 'react-router-dom';
import DogIndex from './dogs/DogIndex';

const App = () => (
  <div>
    <Route path='/' component={DogIndex} />
  </div>
);

export default App;
