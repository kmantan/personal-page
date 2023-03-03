import { useState } from "react";
import Pokedex from "../apps/keenans-pokedex/Pokedex.jsx";

export default function Work(){
  return (
    <div className="work">
      <section className="poke">
        <Pokedex />
      </section>
      <section className="atelier">
        <h2>Atelier</h2>
      </section>
      <section className="health">
        <h2>My Health Coach</h2>
      </section>
    </div>
  )
};