import { useState } from "react";
import { SiIndeed } from "react-icons/si";
import { SiGithub } from "react-icons/si";

type MainProps = {
  setCurrent: Function
}

export default function Main({setCurrent} : MainProps){
  return (
    <div className="flex flex-col justify-center content-center h-full w-full">
      <h1 className="text-4xl text-center text-m-10 w-100">
        {`Hi, I'm Keenan Aldridge.`}
        <div className="flex flex-row justify-center align-center">
        <p className="mr-2">I am a</p><p className="text-indigo-600 underline underline-offset-8"
        onClick={() => {
          setCurrent('Work');
        }}>full-stack</p>
        </div>
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