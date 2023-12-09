import {sticker, addExif} from '../lib/sticker.js';
import {Sticker} from 'wa-sticker-formatter';
import fetch from 'node-fetch';
import got from 'got';
import cheerio from 'cheerio';
const img = 'https://i.postimg.cc/gJwrfpkQ/dd1b4560472e41438b2e5033388bf44f.jpg';
const handler = async (m, {usedPrefix, conn, args, text, command}) => {
  let [tipe, emoji] = text.includes('|') ? text.split('|') : args;
  const defaultType = 'apple';
  if (tipe && !emoji) {
    emoji = '🥴';
    tipe = defaultType;
  }
  const err = `*╔═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╗*
ᬊ᭄ঔৣ͜͡ீ͜❥͜🧧 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐒𝐞𝐦𝐨𝐣𝐢 🧧ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╝*

*꩖͜͡ꦿꦼ🍣 Ejemplo de uso para este comando:*

*꩖͜͡ꦿꦼ🌿 ${usedPrefix + command} tipo / emoji*

*꩖͜͡ꦿꦼ🏆 Por ejemplo:*
*•°> ${usedPrefix + command}* apple 🥴

*꩖͜͡ꦿꦼ🔥> Tipo de Emojis:* 

┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲❤️❳➮ wha = whatsapp* 
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲🧡❳➮ ap = apple*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝙸𝚙𝚑𝚘𝚗𝚎*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲💙❳➮ fa = facebook*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲💜❳➮ mi = microsoft*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝙼𝚒𝚌𝚛𝚘𝚜𝚘𝚏𝚝*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲🤎❳➮ ht = htc*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝚑𝚝𝚌*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲💛❳➮ tw = twitter*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝚃𝚠𝚒𝚝𝚝𝚎𝚛*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲🤍❳➮ go = google*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝙶𝚘𝚘𝚐𝚕𝚎*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲💗❳➮ mo = mozilla*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝙼𝚘𝚣𝚒𝚕𝚕𝚊*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲💖❳➮ op = openmoji*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝙾𝚙𝚎𝚗𝚖𝚘𝚓𝚒*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲💝❳➮ pi = pixel*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝙿𝚒𝚡𝚎𝚕*
┄┄┄┄┄┄┄┄┄┄┄┄┄
*❲💘❳➮ sa = samsung*
𝙴𝚖𝚘𝚓𝚒𝚜 𝚙𝚛𝚎𝚍𝚎𝚝𝚎𝚛𝚖𝚒𝚗𝚊𝚍𝚘𝚜 𝚎𝚗 *𝚂𝚊𝚖𝚜𝚞𝚗𝚐*
┄┄┄┄┄┄┄┄┄┄┄┄┄

*❲🛡️❳➮ Solo puedes usar un emojir y respetar los espacios por favor.*

💜 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 - 𝙱𝙾𝚃 - 𝙼𝙳 💜`;
  if (!emoji) throw err;
  if (tipe == 'mo') tipe = 'mozilla';
  if (tipe == 'op') tipe = 'openmoji';
  if (tipe == 'pi') tipe = 'joypixels';
  if (tipe == 'sa') tipe = 'samsung';
  if (tipe == 'go') tipe = 'google';
  if (tipe == 'wha') tipe = 'whatsapp';
  if (tipe == 'fa') tipe = 'facebook';
  if (tipe == 'ap') tipe = 'apple';
  if (tipe == 'mi') tipe = 'microsoft';
  if (tipe == 'ht') tipe = 'htc';
  if (tipe == 'tw') tipe = 'twitter';
  try {
    emoji = emoji.trim();
    tipe = tipe.trim().toLowerCase();
    const json = await semoji(emoji);
    let chosenURL;
    for (let i = 0; i < json.length; i++) {
      if (json[i].nama.includes(tipe)) {
        chosenURL = json[i].url;
        break;
      }
    }
    if (!chosenURL) {
      chosenURL = json[0].url;
    }
    console.log(chosenURL);
    const stiker = await createSticker(false, chosenURL, global.packname, global.author, 20);
    // let stikerPI = await sticker(false, json.find(v => v.nama == tipe).url, global.packname, global.author)
    // if (tipe == 'pi' && json || tipe == 'pixel' && json ) stiker = await conn.sendFile(m.chat, stikerPI, null, { asSticker: true }, m)
    m.reply(stiker);
  } catch {
    throw `*❨💛❩➤ Salio un error al convertir un emoji, por favor intente nuevamente, si no funciona puede reportar este comando codigo: #reporte*`;
  }
};
handler.help = ['emoji <tipo> <emoji>'];
handler.tags = ['sticker'];
handler.command = ['emoji', 'smoji', 'semoji'];
export default handler;
async function semoji(hem) {
  const result = [];
  const data = await got(encodeURI(`https://emojipedia.org/${hem}/`), {method: 'GET', headers: {'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36'}});
  const $ = cheerio.load(data.body);
  $('body > div.container > div.content > article > section.vendor-list > ul').each(function(asu, chuwi) {
    $(chuwi).find('li').each(function(sa, na) {
      const res = {nama: $(na).find('div > div.vendor-info > h2 > a').text().trim().toLowerCase(), url: $(na).find('div > div.vendor-image > img').attr('src')};
      result.push(res);
    });
  });
  const data2 = [];
  result.map((Data) => {
    if (Data.nama == undefined) return;
    if (Data.url == undefined) return;
    data2.push(Data);
  });
  return data2;
}
async function createSticker(img, url, packName, authorName, quality) {
  const stickerMetadata = {type: 'full', pack: packName, author: authorName, quality};
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer();
}
async function mp4ToWebp(file, stickerMetadata) {
  if (stickerMetadata) {
    if (!stickerMetadata.pack) stickerMetadata.pack = '‎';
    if (!stickerMetadata.author) stickerMetadata.author = '‎';
    if (!stickerMetadata.crop) stickerMetadata.crop = false;
  } else if (!stickerMetadata) {
    stickerMetadata = {pack: '‎', author: '‎', crop: false};
  }
  const getBase64 = file.toString('base64');
  const Format = {file: `data:video/mp4;base64,${getBase64}`, processOptions: {crop: stickerMetadata?.crop, startTime: '00:00:00.0', endTime: '00:00:7.0', loop: 0,
  }, stickerMetadata: {...stickerMetadata}, sessionInfo: {WA_VERSION: '2.2106.5', PAGE_UA: 'WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36', WA_AUTOMATE_VERSION: '3.6.10 UPDATE AVAILABLE: 3.6.11', BROWSER_VERSION: 'HeadlessChrome/88.0.4324.190', OS: 'Windows Server 2016', START_TS: 1614310326309, NUM: '6247', LAUNCH_TIME_MS: 7934, PHONE_VERSION: '2.20.205.16'},
  config: {sessionId: 'session', headless: true, qrTimeout: 20, authTimeout: 0, cacheEnabled: false, useChrome: true, killProcessOnBrowserClose: true, throwErrorOnTosBlock: false, chromiumArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--aggressive-cache-discard', '--disable-cache', '--disable-application-cache', '--disable-offline-load-stale-cache', '--disk-cache-size=0'], executablePath: 'C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe', skipBrokenMethodsCheck: true, stickerServerEndpoint: true}};
  const res = await fetch('https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl', {method: 'post', headers: {'Accept': 'application/json, text/plain, /', 'Content-Type': 'application/json;charset=utf-8'}, body: JSON.stringify(Format)});
  return Buffer.from((await res.text()).split(';base64,')[1], 'base64');
}


