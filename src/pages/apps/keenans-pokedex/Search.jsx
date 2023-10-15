import React, { useState } from 'react';
import gsap from 'gsap';


export default function Search({allPokemon, updatePokemon}) {
  let [requestedPokemon, setRequestedPokemon] = useState('');
  let [suggested, setSuggested] = useState([]);
  let currentPosition = 0;

  function updateSuggested(newPokemon){
    setRequestedPokemon(priorRequest => newPokemon);
//     function animate() {
//       gsap.to(".pokemon", {
//       x: 0, //normal value
//       y: currentPosition - 50,
//       duration: 0.5
//   });
//   gsap.to(".pokemon", {
//     x: 0, //normal value
//     y: currentPosition + 0,
//     duration: 0.5
// });
// }
  setRequestedPokemon('');

  // setInterval(animate, 2000)
    updatePokemon(newPokemon);

  }

  return (
    <form>
      <div className="flex flex-row items-center justify-center">
        <label className="pr-4">Name:</label>
        <div className="flex flex-col">
        <input type="text" name="name" className="max-h-5" placeholder="example: pikachu"
        value={requestedPokemon} onChange={(e) => {
          setRequestedPokemon(e.target.value);

          setSuggested(priorSuggested => allPokemon.filter((search) => {
            if((search.name.english).toLowerCase().includes((e.target.value).toLowerCase())){
              return search.name.english;
            }
          }).map((pokemon) => {
            return pokemon.name.english;
          }));
        }}/>
        {requestedPokemon.length > 0 ?
        <div className="bg-gray-500 h-24 overflow-y-scroll">{
          suggested.map((term) => {
            return <p key={term} className="text-white"
            onClick={(e) => {
              updateSuggested(e.target.innerText.toLowerCase());
            }}>{term}</p>
          })}
        </div>
        : null
        }
        </div>
       <input className="bg-blue-400 shadow-lg shadow-blue-400/50 h-10 w-24 m-4 rounded-full ml-4" type="submit" value="Submit" onClick={(e) => {
          e.preventDefault();
          updateSuggested(requestedPokemon.toLowerCase());
        // gsap.fromTo(".pokemon", {opacity: 0}, {opacity: 1, duration: 4});
        }}/>
      </div>
    </form>
  )
}
