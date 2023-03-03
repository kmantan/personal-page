import React from 'react';

export default function TypeDisplay({pokemon}){
    return pokemon.types.map((pokeType) => {
      return (
        <p key={pokeType.slot}>{pokeType.type.name} </p>
      )
    });
};