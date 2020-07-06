import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    const pokemonLi = pokemon.map(poke => <li key={poke.name}>{poke.name}</li>);

    return (
      <ul>
        {pokemonLi}
      </ul>
    )
  }
}

export default PokemonIndex;
