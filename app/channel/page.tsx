import { getVideoUriFromVideoEmbed } from '../lib/scrape';
import VideoPlayer from '../ui/video'
import HslPlayer from '@/app/ui/HslPlayer'

export default async function Channel(
  { params, searchParams }: { params: { slug: string; }, searchParams?: { url?: string; } }
){
  console.log('Params:' + params?.slug)
  console.log('Search Params:' + searchParams?.url)
  //const src = await getVideoHsl(getVideo(params?.slug))
  const src = await getVideoUriFromVideoEmbed(searchParams?.url || '')

  return(
    <div className=''>
      {/* <VideoPlayer src={src} /> */}
      {/* <HslPlayer src={'https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8'} /> */}
      <HslPlayer src={src} />
    </div>
  )
}   