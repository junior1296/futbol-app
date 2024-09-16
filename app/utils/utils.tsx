import { CHANNELS } from '../lib/data'
import { Post } from '../lib/definitions'

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

export const getImage = (imageUri: string) => {
  return `https://img.futbollibrehd.pe${imageUri}`
}

export const getVideoEmbed = (embed: string) => {
  const value: string = atob(embed.split('?r=')[1])
  //const url_video: string = 'https://la10hd.com/vivo/canal.php?stream='
  //console.log(value)
  return value
}

export const goToChannel = (embed_iframe: string) => {
  //console.log('IFRAME: ' + embed_iframe)
  let value: string = ''
  /* if (embed_iframe.includes('/mpd')) {
    value = embed_iframe
  } else {
    value = `/channel?url=${embed_iframe}`
  } */
  value = embed_iframe
  //value = `/channel?url=${embed_iframe}`
  //console.log(value)
  return value
}

export const getOrderedPostsByDate = (data: Post[]) => {
  return data?.sort((a: Post, b: Post) => {
    return new Date(`${a.attributes.date_diary} ${a.attributes.diary_hour}`).getTime() - new Date(`${b.attributes.date_diary} ${b.attributes.diary_hour}`).getTime();
  });
}