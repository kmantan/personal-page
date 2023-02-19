import { useState } from "react";

export default function NavBar ( {currentView, setCurrent} ) {

  return (
    <div className="h-1/4 w-full flex flex-row content-center justify-center">
      <p className="navButton" onClick={() => setCurrent("Main")}>Main</p>
      <p className="navButton" onClick={() => setCurrent("Work")}>Work</p>
      <p className="navButton" onClick={() => setCurrent("About")}>About</p>
      <p className="navButton" onClick={() => setCurrent("Contact")}>Contact</p>
    </div>
  )
}