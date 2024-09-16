import * as cheerio from 'cheerio';

export async function getVideoUriFromVideoEmbed(url: string) {
  let source: string = ''
  console.log('EMBED: ' + url)
  try {
    // Fetch the HTML content of the web page to be scraped
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"
      }
    });
    //console.log(response)
    const html = await response.text();
    //console.log(html)

    // Load the HTML content into Cheerio
    const $ = cheerio.load(html);

    // Use Cheerio selectors to extract the desired data
    const scripts = $('script').toString();

    if(scripts.includes('source: "')) {
      source = scripts.split('source: "')[1].split('"')[0]
    }
    if(scripts.includes('file: "')) {
      source = scripts.split('file: "')[1].split('"')[0]
    }
    if(scripts.includes('playbackURL = "')) {
      source = scripts.split('playbackURL = "')[1].split('"')[0]
    }
    console.log('SOURCE: ' + source)
  } catch (e) {
    console.error(e)
  }
  return source
};