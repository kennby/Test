import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*𖥨ํ∘̥⃟⸽⃟💦➤ Por favor ingrese un enlace valido de Mediafire, por ejemplo: ${usedPrefix + command} https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*`;
  try {
    const resEX = await mediafiredl(args[0]);
    const captionES = `
*╔═══❖•ೋ°ৡৢ͜͡  ⬇️ 𖥨֗°ೋ•❖═══╗*
 ᬊ᭄ঔৣ͜͡ீ͜❥͜💎 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 💎ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  ⬇️ 𖥨֗°ೋ•❖═══╝*

𖥨ํ∘̥⃟⸽⃟🍀➤ 𝗡𝗼𝗺𝗯𝗿𝗲 𝗱𝗲𝗹 𝗮𝗿𝗰𝗵𝗶𝘃𝗼:
◊➢ ${resEX.filename}

╌╌╌╌╌╌╌╌╌╌╌╌╌

𖥨ํ∘̥⃟⸽⃟💦➤ 𝗣𝗲𝘀𝗼:
◊➢ ${resEX.filesizeH}

╌╌╌╌╌╌╌╌╌╌╌╌╌

𖥨ํ∘̥⃟⸽⃟💜➤ 𝗧𝗶𝗽𝗼 𝗱𝗲 𝗮𝗿𝗰𝗵𝗶𝘃𝗼:
◊➢ ${resEX.ext}

*╔═══❖•ೋ°ৡৢ͜͡  ⬇️ 𖥨֗°ೋ•❖═══╗*
 ᬊ᭄ঔৣ͜͡ீ͜❥͜💎 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 💎ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  ⬇️ 𖥨֗°ೋ•❖═══╝*

𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝘀𝗲𝗮 𝗽𝗮𝗰𝗶𝗲𝗻𝘁𝗲 𝗲𝗻 𝗰𝘂𝗮𝗻𝘁𝗼 𝘀𝗲 𝗲𝗻𝘃𝗶𝗮 𝗲𝗹 𝗮𝗿𝗰𝗵𝗶𝘃𝗼.
𝗧𝗮𝗿𝗱𝗮𝗿𝗮 𝗱𝗲𝗽𝗲𝗻𝗱𝗶𝗲𝗻𝗱𝗼 𝗱𝗲𝗹 𝗽𝗲𝘀𝗼 𝗱𝗲𝗹 𝗮𝗿𝗰𝗵𝗶𝘃𝗼. 🍀
`.trim();
    m.reply(captionES);
    await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
  } catch {
    try {
      const res = await mediafireDl(args[0]);
      const {name, size, date, mime, link} = res;
      const caption = `
*╔═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╗*
 ᬊ᭄ঔৣ͜͡ீ͜❥͜💦 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 💦ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╝*

𖥨ํ∘̥⃟⸽⃟🍀➤ 𝗡𝗼𝗺𝗯𝗿𝗲 𝗱𝗲𝗹 𝗮𝗿𝗰𝗵𝗶𝘃𝗼:
◊➢ ${name}

╌╌╌╌╌╌╌╌╌╌╌╌╌

𖥨ํ∘̥⃟⸽⃟💦➤ 𝗣𝗲𝘀𝗼:
◊➢ ${size}

╌╌╌╌╌╌╌╌╌╌╌╌╌

𖥨ํ∘̥⃟⸽⃟💜➤ 𝗧𝗶𝗽𝗼 𝗱𝗲 𝗮𝗿𝗰𝗵𝗶𝘃𝗼:
◊➢ ${mime}

*╔═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╗*
 ᬊ᭄ঔৣ͜͡ீ͜❥͜💦 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 💦ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╝*

𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝘀𝗲𝗮 𝗽𝗮𝗰𝗶𝗲𝗻𝘁𝗲 𝗲𝗻 𝗰𝘂𝗮𝗻𝘁𝗼 𝘀𝗲 𝗲𝗻𝘃𝗶𝗮 𝗲𝗹 𝗮𝗿𝗰𝗵𝗶𝘃𝗼.
𝗧𝗮𝗿𝗱𝗮𝗿𝗮 𝗱𝗲𝗽𝗲𝗻𝗱𝗶𝗲𝗻𝗱𝗼 𝗱𝗲𝗹 𝗽𝗲𝘀𝗼 𝗱𝗲𝗹 𝗮𝗿𝗰𝗵𝗶𝘃𝗼. 🍀 
`.trim();
      await m.reply(caption);
      await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
    } catch {
      await m.reply('*❲⚠️ 𝗘𝗥𝗥𝗢𝗥 ⚠️❳ Error al descargar el archivo, intente nuevamente por favor.*\n\n*❲🍀❳➤ Tiene que ser un enlace similar a este:*\n*❲🍡❳➤ https://www.mediafire.com/file/r0lrc9ir5j3e2fs/DOOM_v13_UNCLONE*\n\n*❲🎀❳➤ Si sigue dando error, puede reportar este comando con el codigo:* #reportar');
    }
  }
};
handler.help = ['mediafire'].map((v) => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
}
