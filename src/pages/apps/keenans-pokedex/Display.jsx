import React from 'react';

export default function Display({currentPokemon}) {
  let image = currentPokemon.sprites.front_default;

  if(image){
    return (
     <img src={image}></img>
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