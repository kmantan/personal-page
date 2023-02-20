import { useState } from "react";

type ViewProps = {
  currentView: String,
  setCurrent: Function
}

export default function NavBar ( {currentView, setCurrent} : ViewProps ) {

  return (
    <div className="h-1/4 w-full flex flex-row content-center justify-center">
      <p className={"navButton " + `${currentView === "Main" ? "underline underline-offset-8 text-blue-600" : ""}`} onClick={() => setCurrent("Main")}>Main</p>
      <p className={"navButton " + `${currentView === "Work" ? "underline underline-offset-8 text-blue-600" : ""}`} onClick={() => setCurrent("Work")}>Work</p>
      <p className={"navButton " + `${currentView === "About" ? "underline underline-offset-8 text-blue-600" : ""}`} onClick={() => setCurrent("About")}>About</p>
      <p className={"navButton " + `${currentView === "Contact" ? "underline underline-offset-8 text-blue-600" : ""}`} onClick={() => setCurrent("Contact")}>Contact</p>
    </div>
  )
}