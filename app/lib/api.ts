import { getOrderedPostsByDate } from "../utils/utils"

export async function getPosts() {
  /* const res = await fetch('https://futbollibrehd.pe/agenda.json', { */

  const res = await fetch('https://corsproxy.io/?url=https://futbollibrehd.pe/agenda.json', {
    cache: 'no-store', // no almacenar cache
    //next: { revalidate: 3600 } // cada hora
  }) 
  const posts = await res.json()
  return getOrderedPostsByDate(posts.data)
}