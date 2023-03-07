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
        <Image className="pokemon" src={image} alt="" width={150} height={150}></Image>
        <div className="flex flex-col">
          <p>Pokemon ID # {currentPokemon.id}</p>
          <p>Weight: {Math.round(currentPokemon.weight / 4.535923)}lbs</p>
          <p>Height: {currentPokemon.height}0cm</p>
          <div className="flex flex-row">
          <p className="mr-2">{currentPokemon.types.length > 1 ? 'Types: ' : 'Type: '}</p>
          <TypeDisplay pokemon={currentPokemon}/>
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