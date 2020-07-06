import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

// test
import { receiveAllPokemon } from './actions/pokemon_actions';
import { fetchAllPokemon } from './util/api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  // test
  window.getState=store.getState;
  window.dispatch=store.dispatch;
  window.receiveAllPokemon=receiveAllPokemon;
  window.fetchAllPokemon=fetchAllPokemon;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Pokedex</h1>, root);
});
