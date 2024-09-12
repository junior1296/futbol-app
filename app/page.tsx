import Image from "next/image";

const CHANNELS = [
  {
    name: "movistar",
    stream: "https://la10hd.com/vivo/canal.php?stream=movistar",
    stream2: "https://la10hd.com/tv/movistar.html",
  },
  {
    name: "liga 1 max",
    stream: "https://la10hd.com/vivo/canal.php?stream=liga1max",
    stream2: "https://la10hd.com/tv/liga1max.html",
  },
  {
    name: "espn",
    stream: "https://la10hd.com/vivo/canal.php?stream=espn",
    stream2: "https://la10hd.com/tv/espn.html",
  },
  {
    name: "espn 2",
    stream: "https://la10hd.com/vivo/canal.php?stream=espn2",
    stream2: "https://la10hd.com/tv/espn2.html",
  },
  {
    name: "espn 3",
    stream: "https://la10hd.com/vivo/canal.php?stream=espn3",
    stream2: "https://la10hd.com/tv/espn3.html",
  },
  {
    name: "espn premium",
    stream: "https://la10hd.com/vivo/canal.php?stream=espnpremium",
    stream2: "https://la10hd.com/tv/espnpremium.html",
  },
  {
    name: "dsports",
    stream: "https://la10hd.com/vivo/canal.php?stream=dsports",
    stream2: "https://la10hd.com/tv/dsports.html",
  },
  {
    name: "dsports 2",
    stream: "https://la10hd.com/vivo/canal.php?stream=dsports2",
    stream2: "https://la10hd.com/tv/dsports2.html",
  },
  {
    name: "dsports+",
    stream: "https://la10hd.com/vivo/canal.php?stream=dsportsplus",
    stream2: "https://la10hd.com/tv/dsportsplus.html",
  },
  {
    name: "caracol tv",
    stream: "https://la10hd.com/vivo/canal.php?stream=caracol",
    stream2: "https://la10hd.com/tv/caracol.html",
  },
  {
    name: "win sports",
    stream: "https://la10hd.com/vivo/canal.php?stream=winsports",
    stream2: "https://la10hd.com/tv/winsports.html",
  },
  {
    name: "win sports +",
    stream: "https://la10hd.com/vivo/canal.php?stream=winsportsplus",
    stream2: "https://la10hd.com/tv/winsportsplus.html",
  },
  {
    name: "gol peru",
    stream: "https://la10hd.com/vivo/canal.php?stream=golperu",
    stream2: "https://la10hd.com/tv/golperu.html",
  },
  {
    name: "premiere br",
    stream: "https://golazohd.com/mpd.php?id=premiere",
    stream2: "https://golazohd.com/mpd.php?id=premiere",
  },
  {
    name: "fox sports",
    stream: "https://golazohd.com/mpd.php?id=premiere",
    stream2: "https://la10hd.com/tv/foxsports.html",
  },
  {
    name: "fox sports 2",
    stream: "https://golazohd.com/mpd.php?id=foxsports2",
    stream2: "https://la10hd.com/tv/foxsports2.html",
  },
  {
    name: "fox sports 3",
    stream: "https://golazohd.com/mpd.php?id=foxsports3",
    stream2: "https://la10hd.com/tv/foxsports3.html",
  },
  {
    name: "tnt sports",
    stream: "https://golazohd.com/mpd.php?id=tntsports",
    stream2: "https://la10hd.com/tv/tntsports.html",
  }
]

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const getVideo = (embed: string) => {
  const value: string = embed.toLowerCase().trim()
  const url_video: string = 'https://la10hd.com/vivo/canal.php?stream='

  return CHANNELS.find(stream => stream.name == value)?.stream
}

export default async function Home() {
  let URL_BASE = 'https://futbollibrehd.pe'
  let data = await fetch('https://corsproxy.io/?url=https://futbollibrehd.pe/agenda.json')
  let posts = await data.json()
  
  let URL_CHANNEL = 'https://la10hd.com/vivo/canal.php?stream='

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex gap-x-12">
            {/* {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-300">
                {item.name}
              </a>
            ))} */}
            <a href="#" className="text-lg font-semibold leading-1 text-gray-300">
              Futbol App
            </a>
          </div>
        </nav>
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul role="list" className="divide-y divide-gray-100">
          {posts.data.map((post) => (
            <li key={post.id} className="flex flex-col justify-between gap-x-6 gap-y-6 py-5">
              <div className="flex flex-row gap-x-8 justify-between">
                <p>{post.attributes.diary_description}</p>
                <div className="flex flex-row gap-8">
                  <p>{post.attributes.date_diary}</p>
                  <p>{post.attributes.diary_hour}</p>
                </div>
              </div>
              <ul className="flex flex-row gap-x-8">
                {post.attributes.embeds.data.map((embed) => (
                  <li key={embed.attributes.embed_name} className="flex items-center gap-x-6 bg-gray-600 rounded">
                    <a href={getVideo(embed.attributes.embed_name)} target="_blank" className="p-2">
                      {embed.attributes.embed_name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
      <aside className="row-start-3 flex flex-row gap-6 items-center justify-center">
          <ul className="flex flex-row gap-8">
            {CHANNELS.map((embed) => (
              <li key={embed.name} className="flex items-center gap-x-6 bg-gray-600 rounded">
                <a href={embed.stream} target="_blank" className="p-2">
                  {embed.name}
                </a>
              </li>
            ))}
          </ul>
      </aside>
      <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center">
        <p>Hecho por Junior Mejia Osorio</p>
      </footer>
    </div>
  );
}
