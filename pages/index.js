import Head from 'next/head'
import ReactPlayer from 'react-player';

export default function Home() {
  return (
    <div className='player-wrapper'>
      <ReactPlayer
        className='react-player fixed-bottom'
        url='video.mp4'
        width='100%'
        height='100%'
        controls={false}
        loop = {true}
        playing ={true}
      />
    </div>
  )
}


