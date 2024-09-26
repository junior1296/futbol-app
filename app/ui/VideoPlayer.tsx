//import '@vidstack/react/player/styles/base.css';
//import '@vidstack/react/player/styles/default/theme.css';
//import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
//import Video from 'next-video'

//const URL_VIDEO = 'https://c2f2zq.la10tv.com:443/lb/dsports2/index.m3u8?token=9aaf9160866bc16d4d59ab3e7d3126eca2f7b3de-fdc1eb93772e210e97c581a78590b633-1726221579-1726185579&remote=190.235.163.215'

export default function VideoPlayer({src}: {src: string}) {
  if (src === '') { return (
    <div className='h-screen w-screen max-h-screen min-h-screen flex flex-row justify-center items-center'>
      <p className=''>Video no disponible.</p>
    </div>
  ) }
  
  return (
    <>
      <MediaPlayer 
        title="Futbol App"
        src={src}
        aspectRatio="16/9"
        //streamType="live"
        //viewType='video'
        playsInline
        crossOrigin
        controls
        autoPlay
      >
        <MediaProvider />
      </MediaPlayer>
      {/* <Video
        src={src}
        autoPlay
      /> */}
    </>
  )
}