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
  console.log("IFRAME: " + getVideoEmbed(embed_iframe))
  let value: string = ""
  if (getVideoEmbed(embed_iframe).includes("/mpd")) {
    value = `${getVideoEmbed(embed_iframe)}`
  } else {
    value = `/channel?url=${getVideoEmbed(embed_iframe)}`
  }
  console.log(value)
  
  return value
}

const getImage = (imageUri: string) => {
  return `https://img.futbollibrehd.pe${imageUri}`
}

export default async function Home() {
  //const data = await fetch('https://corsproxy.io/?url=https://futbollibrehd.pe/agenda.json')
  const data = await fetch('https://futbollibrehd.pe/agenda.json')
  const posts = await data.json()
  
  return (
    <div className="grid grid-row-4 min-h-screen gap-8 md:px-20 font-[family-name:var(--font-geist-sans)]">
      <header className="p-8 m-auto">
        <a href="/" className="text-lg font-semibold leading-1 text-white">
          Futbol App
        </a>
      </header>
      <main className="flex flex-col gap-8 justify-between px-8">
        <ul role="list" className="divide-y divide-gray-100">
          {posts?.data?.map((post: Post) => (
            <li key={post.id} className="flex flex-col justify-between gap-4 py-6">
              <div className="flex flex-row gap-x-6 justify-between items-center">
                <div className="flex flex-row gap-x-6 items-center">
                  <Image
                    src={getImage(post.attributes.country.data.attributes.image.data.attributes.url)}
                    alt={post.attributes.country.data.attributes.image.data.attributes.name}
                    width={40}
                    height={40}
                  />
                  <p>{post.attributes.diary_description}</p>
                </div>
                <div className="flex flex-row gap-x-6 items-center">
                  <p>{post.attributes.date_diary}</p>
                  <p>{post.attributes.diary_hour}</p>
                </div>
              </div>
              <ul className="flex flex-row flex-wrap gap-4">
                {post.attributes.embeds.data.map((embed: Embed) => (
                  <li key={embed.attributes.embed_name} className="p-2 bg-orange-400 rounded">
                    <Link href={goToChannel(embed.attributes.embed_iframe)} className="p-2">
                      {embed.attributes.embed_name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
      <aside className="px-8">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CHANNELS.map((embed) => (
            <li key={embed.name} className="flex flex-col items-center gap-4 p-4 bg-gray-600 rounded">
              <Image
                    src={embed.image}
                    alt={embed.name}
                    width={80}
                    height={80}
                  />
              <p className="text-white font-semibold">{embed.name}</p>
              <Link href={`/channel?url=${embed.stream}`} className="p-2 bg-orange-400 rounded">
                Ver canal
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <footer className="flex p-8 flex-wrap items-center justify-center">
        <p>Hecho por Junior Mejia Osorio</p>
      </footer>
    </div>
  );
}
