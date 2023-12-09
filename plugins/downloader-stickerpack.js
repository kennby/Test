/* By https://github.com/ALBERTO9883/NyanCatBot-MD */
import fetch from 'node-fetch';
import {sticker} from '../lib/sticker.js';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*১︧.۪̇〬°⃟᮪݇⃟⃟😍➤ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤 𝙥𝙖𝙧𝙖 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: ${usedPrefix + command}* https://getstickerpack.com/stickers/flork-memes-4-1`;
  try {
    const url = text;
    const res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`);
    const json = await res.json();
    for (const data of (json.result || json)) {
      const stikers = await sticker(false, data, global.packname, global.author);
      conn.sendFile(m.chat, stikers, null, {asSticker: true}, m, true, {contextInfo: {'forwardingScore': 200, 'isForwarded': true}}, {quoted: m});
      // await delay(1500)
    }
  } catch {
    await m.reply('*১︧.۪̇〬°⃟᮪݇⃟⃟⛔➤ 𝙀𝙍𝙍𝙊𝙍, 𝙉𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝙊 𝙀𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙋𝘼𝘾𝙆 𝙌𝙐𝙀 𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝙊, 𝙄𝙉𝙏𝙀𝙉𝙏𝙀 𝙉𝙐𝙀𝙑𝘼𝙈𝙀𝙉𝙏𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍.*');
  }
};
handler.command = /^stickerpack$/i;
export default handler;
// const delay = time => new Promise(res => setTimeout(res, time))
