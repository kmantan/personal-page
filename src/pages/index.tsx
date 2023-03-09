import Head from 'next/head'
import { useState } from 'react';
import Main from './content/main';
import About from './content/about';
import Resume from './content/resume';
import Work from './content/work';
import LogoIntro from './content/intro';
import NavBar from './content/navBar';

export default function Home() {
  // const [hasRun, setIntro] = useState(true);
  const [currentView, setCurrent] = useState<string>("Main");

  return (
    <>
      <Head>
        <title>{`Keenan Aldridge | Full-Stack Software Engineer, Developer, Javascript, React, Coordinator`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar currentView={currentView} setCurrent={setCurrent}/>
      <div className="h-screen w-screen m-0">
      {currentView === 'Main' ? <Main setCurrent={setCurrent}/> : null}
      {currentView === 'About' ? <About /> : null}
      {currentView === 'Resume' ? <Resume /> : null}
      {currentView === 'Work' ? <Work /> : null}
      </div>
    </>
  )
}
