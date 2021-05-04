import Head from 'next/head'

import Mainsection from '../components/Main-Section';
import Menu from '../components/Menu';
import ProjectSection from '../components/Project-Section';

export default function Home() {
  

  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Mainsection />
      <Menu />
      <ProjectSection />
    </div>
  )
}


