import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// phase 1
// const addLoggingToDispatch = store => {
//   const dispatch = store.dispatch;
//   return (action) => {
//     console.log('old state: ', store.getState());
//     console.log('action: ', action.type);
//     dispatch(action);
//     console.log('new state: ', store.getState());
//   }
// }

// phase 2
// const applyMiddlewares = (store, ...middlewares) => {
//   let dispatch = store.dispatch;
//   middlewares.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch })
// }

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);

  //phase 2
  // store = applyMiddlewares(store, addLoggingToDispatch);

  // phase 1
  // store.dispatch = addLoggingToDispatch(store);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
