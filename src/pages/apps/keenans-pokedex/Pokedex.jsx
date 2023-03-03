import React from "react";
import Search from './Search.jsx'


class KeenansPokedex extends React.Component {
  render() {
    return (
      <>
      <h2 className="h-1/6 flex items-center justify-center w-full">Welcome to Keenans Pokedex</h2>
    <Search className="h-5/6"/>
      </>
    );
  }
}

export default KeenansPokedex;