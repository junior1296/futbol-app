import { Suspense } from 'react';
import Channels from '@/app/ui/channel/Channel';
import Posts from '@/app/ui/posts/Posts';
import { PostsSkeleton } from './skeletons';

//const URL_BASE = 'https://futbollibrehd.pe'

export default async function Home() {
 
  return (
    <div className='grid grid-row-4 min-h-screen max-w-screen-lg m-auto font-[family-name:var(--font-geist-sans)] bg-zinc-950'>
      <header className='p-6 md:p-8 m-auto'>
        <a href='/' className='text-lg font-semibold leading-1'>
          Futbol App
        </a>
      </header>
      <main className='flex flex-col gap-y-8 px-4 md:px-8'>
      <PostsSkeleton />
        <Suspense fallback={<PostsSkeleton />}>
          <Posts />
        </Suspense>
        <Channels />
      </main>
      <footer className='flex p-8 flex-wrap items-center justify-center'>
        <p>Hecho por Junior Mejia Osorio</p>
      </footer>
    </div>
  );
}