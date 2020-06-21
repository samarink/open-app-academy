import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';

// TODO: test, delete later
const store = configureStore();
window.store = store;

const App = () => (
  <h1>Todos App</h1>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    < App />,
    document.getElementById('content')
  );
});
