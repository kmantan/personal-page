import React from "react";
import Search from './Search.jsx';
import Display from './Display.jsx';
import Ditto from './../../../DefaultPokemon.js';
import ScrollForMore from './../../../commonFunctionalities/ScrollForMore.jsx';
import MovesDisplay from './MovesDisplay.jsx';
import RecentSearches from './RecentSearches.jsx';



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
    })
  }

  render() {
    return (
      <div className="relative h-full flex flex-col items-center lg:w-1/3">
        <h2 className="h-1/6 flex items-center justify-center w-full"
        onClick={() => window.open("https://github.com/kmantan/keenans-pokedex")}>Keenan&apos;s Pokedex</h2>
        <Search updatePokemon={this.updatePokemon} className="h-5/6"/>
        {/* <RecentSearches updatePokemon={this.updatePokemon}/> */}
        <div className="flex flex-row justify-between w-full">
          <Display currentPokemon={this.state.currentPokemon}/>
          <div className="pokeMoveList">
           <MovesDisplay moves={this.state.currentPokemon.moves}/>
          </div>
        </div>
        <div className="absolute bottom-20">
          <ScrollForMore />
        </div>
      </div>
    );
  }

  componentDidMount(){
    this.updatePokemon('charmander');
  }

}

export default KeenansPokedex;