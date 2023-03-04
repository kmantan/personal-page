import React from 'react';
import Image from 'next/image'
import Ditto from './../../../DefaultPokemon.js';
import TypeDisplay from './TypeDisplay.jsx';

export default function Display({currentPokemon}) {
  currentPokemon = currentPokemon || Ditto;

  let image = currentPokemon.sprites.front_default;

  if(image){
    return (
      <div className="flex flex-col items-center">
        <h3>{currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1,currentPokemon.name.length)}</h3>
        <Image className="pokemon" src={image} alt="" width={100} height={100}></Image>
        <div className="flex flex-col">
          <p>Pokemon ID # {currentPokemon.id}</p>
          <p>Weight: {currentPokemon.weight}</p>
          <p>Height: {currentPokemon.height}</p>
          <p>{currentPokemon.types.length > 1 ? 'Types: ' : 'Type: '}
          <TypeDisplay pokemon={currentPokemon}/>
          </p>
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