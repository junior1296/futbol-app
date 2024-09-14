import VideoHSL from '../ui/video'

export default function Channel(
  { params, searchParams }: { params: { slug: string; }, searchParams?: { url?: string; } }
){ 
  return(
    <div className=''>
      <VideoHSL params={params} searchParams={searchParams}/>
    </div>
  )
}   