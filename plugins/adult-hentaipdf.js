import fetch from 'node-fetch';
import PDFDocument from 'pdfkit';
import {extractImageThumb} from '@whiskeysockets/baileys';
const handler = async (m, {conn, text, usedPrefix, command, args}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❮💜 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 💜❯ 𝗟𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 +18 𝗲𝘀𝘁𝗮𝗻 𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗱𝗮𝘀 𝗽𝗼𝗿 𝗮𝗹𝗴𝘂𝗻𝗮𝘀 𝘁𝗲𝗺𝗮𝘀, 𝘁𝗶𝗲𝗻𝗲 𝗾𝘂𝗲 𝗮𝗰𝗹𝗮𝗿𝗮𝗿 𝘀𝘂 𝗲𝗱𝗮𝗱 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗱𝗶𝗰𝗵𝗼𝘀 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼𝘀.*';
  if (!text) throw `*❮💖❯ 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗳 𝗶𝗻𝗴𝗿𝗲𝘀𝗲 𝘂𝗻𝗮 𝗰𝗮𝘁𝗲𝗴𝗼𝗿𝗶𝗮 𝗱𝗲 𝗮𝗻𝗶𝗺𝗲, 𝗽𝗼𝗿 𝗲𝗷𝗲𝗺𝗽𝗹𝗼: ${usedPrefix + command} akira*`;
  try {
    m.reply(global.wait);
    const res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeysapi}&query=${text}`);
    const json = await res.json();
    const aa = json.result[0].id;
    const data = await nhentaiScraper(aa);
    const pages = [];
    const thumb = `https://external-content.duckduckgo.com/iu/?u=https://t.nhentai.net/galleries/${data.media_id}/thumb.jpg`;
    data.images.pages.map((v, i) => {
      const ext = new URL(v.t).pathname.split('.')[1];
      pages.push(`https://external-content.duckduckgo.com/iu/?u=https://i7.nhentai.net/galleries/${data.media_id}/${i + 1}.${ext}`);
    });
    const buffer = await (await fetch(thumb)).buffer();
    const jpegThumbnail = await extractImageThumb(buffer);
    const imagepdf = await toPDF(pages);
    await conn.sendMessage(m.chat, {document: imagepdf, jpegThumbnail, fileName: data.title.english + '.pdf', mimetype: 'application/pdf'}, {quoted: m});
  } catch {
    throw `*❮⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️❯ 𝚘𝚌𝚞𝚛𝚛𝚒𝚘 𝚞𝚗 𝚎𝚛𝚛𝚘𝚛 𝚒𝚗𝚎𝚜𝚙𝚎𝚛𝚊𝚍𝚘, 𝚒𝚗𝚝𝚎𝚗𝚝𝚎 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎.*`;
  }
};
handler.command = /^(hentaipdf)$/i;
export default handler;
async function nhentaiScraper(id) {
  const uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/';
  const html = (await axios.get(uri)).data;
  return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data;
}
function toPDF(images, opt = {}) {
  return new Promise(async (resolve, reject) => {
    if (!Array.isArray(images)) images = [images];
    const buffs = []; const doc = new PDFDocument({margin: 0, size: 'A4'});
    for (let x = 0; x < images.length; x++) {
      if (/.webp|.gif/.test(images[x])) continue;
      const data = (await axios.get(images[x], {responseType: 'arraybuffer', ...opt})).data;
      doc.image(data, 0, 0, {fit: [595.28, 841.89], align: 'center', valign: 'center'});
      if (images.length != x + 1) doc.addPage();
    }
    doc.on('data', (chunk) => buffs.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(buffs)));
    doc.on('error', (err) => reject(err));
    doc.end();
  });
}


/* import fetch from 'node-fetch'
let handler = async (m, { conn, text, usedPrefix, command, args }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❮💜 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 💜❯ 𝗟𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 +18 𝗲𝘀𝘁𝗮𝗻 𝗽𝗿𝗼𝗵𝗶𝗯𝗶𝗱𝗮𝘀 𝗽𝗼𝗿 𝗮𝗹𝗴𝘂𝗻𝗮𝘀 𝘁𝗲𝗺𝗮𝘀, 𝘁𝗶𝗲𝗻𝗲 𝗾𝘂𝗲 𝗮𝗰𝗹𝗮𝗿𝗮𝗿 𝘀𝘂 𝗲𝗱𝗮𝗱 𝗽𝗮𝗿𝗮 𝘃𝗲𝗿 𝗱𝗶𝗰𝗵𝗼𝘀 𝗰𝗼𝗻𝘁𝗲𝗻𝗶𝗱𝗼𝘀.*'
if (!text) throw `*❮💖❯ 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗳 𝗶𝗻𝗴𝗿𝗲𝘀𝗲 𝘂𝗻𝗮 𝗰𝗮𝘁𝗲𝗴𝗼𝗿𝗶𝗮 𝗱𝗲 𝗮𝗻𝗶𝗺𝗲, 𝗽𝗼𝗿 𝗲𝗷𝗲𝗺𝗽𝗹𝗼: ${usedPrefix + command} akira*`
try {
m.reply(global.wait)
let res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let aa = json.result[0].id
let aa2 = json.result[0].title_native
let res2 = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${aa}?apikey=${lolkeysapi}`)
let json2 = await res2.json()
let aa3 = json2.result
await conn.sendMessage(m.chat, { document: { url: aa3 }, mimetype: 'application/pdf', fileName: `${aa2}.pdf` }, { quoted: m })
} catch {
throw `*[❮⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️❯ 𝚘𝚌𝚞𝚛𝚛𝚒𝚘 𝚞𝚗 𝚎𝚛𝚛𝚘𝚛 𝚒𝚗𝚎𝚜𝚙𝚎𝚛𝚊𝚍𝚘, 𝚒𝚗𝚝𝚎𝚗𝚝𝚎 𝚗𝚞𝚎𝚟𝚊𝚖𝚎𝚗𝚝𝚎.*`
}}
handler.command = /^(hentaipdf)$/i
export default handler*/
