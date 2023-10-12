import React from 'react';
import Image from 'next/image'
import Ditto from './../../../DefaultPokemon.js';
import TypeDisplay from './TypeDisplay.jsx';

export default function Display({allPokemon, currentPokemon, updatePokemon}) {
  currentPokemon = currentPokemon || Ditto;

  let image = "https://projectpokemon.org/images/normal-sprite/" + currentPokemon.name + ".gif";

  function togglePokemon(direction){
    allPokemon.map((pokemon) => {
      if(pokemon.id === currentPokemon.id + direction){
        updatePokemon((pokemon.name.english).toLowerCase());
      }
    })
  }

  if(image){
    return (
      <div className="flex flex-col items-center">
        <h3 className="text-xl">{currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1,currentPokemon.name.length)}</h3>
        <img className="pokemon" src={image} alt="" width="100px" height="100px"></img>
        <div className="flex flex-col">
          <p>Pokemon ID # {currentPokemon.id}</p>
          <p>Weight: {Math.round(currentPokemon.weight / 4.535923)}lbs</p>
          <p>Height: {currentPokemon.height}0cm</p>
          <div className="flex flex-row">
          <p className="mr-2">{currentPokemon.types.length > 1 ? 'Types: ' : 'Type: '}</p>
          <TypeDisplay pokemon={currentPokemon}/>
          </div>
          <div className="p-2">
            <button className="rounded-lg p-2 hover:text-blue-400" onClick={() => {
              if(currentPokemon.id >= 2){
                togglePokemon(-1);
              }
            }}>Previous</button>
            <button className="rounded-lg p-2 hover:text-blue-400"
            onClick={() => togglePokemon(1)}>Next</button>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }

}

/*
PokeAPI's Pokemon info keys:
[
    "abilities",
    "base_experience",
    "forms",
    "game_indices",
    "height",
    "held_items",
    "id",
    "is_default",
    "location_area_encounters",
    "moves",
    "name",
    "order",
    "past_types",
    "species",
    "sprites",
    "stats",
    "types",
    "weight"
]
*/