import { useState } from "react";

export default function Resume(){
  return (
    <div className="bg-white m-10 h-5/6 w-full">
      <div className="m-2">
        <h1 className="text-black text-4xl mb-4">Keenan Aldridge</h1>
        <p className="text-black">Aiea, Hawaii (Open to Remote) | (404) 576-8138 | kmantan@gmail.com</p>
        <a className="text-black m-0" href="linkedin.com/in/keenanaldridge">linkedin.com/in/keenanaldridge   |</a>
        <a className="text-black ml-2" href="github.com/kmantan">github.com/kmantan</a>
        <h3 className="text-black font-bold text-lg mt-4">TECHNICAL SKILLS</h3>
        <p className="text-black"><strong>Front End</strong> | JavaScript (ES5 and ES6/Modern JS), React, TailwindCSS, NextJS, HTML5, CSS3, TypeScript, jQuery</p>
        <p className="text-black"><strong>Back End</strong> | Node.js, Express, PostgreSQL, MongoDB, MySQL, RESTful API Development</p>
      </div>
    </div>
      )
};