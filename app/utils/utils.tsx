import { CHANNELS } from "../lib/data"

export const getVideo = (embed: string) => {
  let value: string = decodeURI(embed)
  value = value.includes('2b') ? value.replace('2b', '+') : value
  value = value.toLowerCase().trim().replace('-', ' ')
  //const url_video: string = 'https://la10hd.com/vivo/canal.php?stream='
  console.log(value)

  const stream = CHANNELS.find(stream => stream.name == value)?.stream ?? ''
  console.log(stream)
  return stream// ? URL_VIDEO : ''
}

export const getSlug = (embed: string) => {
  let value: string = decodeURI(embed)
  value = value.includes('+') ? value.replace('+', '2b') : value
  value = value.toLowerCase().trim().replace(' ', '-')
  //const url_video: string = 'https://la10hd.com/vivo/canal.php?stream='
  console.log(value)
  return value// ? URL_VIDEO : ''
}