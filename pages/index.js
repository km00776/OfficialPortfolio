import Head from 'next/head'
import ReactPlayer from 'react-player';
import Mainsection from '../components/Main-Section';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Mainsection />
      <Menu />
    </div>
  )
}


