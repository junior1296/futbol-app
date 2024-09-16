const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function PostSkeleton() {
  return (
    <div
      className={`${shimmer} flex flex-col overflow-hidden rounded-xl p-4 gap-4 bg-zinc-900 shadow-sm`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-row gap-4 items-center">
          <div className="h-11 w-11 rounded-full bg-zinc-800" />
          <div className="h-6 w-36 rounded-md bg-zinc-800 text-sm font-medium" />
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="growml-2 h-6 w-16 rounded-md bg-zinc-800 text-sm font-medium" />
          <div className="growml-2 h-6 w-16 rounded-md bg-zinc-800 text-sm font-medium" />
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <div className="h-9 w-24 rounded-md bg-zinc-950" />
        <div className="h-9 w-20 rounded-md bg-zinc-950" />
        <div className="h-9 w-24 rounded-md bg-zinc-950" />
        <div className="h-9 w-20 rounded-md bg-zinc-950" />
      </div>
    </div>
  )
}

export default function PostsSkeleton() {
  console.log('LOADING PAGE HOME')
  return (
    <div className='grid grid-row-1 min-h-screen max-w-screen-lg font-[family-name:var(--font-geist-sans)] bg-zinc-950'>
      <div className="flex flex-col gap-4 p-4">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    </div>
  )
}
