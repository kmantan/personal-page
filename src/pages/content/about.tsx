import { useState } from "react";
import Image from 'next/image';

export default function About(){
  return (
    <div className="relative m-6 flex flex-col items-center justify-center object-cover">
      <h1 className="text-4xl mb-4">About Keenan</h1>
      <div className="flex items-center">
      <Image src="/IMG_4074.jpeg" alt="" width={300} height={300} className="p-4 object-cover rounded-3xl"/>
      </div>
      <p className="mt-10">I am a passionate problem solver. Self starter and team player that wants to bring the best out of everyone and myself. Tackling simple and complex issues brings me fulfillment. I love learning plain and simple.</p><br></br>

<p>I am a software engineer that always looks at the big picture and imagines what is possible. Seeing ideas through and creating with others is the best feeling. I want to meaningfully contribute to a team and give my best.</p><br></br>

<p>I am a thoughtful person that lives to make others happy and keep the vibes up. Willing to go the extra mile and then some. As a call center coordinator I am required to ensure quality and implement solutions to ever-changing issues whether it be customer or operation related.

When I have free time you&amps;ll find me with my family. They are the best.

Interested in chatting about a job opportunity on your team? Send me an email at kmantan@gmail.com or add me on <a href="https://linkedin.com/in/keenanaldridge">linkedin</a></p></div>
  )
};