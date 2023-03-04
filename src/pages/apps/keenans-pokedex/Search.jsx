import React from 'react';

export default function Search({updatePokemon, animatePokemon}) {
  let requestedPokemon;

  return (
    <form>
    <label className="pr-4">Name:</label>
    <input type="text" name="name" value={requestedPokemon} onChange={(e) => {
        requestedPokemon = e.target.value;
      }}/>
      <input className="bg-blue-400 h-10 w-24 m-4 rounded-full ml-4" type="submit" value="Submit" onClick={(e) => {
        e.preventDefault();
        updatePokemon(requestedPokemon.toLowerCase());
        animatePokemon();
      }}/>
</form>
  )
}
