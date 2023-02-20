import Head from 'next/head'
import { useState } from 'react';
import Main from './content/main';
import About from './content/about';
import Contact from './content/contact';
import Work from './content/work';
import LogoIntro from './content/intro';
import NavBar from './content/navBar';


export default function Home() {
  const [hasRun, setIntro] = useState(true);
  const [currentView, setCurrent] = useState('Main');

  return (
    <>
      <Head>
        <title>{`Keenan's Personal Page`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <NavBar currentView={currentView} setCurrent={setCurrent}/>
      {currentView === 'Main' ? <Main currentView={currentView}/> : null}
      {currentView === 'About' ? <About currentView={currentView}/> : null}
      {currentView === 'Contact' ? <Contact currentView={currentView}/> : null}
      {currentView === 'Work' ? <Work currentView={currentView}/> : null}
      </div>
    </>
  )
}
