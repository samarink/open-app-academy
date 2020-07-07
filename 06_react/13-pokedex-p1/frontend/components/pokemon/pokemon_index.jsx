import React from 'react';
import { Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonItems = pokemon.map(poke => (
      <PokemonIndexItem key={poke.id} pokemon={poke} />
    ));

    return (
      <section className='pokedex'>
        <Route
          path="/pokemon/:pokemonId"
          component={PokemonDetailContainer}
        />
        <ul>{pokemonItems}</ul>
      </section>
    )
  }
}

export default PokemonIndex;
