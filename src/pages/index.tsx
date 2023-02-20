import Head from 'next/head'
import { useState } from 'react';
import Main from './content/main';
import About from './content/about';
import Contact from './content/contact';
import Work from './content/work';
import LogoIntro from './content/intro';
import NavBar from './content/navBar';

export default function Home() {
  // const [hasRun, setIntro] = useState(true);
  const [currentView, setCurrent] = useState<string>("Main");

  return (
    <>
      <Head>
        <title>{`Keenan's Personal Page`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <NavBar currentView={currentView} setCurrent={setCurrent}/>
      {currentView === 'Main' ? <Main /> : null}
      {currentView === 'About' ? <About /> : null}
      {currentView === 'Contact' ? <Contact /> : null}
      {currentView === 'Work' ? <Work /> : null}
      </div>
    </>
  )
}
