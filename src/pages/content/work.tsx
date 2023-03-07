import { useState } from "react";
import Pokedex from "../apps/keenans-pokedex/Pokedex.jsx";
import HealthCoach from "../apps/my-health-coach/HealthCoach";

export default function Work(){
  return (
    <div className="work">
      <section className="poke">
        <Pokedex />
      </section>
      <section className="health">
        <HealthCoach />
      </section>
      <section className="atelier">
        <h2>Atelier</h2>
      </section>
    </div>
  )
};