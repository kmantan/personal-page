import React from 'react';

export default function Search() {
  return (
    <form>
    <label>
      Name:
      <input type="text" name="name" />
    </label>
    <br></br>
      <input className="bg-blue-400 h-10 w-24 m-4 rounded-full" type="submit" value="Submit" />
</form>
  )
}
