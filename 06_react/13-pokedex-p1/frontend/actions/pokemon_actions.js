import * as PokemonAPIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_SINGLE_POKEMON = 'RECEIVE_SINGLE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const receiveSinglePokemon = pokemon => ({
  type: RECEIVE_SINGLE_POKEMON,
  pokemon
});

export const requestAllPokemon = () => (dispatch) => (
  PokemonAPIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestSinglePokemon = (id) => (dispatch) => (
  PokemonAPIUtil.fetchSinglePokemon(id)
    .then(pokemon => dispatch(requestSinglePokemon(pokemon)))
);
