import React from 'react';

export default function MovesDisplay({moves}){
  moves = moves || [];
  return (
    <table>
      <tbody>
      <tr>
        <th>Moves List</th>
      </tr>
          {moves.map((move) => {
            const name = move.move.name;
            const formattedName = (name[0]).toUpperCase() + (name).slice(1);
            if(move.version_group_details[0].move_learn_method.name === 'level-up'){
              return (
                <tr key={`${name}-row`}>
                  <td key={name}>{formattedName}</td>
                </tr>
              )
            }
          })}
      </tbody>
    </table>
  )
}