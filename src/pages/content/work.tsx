import { useState } from "react";
import Pokedex from "../apps/keenans-pokedex/Pokedex.jsx";
import HealthCoach from "../apps/my-health-coach/HealthCoach";
import Atelier from "../apps/atelier/Atelier";

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
        <Atelier />
      </section>
    </div>
  )
};