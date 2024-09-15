import { revalidatePath } from "next/cache"

export async function getPosts() {
  const res = await fetch('https://corsproxy.io/?url=https://futbollibrehd.pe/agenda.json', {
    headers: {
      'Referer': 'https://futbollibretv.pe/',
      'Cache-Control': 'no-store', // Desactiva la caché en la solicitud
    },
  })
  //const res = await fetch('https://futbollibrehd.pe/agenda.json')
  const posts = await res.json()
  revalidatePath("/")
  return posts.data
}