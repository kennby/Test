import cheerio from 'cheerio';
import axios from 'axios';
const handler = async (m, {conn, text, __dirname, usedPrefix, command}) => {
  if (!global.db.data.chats[m.chat].modohorny && m.isGroup) throw '*❮💜 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 💜❯: 𝗟𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 +18 𝗻𝗼 𝗲𝘀𝘁𝗮𝗻 𝗽𝗲𝗿𝗺𝗶𝘁𝗶𝗱𝗼𝘀 𝗽𝗮𝗿𝗮 𝘂𝘀𝗼 𝗽𝘂𝗯𝗹𝗶𝗰𝗼 𝗻𝗶 𝗽𝗮𝗿𝗮 𝘂𝘀𝘂𝗮𝗿𝗶𝗼𝘀 𝗱𝗲 𝗺𝗲𝗻𝗼𝗿 𝗲𝗱𝗮𝗱.*';
  if (!text) throw '*𖥨ํ∘̥⃟⸽⃟💞➤ Por favor, ingrese el nombre de Hentai para buscar.*';
  const searchResults = await searchHentai(text);
  let teks = searchResults.result.map((v, i) => `
┄┄┄┄┄┄┄┄┄┄┄┄
${i+1}.
• *_${v.title}_*
┄┄┄┄┄┄┄┄┄┄┄┄
𖥨ํ∘̥⃟⸽⃟👀➤*_Vistas:_*
• ${v.views}
┄┄┄┄┄┄┄┄┄┄┄┄
𖥨ํ∘̥⃟⸽⃟⬇️➤ *_Link:_*
• ${v.url}
┄┄┄┄┄┄┄┄┄┄┄┄
`).join('\n\n');
  let randomThumbnail;
  if (searchResults.result.length > 0) {
    const randomIndex = Math.floor(Math.random() * searchResults.result.length);
    randomThumbnail = searchResults.result[randomIndex].thumbnail;
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png';
    teks = '*𖥨ํ∘̥⃟⸽⃟💞➤ No se ha encontrado nada, intentelo nuevamente.*';
  }
  conn.sendFile(m.chat, randomThumbnail, 'error.jpg', teks, m);
};
handler.command = /^(hentaisearch|searchhentai)$/i;
export default handler;
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get('https://hentai.tv/?s=' + search).then(async ({data}) => {
      const $ = cheerio.load(data);
      const result = {};
      const res = [];
      result.coder = 'rem-comp';
      result.result = res;
      result.warning = 'It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp';
      $('div.flex > div.crsl-slde').each(function(a, b) {
        const _thumbnail = $(b).find('img').attr('src');
        const _title = $(b).find('a').text().trim();
        const _views = $(b).find('p').text().trim();
        const _url = $(b).find('a').attr('href');
        const hasil = {thumbnail: _thumbnail, title: _title, views: _views, url: _url};
        res.push(hasil);
      });
      resolve(result);
    }).catch((err) => {
      console.log(err);
    });
  });
}
