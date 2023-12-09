import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw `*১︧.۪̇〬°⃟᮪݇⃟⃟🍓➢ No se ingreso el nombre de la canción, por favor ingrese el titulo/nombre de la cancion para descargarlo.*\n\n*১︧.۪̇〬°⃟᮪݇⃟⃟🔥➢ Por ejemplo:*\n*${usedPrefix + command} Fät tony - unholy*`;
  try {
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play3' || command == 'playdoc') {
      additionalText = '💖 Audio 💖';
    } else if (command === 'play4' || command == 'playdoc2') {
      additionalText = '👑 Video 👑';
    }
    const texto1 = `*❮ 👑 YOUTUBE PLAY - MITSURI BOT 👑 ❯*

*╔═══❖•ೋ°ৡৢ͜͡  ✨ 𖥨֗°ೋ•❖═══╗*
 ᬊ᭄ঔৣ͜͡ீ͜❥͜🔥 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐏𝐥𝐚𝐲 🔥ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  ✨ 𖥨֗°ೋ•❖═══╝*
version: doc

╭᥀·࣭࣪̇˖🍁◗ *NOMBRE/TITULO:*
║
╰◊➣ ${yt_play[0].title}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖🌿◗ *PUBLICADO EN:*
║
╰◊➣ ${yt_play[0].ago}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖⏱️◗ *TIEMPO/DURACION:*
║
╰◊➣ ${secondString(yt_play[0].duration.seconds)}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖🔍◗ *NUMERO DE VISTAS:*
║
╰◊➣ ${`${MilesNumber(yt_play[0].views)}`}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖🎉◗ *AUTOR/A | CREADOR/A:*
║
╰◊➣ ${yt_play[0].author.name}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖🔥◗ *CANAL AUTOR/A:*
║
╰◊➣ ${yt_play[0].author.url}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖🍀◗ *ID DEL VIDEO/AUDIO:*
║
╰◊➣ ${yt_play[0].videoId}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖🛡️◗ *TIPO ¿Video? - ¿Audio?:*
║
╰◊➣ ${yt_play[0].type}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖⬇️◗ *ENLACE / URL DIRECTO:*
║
╰◊➣ ${yt_play[0].url}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

᥀·࣭࣪̇˖💦◗ 𝚂𝚎 𝚎𝚜𝚝𝚊 𝚎𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚜𝚞 𝚌𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘
𝚎𝚗 𝚏𝚘𝚛𝚖𝚊𝚝𝚘 ${additionalText}.
𝙿𝚘𝚛 𝚏𝚊𝚟𝚘𝚛 𝚎𝚜𝚙𝚎𝚛𝚎 𝚞𝚗 𝚖𝚒𝚗𝚞𝚝𝚘 𝚍𝚎𝚙𝚎𝚗𝚍𝚒𝚎𝚗𝚍𝚘
𝚍𝚎 𝚌𝚞𝚊𝚗𝚝𝚘 𝚙𝚎𝚜𝚎 𝚎𝚕 ${additionalText}.


🌆 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 🌆`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play3' || command == 'playdoc') {
      try {
        const q = '128kbps';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.audio[q].download();
        const ttl = await yt.title;
        const size = await yt.audio[q].fileSizeH;
        await conn.sendMessage(m.chat, {document: {url: dl_url}, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, {quoted: m});
      } catch {
        try {
          const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
          const lolh = await lolhuman.json();
          const n = lolh.result.title || 'error';
          await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
        } catch {
          try {
            const searchh = await yts(yt_play[0].url);
            const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
            const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
            const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
            conn.sendMessage(m.chat, {audio: {url: ress.url}, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4'}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*❮⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️❯: No se pudo descargar el audio, por favor intentelo nuevamente.*', m);
          }
        }
      }
    }
    if (command == 'play4' || command == 'playdoc2') {
      try {
        const qu = '360';
        const q = qu + 'p';
        const v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.video[q].download();
        const ttl = await yt.title;
        const size = await yt.video[q].fileSizeH;
        await await conn.sendMessage(m.chat, {document: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `▢ 𝚃𝙸𝚃𝚄𝙻𝙾: ${ttl}\n▢ 𝙿𝙴𝚂𝙾 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾: ${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
      } catch {
        try {
          const mediaa = await ytMp4(yt_play[0].url);
          await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
        } catch {
          try {
            const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
            const lolh = await lolhuman.json();
            const n = lolh.result.title || 'error';
            const n2 = lolh.result.link;
            const n3 = lolh.result.size;
            const n4 = lolh.result.thumbnail;
            await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `𖥨ํ∘̥⃟⸽⃟💜➤ 𝐓𝐈𝐓𝐔𝐋𝐎/𝐍𝐎𝐌𝐁𝐑𝐄: ${n}\n*𖥨ํ∘̥⃟⸽⃟💜➤ 𝐏𝐄𝐒𝐎 𝐓𝐎𝐓𝐀𝐋 𝐃𝐄𝐋 𝐕𝐈𝐃𝐄𝐎*: ${n3}`, thumbnail: await fetch(n4)}, {quoted: m});
          } catch {
            await conn.reply(m.chat, '*❮⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️❯: No se pudo descargar el video, por favor, intente nuevamente.*', m);
          }
        }
      }
    }
  } catch {
    throw '*❮⚠️ 𝐄𝐑𝐑𝐎𝐑 / 𝐀𝐋𝐄𝐑𝐓𝐀  ⚠️❯:*\n*No se pudo descargar el video/audio, por favor intente nuevamente, si sale error varias veces, reporte este comando con el comando: #reporte*';
  }
};
handler.help = ['play3', 'play4'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(playdoc|playdoc2|play3|play4)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}


// import { youtubeSearch } from '@bochilteam/scraper'
// import fetch from 'node-fetch'
// let handler = async (m, { conn, command, text, usedPrefix }) => {
// if (!text) throw `*১︧.۪̇〬°⃟᮪݇⃟⃟🍓➢ No se ingreso el nombre de la canción, por favor ingrese el titulo/nombre de la cancion para descargarlo.*\n\n*১︧.۪̇〬°⃟᮪݇⃟⃟🔥➢ Por ejemplo:*\n*${usedPrefix + command} Fät tony - unholy*`
// try {
// let vid = (await youtubeSearch(text)).video[0]
// let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
// const urll = 'https://www.youtube.com/watch?v=' + videoId
// var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
// var document = doc[Math.floor(Math.random() * doc.length)]
// const buttons = [
// { buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: '🛡️ 𝗔𝘂𝗱𝗶𝗼 𝗗𝗼𝗰 🛡️' }, type: 1 },
// { buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: '🍀 𝗩𝗶𝗱𝗲𝗼 𝗗𝗼𝗰 🍀' }, type: 1 },
// { buttonId: `#playlist ${text}`, buttonText: { displayText: '💜 𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼𝘀 💜' }, type: 1 }, ]
// let texto1 = `*❮ 👑 YOUTUBE PLAY - MITSURI BOT 👑 ❯*\n\n
//*╔═══❖•ೋ°ৡৢ͜͡  ✨ 𖥨֗°ೋ•❖═══╗*
// ᬊ᭄ঔৣ͜͡ீ͜❥͜🔥 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐏𝐥𝐚𝐲 🔥ू ፝͜❥ᬊ᭄
//*╚═══❖•ೋ°ৡৢ͜͡  ✨ 𖥨֗°ೋ•❖═══╝*
//version: doc\n\n
//╭᥀·࣭࣪̇˖🍁◗ *NOMBRE/TITULO:*
//║
//╰◊➣ ${title}
//╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
//╭᥀·࣭࣪̇˖🌿◗ *PUBLICADO EN:*
//║
//${publishedTime}
//╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
//╭᥀·࣭࣪̇˖⏱️◗ *TIEMPO/DURACION:*
//║
//╰◊➣ ${durationH}
//╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
//╭᥀·࣭࣪̇˖🔍◗ *NUMERO DE VISTAS:*
//║
//╰◊➣ ${viewH}
//╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
//╭᥀·࣭࣪̇˖👑◗ *DESCRIPCION:*
//║
//╰◊➣ ${description}
//╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
//╭᥀·࣭࣪̇˖⬇️◗ *ENLACE / URL DIRECTO:*
//║
//╰◊➣ ${urll}\n\n
//🌆 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 🌆`.trim()
// let buttonMessage = { "document": { url: "https://wa.me/19146103450" }, "fileName": '❮💜❯➤ 𝗥𝗲𝗽𝗿𝗼𝗱𝘂𝗰𝘁𝗼𝗿 𝗱𝗲 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 | 💖 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 - 𝗕𝗼𝘁 - 𝗠𝗗 💖', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/SerizawaBeta-MD` }}}
// conn.sendMessage(m.chat, buttonMessage, { quoted: m })
// } catch {
// try {
// let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
// let { videoId, title, views, published, thumbnail } = await vid2.result[0]
// const url = 'https://www.youtube.com/watch?v=' + videoId
// let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
// let jsonn = await ytLink.json()
// let aud = await jsonn.result.audio
// let capt = `❮💝❯➤ *𝙏𝙞𝙩𝙪𝙡𝙤:* ${title}\n❮💜❯➤ *𝙋𝙪𝙗𝙡𝙞𝙘𝙖𝙙𝙤 𝙚𝙣:* ${published}\n❮👀❯➤ *𝘾𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚 𝙫𝙞𝙨𝙩𝙖𝙨:* ${views}\n❮⬇️❯➤ *𝙀𝙣𝙡𝙖𝙘𝙚/𝙐𝙍𝙡:* ${url}`
// const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: '❮😍 𝙈𝙖𝙨 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨 😍❯'}, type: 1}]
// const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*❮💝❯➤ 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙚𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙚𝙡 𝙖𝙪𝙙𝙞𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤.*', buttons: buttons, headerType: 4 }
// let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
// conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
// } catch {
// throw '*❮⛔❯➤ 𝙀𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙩𝙚𝙣𝙩𝙚 𝙣𝙪𝙚𝙫𝙖𝙢𝙚𝙣𝙩𝙚, 𝙨𝙞 𝙚𝙡 𝙚𝙧𝙧𝙤𝙧 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖, 𝙧𝙚𝙥𝙤𝙧𝙩𝙚 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙣𝙙𝙞𝙜𝙤: #reporte*'}}}
// handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
// handler.tags = ['downloader']
// handler.command = /^play3|playdoc?$/i
// export default handler
