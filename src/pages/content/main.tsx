import { useState } from "react";
import { SiIndeed } from "react-icons/si";
import { SiGithub } from "react-icons/si";

export default function Main(){
  return (
    <div className="m-10">
      <h1 className="text-4xl text-center text-m-10 w-full">
        {`Hi, I'm Keenan Aldridge`}
        <p>I am a</p><p className="text-indigo-600 underline underline-offset-8">full-stack</p>
        <p>software engineer.</p>
      </h1>
      <div className="flex flex-row justify-center align-center m-4">
        <SiIndeed className="text-3xl m-4 hover:text-blue-400" onClick={() => {
          window.open('https://linkedin.com/in/keenanaldridge/')
        }}/>
        <SiGithub className="text-3xl m-4 hover:text-green-400" onClick={() => {
          window.open('https://github.com/kmantan')
        }}/>
      </div>
    </div>
  )
};