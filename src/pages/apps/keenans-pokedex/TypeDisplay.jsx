import React from 'react';

const typeStyling = {
  normal: 'gray-300',
  fire: 'orange-400',
  water: 'blue-400',
  grass: 'green-400',
  electric: 'yellow-300',
  ice: 'blue-200',
  fighting: 'amber-900',
  poison: 'purple-400',
  ground: 'yellow-200',
  flying: 'purple-200',
  psychic: 'pink-600',
  bug: 'green-200',
  rock: 'amber-800',
  ghost: 'indigo-200',
  dark: 'indigo-800',
  dragon: 'indigo-600',
  steel: 'blue-100',
  fairy: 'fuchsia-200'
};

export default function TypeDisplay({pokemon}){
  if(typeof pokemon === 'object'){
    return pokemon.types.map((pokeType) => {
      const currentType = typeStyling[pokeType.type.name];
      const typeName = pokeType.type.name;
      console.log(currentType);
      return (
        <p className={`bg-${currentType} shadow-lg shadow-${currentType}/50 mr-2 rounded-full pl-2 pr-2`} key={pokeType.slot}>{(pokeType.type.name[0]).toUpperCase() + (pokeType.type.name).slice(1)}</p>
      )
    });
  } else {
    return null;
  }
};