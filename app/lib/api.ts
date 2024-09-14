export async function getPosts() {
  //const res = await fetch('https://corsproxy.io/?url=https://futbollibrehd.pe/agenda.json')
  const res = await fetch('https://futbollibrehd.pe/agenda.json', {
    headers: {
      "Referer": "https://futbollibretv.pe/"
    }
  })
  const posts = await res.json()
  return {
    posts
  }
}