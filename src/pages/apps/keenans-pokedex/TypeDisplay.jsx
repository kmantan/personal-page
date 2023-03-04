import React from 'react';

export default function TypeDisplay({pokemon}){
  if(typeof pokemon === 'object'){
    return pokemon.types.map((pokeType) => {
      return (
        <p key={pokeType.slot}>{pokeType.type.name} </p>
      )
    });
  } else {
    return null;
  }
};