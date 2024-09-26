import { getVideoUriFromVideoEmbed } from '@/app/lib/scrape';
import HslPlayer from '@/app/ui/HslPlayer'
//import VideoPlayer from '@/app/ui/VideoPlayer';

export default async function Channel(
  { params, searchParams }: { params: { slug: string; }, searchParams?: { url?: string; } }
){
  console.log('Params:' + params?.slug)
  console.log('Search Params:' + searchParams?.url)
  //const src = await getVideoHsl(getVideo(params?.slug))
  const src = await getVideoUriFromVideoEmbed(searchParams?.url || '')

  if (src === '') { return (
    <div className='h-screen w-screen max-h-screen min-h-screen flex flex-row justify-center items-center'>
      <p className=''>Video no disponible.</p>
    </div>
  ) }

  return(
    <HslPlayer src={src} />
  )
}   