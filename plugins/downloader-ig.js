import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
import instagramDl from '@sasmeee/igdl';
import {fileTypeFromBuffer} from 'file-type';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  if (!args[0]) throw `*👑 Por favor, ingresa un enlace valido de Instagram, por ejemplo: ${usedPrefix + command}* https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link`;
  m.reply(global.wait);
  try {
const img = await instagramDl(args[0]);
for (let i = 0; i < img.length; i++) {
    const bufferInfo = await getBuffer(img[i].download_link);
        if (bufferInfo.detectedType.mime.startsWith('image/')) {
            await conn.sendMessage(m.chat, {image: {url: img[i].download_link}}, {quoted: m});
        } else if (bufferInfo.detectedType.mime.startsWith('video/')) {
            await conn.sendMessage(m.chat, {video: {url: img[i].download_link }}, {quoted: m});
        }
}
  } catch {   
  try {
    const datTa = await instagram.download(args[0]);
    for (const urRRl of datTa) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
      const tXXxt = `*╭•• <<─◊─◊─◊─≪•◦❲💞❳◦•≫─◊─◊─◊─>> ••╮*\n*╟➤ ✅ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎/𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎 ✅*\n*╰•• <<─◊─◊─◊─≪•◦╌╌╌◦•≫─◊─◊─◊─>> ••╯*\n\n❮💖❯➤ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢, 𝙦𝙪𝙚 𝙡𝙤 𝙙𝙞𝙨𝙛𝙧𝙪𝙩𝙚 ✨\n\n❮⬇️❯➤ 𝙀𝙣𝙡𝙖𝙘𝙚/𝙐𝙍𝙇 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤✨.\n➤ ${shortUrRRl}\n\n❮😍❯➤ 𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩 ✨\n➤ *💜 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💜*`.trim();
      conn.sendFile(m.chat, urRRl.url, 'error.mp4', tXXxt, m);
      await new Promise((resolve) => setTimeout(resolve, 10000));
    }
  } catch {
      try {
        const resultss = await instagramGetUrl(args[0]).url_list[0];
        const shortUrl2 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        const txt2 = `*╭•• <<─◊─◊─◊─≪•◦❲💞❳◦•≫─◊─◊─◊─>> ••╮*\n*╟➤ ✅ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎/𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎 ✅*\n*╰•• <<─◊─◊─◊─≪•◦╌╌╌◦•≫─◊─◊─◊─>> ••╯*\n\n❮💖❯➤ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢, 𝙦𝙪𝙚 𝙡𝙤 𝙙𝙞𝙨𝙛𝙧𝙪𝙩𝙚 ✨\n\n❮⬇️❯➤ 𝙀𝙣𝙡𝙖𝙘𝙚/𝙐𝙍𝙇 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤✨.\n➤ ${shortUrl2}\n\n❮😍❯➤ 𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩 ✨\n➤ *💜 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💜*`.trim();
        await conn.sendFile(m.chat, resultss, 'error.mp4', txt2, m);
      } catch {
        try {
          const resultssss = await instagramdl(args[0]);
          const shortUrl3 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
          const txt4 = `*╭•• <<─◊─◊─◊─≪•◦❲💞❳◦•≫─◊─◊─◊─>> ••╮*\n*╟➤ ✅ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎/𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎 ✅*\n*╰•• <<─◊─◊─◊─≪•◦╌╌╌◦•≫─◊─◊─◊─>> ••╯*\n\n❮💖❯➤ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢, 𝙦𝙪𝙚 𝙡𝙤 𝙙𝙞𝙨𝙛𝙧𝙪𝙩𝙚 ✨\n\n❮⬇️❯➤ 𝙀𝙣𝙡𝙖𝙘𝙚/𝙐𝙍𝙇 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤✨.\n➤ ${shortUrl3}\n\n❮😍❯➤ 𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩 ✨\n➤ *💜 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💜*`.trim();
          for (const {url} of resultssss) await conn.sendFile(m.chat, url, 'error.mp4', txt4, m);
        } catch {
          try {
            const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
            const json = await human.json();
            const videoig = json.result;
            const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
            const txt1 = `*╭•• <<─◊─◊─◊─≪•◦❲💞❳◦•≫─◊─◊─◊─>> ••╮*\n*╟➤ ✅ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎/𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎 ✅*\n*╰•• <<─◊─◊─◊─≪•◦╌╌╌◦•≫─◊─◊─◊─>> ••╯*\n\n❮💖❯➤ 𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙪 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢, 𝙦𝙪𝙚 𝙡𝙤 𝙙𝙞𝙨𝙛𝙧𝙪𝙩𝙚 ✨\n\n❮⬇️❯➤ 𝙀𝙣𝙡𝙖𝙘𝙚/𝙐𝙍𝙇 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤✨.\n➤ ${shortUrl1}\n\n❮😍❯➤ 𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩 ✨\n➤ *💜 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💜*`.trim();
            await conn.sendFile(m.chat, videoig, 'error.mp4', txt1, m);
          } catch {
            throw `*❮🚀❯➤ 𝐎𝐜𝐮𝐫𝐫𝐢𝐨 𝐮𝐧 𝐞𝐫𝐫𝐨𝐫 𝐢𝐧𝐞𝐬𝐩𝐞𝐫𝐚𝐝𝐨, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐢𝐧𝐭𝐞𝐧𝐭𝐞 𝐧𝐮𝐞𝐯𝐚𝐦𝐞𝐧𝐭𝐞.*`;
          }
        }
      }
    }
  }
};
handler.command = /^(instagramdl|instagram|igdl|ig|instagramdl2|instagram2|igdl2|ig2|instagramdl3|instagram3|igdl3|ig3)$/i;
export default handler;

const getBuffer = async (url, options) => {
    options = options || {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1}, ...options, responseType: 'arraybuffer'});
    const buffer = Buffer.from(res.data, 'binary');
    const detectedType = await fileTypeFromBuffer(buffer);
    if (!detectedType || (detectedType.mime !== 'image/jpeg' && detectedType.mime !== 'image/png' && detectedType.mime !== 'video/mp4')) {
        return null;
    }
    return { buffer, detectedType };
};
