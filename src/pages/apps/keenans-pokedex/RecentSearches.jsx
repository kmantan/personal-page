import React from 'react';

export default function RecentSearches({updatePokemon}){
  const recents = ['Pikachu', 'Charizard', 'Bulbasaur', 'Mewtwo', 'Ditto', 'Meowth'];

  return (
    <table className="invisible block w-0 md:visible inline">
      <tbody>
        <tr className="flex flex-row">
          <td>Recent Searches</td>
            {recents.map((recentPokemon) => {
              return (
                <td key={recentPokemon}
                  onClick={(e) => {
                  updatePokemon(e.target.innerText.toLowerCase());
                  }}
                  className="m-4 mt-0">{recentPokemon}</td>
                )
              })}
        </tr>
      </tbody>
    </table>
  );
};