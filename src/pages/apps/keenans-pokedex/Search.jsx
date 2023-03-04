import React from 'react';
import gsap from 'gsap';

export default function Search({updatePokemon}) {
  let requestedPokemon;

  return (
    <form>
      <label className="pr-4">Name:</label>
      <input type="text" name="name" value={requestedPokemon} onChange={(e) => {
        requestedPokemon = e.target.value;
      }}/>
      <input className="bg-blue-400 h-10 w-24 m-4 rounded-full ml-4" type="submit" value="Submit" onClick={(e) => {
        e.preventDefault();
        // gsap.fromTo(".pokemon", {opacity: 0}, {opacity: 1, duration: 4});
        const animate = () => gsap.fromTo(".pokemon", {
          x: 0, //normal value
          y: -10
      },
      {
          x: 0,
          y: 0,
          duration: 0.5
      });
      setInterval(animate, 750)
        updatePokemon(requestedPokemon.toLowerCase());
      }}/>
    </form>
  )
}
