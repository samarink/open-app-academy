import React from 'react';
import ReactDom from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store; // TODO: test, delete later

  ReactDom.render(
    <Root store={store} />,
    document.getElementById('content')
  );
});
