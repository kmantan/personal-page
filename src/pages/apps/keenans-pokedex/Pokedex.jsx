import React from "react";
import Search from './Search.jsx';
import Display from './Display.jsx';
import Ditto from './../../../DefaultPokemon.js';



class KeenansPokedex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPokemon: Ditto
    };
    this.updatePokemon = this.updatePokemon.bind(this);
  }

  updatePokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(res => res.json())
    .then(pokemonInfo => {
      this.setState({currentPokemon: pokemonInfo, animationComplete: false});
      console.log(Object.keys(this.state.currentPokemon));
    })
  }

  render() {
    return (
      <>
      <h2 className="h-1/6 flex items-center justify-center w-full">Keenan&apos;s Pokedex</h2>
    <Search updatePokemon={this.updatePokemon} className="h-5/6"/>
    <Display currentPokemon={this.state.currentPokemon}/>
      </>
    );
  }
}

export default KeenansPokedex;