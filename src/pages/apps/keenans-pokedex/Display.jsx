import React from 'react';
import Image from 'next/image'

export default function Display({currentPokemon}) {
  currentPokemon = currentPokemon || {
    sprites: {
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    }
  };

  let image = currentPokemon.sprites.front_default || "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";

  if(image){
    return (
     <Image src={image} alt="" width={100} height={100}></Image>
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