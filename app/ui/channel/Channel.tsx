import Image from "next/image";
import Link from "next/link";
import { CHANNELS } from "@/app/lib/data";
import { goToChannel } from "@/app/utils/utils";

export default function Channels () {
  return (
    <aside>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {CHANNELS.map((embed) => (
          <li key={embed.name} className='flex flex-col items-center gap-2 p-4 bg-zinc-900 rounded'>
            <Image
                  src={embed.image}
                  alt={embed.name}
                  width={80}
                  height={80}
                />
            <p className='text-white font-semibold text-center'>{embed.name}</p>
            <Link href={`${goToChannel(embed.stream)}`} className='p-2 bg-zinc-950 rounded hover:bg-zinc-800'>
              Ver canal
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}