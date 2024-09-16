import Image from "next/image";
import Link from "next/link";
import { Embed, Post } from "@/app/lib/definitions";
import { getImage, getVideoEmbed, goToChannel } from "@/app/utils/utils";
import { getPosts } from "@/app/lib/api";

export default async function PostsList () {
  const posts: Post[] = await getPosts();
  //console.log(posts)
  
  return (
    <section>
      <ul role='list' className='flex flex-col gap-y-4'>
        {posts?.map((post: Post) => (
          <PostCard key={post.id} post={post}/>
        ))}
      </ul>
    </section>
  )
}

function PostCard ({post}: {post: Post}) {
 return (
  <li key={post.id} className='flex flex-col gap-y-4 p-4 bg-zinc-900 rounded-xl'>
    <div className='flex flex-row gap-x-4 items-center'>
      <Image
        src={getImage(post.attributes.country.data.attributes.image.data.attributes.url)}
        alt={post.attributes.country.data.attributes.image.data.attributes.name}
        width={40}
        height={40}
      />
      <div className='flex flex-col sm:flex-row grow gap-y-2 sm:gap-x-2 sm:justify-between sm:items-center'>
        <p>{post.attributes.diary_description}</p>
        <div className='flex flex-row gap-x-2 text-gray-400'>
          <p>{post.attributes.date_diary}</p>
          <p>{post.attributes.diary_hour}</p>
        </div>
      </div>
    </div>
    <ul className='flex flex-row flex-wrap gap-2'>
      {post.attributes.embeds.data.map((embed: Embed) => (
        <li key={embed.attributes.embed_name} className='p-2 bg-zinc-950 rounded-md hover:bg-zinc-800'>
          <Link href={goToChannel(getVideoEmbed(embed.attributes.embed_iframe))} className='p-2'>
            {embed.attributes.embed_name}
          </Link>
        </li>
      ))}
    </ul>
  </li>
 )
}