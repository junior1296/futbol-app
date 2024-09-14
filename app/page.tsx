//import Image from "next/image";

import Link from "next/link";
import { Embed, Post } from "./lib/definitions";
import { CHANNELS } from "./lib/data";
import Image from "next/image";

/* const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
] */
//const URL_BASE = 'https://futbollibrehd.pe'

const getVideoEmbed = (embed: string) => {
  const value: string = atob(embed.split("?r=")[1])
  //const url_video: string = 'https://la10hd.com/vivo/canal.php?stream='
  console.log(value)
  return value
}

const goToChannel = (embed_iframe: string) => {
  console.log("IFRAME: " + embed_iframe)
  let value: string = ""
  /* if (embed_iframe.includes("/mpd")) {
    value = embed_iframe
  } else {
    value = `/channel?url=${embed_iframe}`
  } */
  value = embed_iframe
  console.log(value)
  
  return value
}

const getImage = (imageUri: string) => {
  return `https://img.futbollibrehd.pe${imageUri}`
}

export default async function Home() {
  //const data = await fetch('https://corsproxy.io/?url=https://futbollibrehd.pe/agenda.json')
  const res = await fetch('https://futbollibrehd.pe/agenda.json', {
    headers: {
      "Referer": "https://futbollibretv.pe/"
    }
  })
  const data: { data: Post[] } = await res.json()
  //const posts = await getPosts()
  const posts = data?.data.sort((a: Post, b: Post) => {
    return new Date(`${a.attributes.date_diary} ${a.attributes.diary_hour}`).getTime() - new Date(`${b.attributes.date_diary} ${b.attributes.diary_hour}`).getTime();
  });
  
  return (
    <div className="grid grid-row-4 min-h-screen max-w-screen-lg m-auto font-[family-name:var(--font-geist-sans)] bg-zinc-950">
      <header className="p-6 md:p-8 m-auto">
        <a href="/" className="text-lg font-semibold leading-1">
          Futbol App
        </a>
      </header>
      <main className="flex flex-col gap-y-8 px-4 md:px-8">
        <section>
          <ul role="list" className="flex flex-col gap-y-4">
            {posts?.map((post: Post) => (
              <li key={post.id} className="flex flex-col gap-y-4 p-4 bg-zinc-900 rounded">
                <div className="flex flex-row gap-x-4 items-center">
                  <Image
                    src={getImage(post.attributes.country.data.attributes.image.data.attributes.url)}
                    alt={post.attributes.country.data.attributes.image.data.attributes.name}
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col sm:flex-row grow gap-y-2 sm:gap-x-2 sm:justify-between sm:items-center">
                    <p>{post.attributes.diary_description}</p>
                    <div className="flex flex-row gap-x-2 text-gray-400">
                      <p>{post.attributes.date_diary}</p>
                      <p>{post.attributes.diary_hour}</p>
                    </div>
                  </div>
                </div>
                <ul className="flex flex-row flex-wrap gap-2">
                  {post.attributes.embeds.data.map((embed: Embed) => (
                    <li key={embed.attributes.embed_name} className="p-2 bg-zinc-950 rounded hover:bg-zinc-800">
                      <Link href={goToChannel(getVideoEmbed(embed.attributes.embed_iframe))} className="p-2">
                        {embed.attributes.embed_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
        <aside>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {CHANNELS.map((embed) => (
              <li key={embed.name} className="flex flex-col items-center gap-2 p-4 bg-zinc-900 rounded">
                <Image
                      src={embed.image}
                      alt={embed.name}
                      width={80}
                      height={80}
                    />
                <p className="text-white font-semibold text-center">{embed.name}</p>
                <Link href={`${goToChannel(embed.stream)}`} className="p-2 bg-zinc-950 rounded hover:bg-zinc-800">
                  Ver canal
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </main>
      <footer className="flex p-8 flex-wrap items-center justify-center">
        <p>Hecho por Junior Mejia Osorio</p>
      </footer>
    </div>
  );
}