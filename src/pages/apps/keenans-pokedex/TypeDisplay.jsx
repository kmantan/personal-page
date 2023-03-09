import React from 'react';

const typeStyling = {
  normal: 'bg-gray-400',
  fire: 'bg-orange-400',
  water: 'bg-blue-400',
  grass: 'bg-green-400',
  electric: 'bg-yellow-300',
  ice: 'bg-blue-200',
  fighting: 'bg-amber-900',
  poison: 'bg-purple-400',
  ground: 'bg-yellow-200',
  flying: 'bg-purple-300',
  psychic: 'bg-pink-600',
  bug: 'bg-green-200',
  rock: 'bg-amber-800',
  ghost: 'bg-indigo-200',
  dark: 'bg-indigo-800',
  dragon: 'bg-indigo-600',
  steel: 'bg-blue-100',
  fairy: 'bg-fuchsia-200'
};

export default function TypeDisplay({pokemon}){
  if(typeof pokemon === 'object'){
    return pokemon.types.map((pokeType) => {
      const currentType = typeStyling[pokeType.type.name];
      const shadowType = currentType.slice(3, currentType.length - 4);
      const classStyling = `${currentType} shadow-lg shadow-${shadowType}-500/50 mr-2 rounded-full pl-2 pr-2`;
      const typeName = pokeType.type.name;
      return (
        <p className={classStyling} key={pokeType.slot}>{(pokeType.type.name[0]).toUpperCase() + (pokeType.type.name).slice(1)}</p>
      )
    });
  } else {
    return null;
  }
};