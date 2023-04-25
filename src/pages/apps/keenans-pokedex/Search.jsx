import React, { useState } from 'react';
import gsap from 'gsap';
import AllPokemon from './AllPokemon.jsx';

export default function Search({updatePokemon}) {
  let [requestedPokemon, setRequestedPokemon] = useState('');
  let [suggested, setSuggested] = useState([]);
  let currentPosition = 0;

  return (
    <form>
      <label className="pr-4">Name:</label>
      <div className="absolute flex flex-col">
        <input type="text" name="name" value={requestedPokemon} onChange={(e) => {
          setRequestedPokemon(e.target.value);

          setSuggested(suggested => AllPokemon.filter((search) => {
            if((search.name.english).toLowerCase().includes((e.target.value).toLowerCase())){
              return search.name.english;
            }
          }).map((pokemon) => {
            return pokemon.name.english;
          }))
        }}/>
        { suggested.length > 0 ?
        <div className="relative h-24 overflow-y-scroll">{
          suggested.map((term) => {
            return <p key={term}
            onClick={(e) => {
              setRequestedPokemon(e.target.innerText);
              function animate() {
                gsap.to(".pokemon", {
                x: 0, //normal value
                y: currentPosition - 50,
                duration: 0.5
            });
            gsap.to(".pokemon", {
              x: 0, //normal value
              y: currentPosition + 0,
              duration: 0.5
          });
          }

            setInterval(animate, 2000)
              updatePokemon((e.target.innerText).toLowerCase());

            }}>{term}</p>
          })
        }</div>
        : null
        }

      </div>
      <input className="bg-blue-400 shadow-lg shadow-blue-400/50 h-10 w-24 m-4 rounded-full ml-4" type="submit" value="Submit" onClick={(e) => {
        e.preventDefault();
        // gsap.fromTo(".pokemon", {opacity: 0}, {opacity: 1, duration: 4});
        function animate() {
          gsap.to(".pokemon", {
          x: 0, //normal value
          y: currentPosition - 50,
          duration: 0.5
      });
      gsap.to(".pokemon", {
        x: 0, //normal value
        y: currentPosition + 0,
        duration: 0.5
    });
    }


      setInterval(animate, 2000)
        updatePokemon(requestedPokemon.toLowerCase());
      }}/>
    </form>
  )
}
