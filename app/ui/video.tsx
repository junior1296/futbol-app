//import '@vidstack/react/player/styles/base.css';
//import '@vidstack/react/player/styles/default/theme.css';
//import '@vidstack/react/player/styles/default/layouts/video.css';

//import { MediaPlayer, MediaProvider } from '@vidstack/react';
import Video from 'next-video'
import { getVideoHsl } from '../lib/scrape';

//const URL_VIDEO = 'https://c2f2zq.la10tv.com:443/lb/dsports2/index.m3u8?token=9aaf9160866bc16d4d59ab3e7d3126eca2f7b3de-fdc1eb93772e210e97c581a78590b633-1726221579-1726185579&remote=190.235.163.215'

export default async function VideoHSL(
  { params, searchParams }: { params: { slug: string; }, searchParams?: { url?: string; } }
) {
  console.log("Params:" + params?.slug)
  console.log("Search Params:" + searchParams?.url)
  //const src = await getVideoHsl(getVideo(params?.slug))
  const query = searchParams?.url || '';

  const src = await getVideoHsl(query)

  if (src === "") { return (
    <div className='w-full min-h-screen flex flex-row justify-center items-center'>
      <p className=''>Video no disponible.</p>
    </div>
  ) }
  
  if (src !== "") {
    return (
      <>
        {/* <MediaPlayer 
          title="Futbol App"
          src={src}
          aspectRatio="16/9"
          //streamType="live"
          //viewType='video'
          crossOrigin
          controls
          autoPlay
        >
          <MediaProvider />
        </MediaPlayer> */}
        <Video
          className='aspect-video' 
          src={src}
          crossOrigin='anonymous'
          autoPlay
        />
      </>
    )
  }
}