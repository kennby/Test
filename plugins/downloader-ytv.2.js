import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
const handler = async (m, {conn, args}) => {
  if (!args[0]) throw '*𖥨ํ∘̥⃟⸽⃟💖➤ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙙𝙚𝙨𝙥𝙪𝙚𝙨 𝙙𝙚 𝙥𝙤𝙣𝙚𝙧 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙥𝙤𝙣𝙜𝙖 𝙪𝙣 𝙚𝙣𝙡𝙖𝙘𝙚 𝙙𝙚 𝙔𝙤𝙪𝙏𝙪𝙗𝙚 𝙥𝙖𝙧𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧. ✨*';
  await m.reply(`*𖥨ํ∘̥⃟⸽⃟🍀➤ 𝙎𝙚 𝙚𝙨𝙩𝙖 𝙙𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙣𝙙𝙤 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤, 𝙚𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙤𝙢𝙚𝙣𝙩𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧...*\n\n*𖥨ํ∘̥⃟⸽⃟💦➤ 𝙎𝙞 𝙨𝙪 𝙫𝙞𝙙𝙚𝙤 𝙣𝙤 𝙨𝙚 𝙝𝙖 𝙚𝙣𝙫𝙞𝙖𝙙𝙤, 𝙥𝙧𝙪𝙚𝙗𝙚 𝙘𝙤𝙣 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨: #playdoc ᴏ #play.2 ᴏ #ytmp4doc*`);
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = args[0];
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = await yt.video[q].download();
    const ttl = await yt.title;
    const size = await yt.video[q].fileSizeH;
    const cap = `*╔═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╗*\n     ᬊ᭄ঔৣ͜͡ீ͜❥͜🧧 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐏𝐥𝐚𝐲 🧧ू ፝͜❥ᬊ᭄\n*╚═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╝*\n\n𖥨ํ∘̥⃟⸽⃟💦➤ *𝐍𝐎𝐌𝐁𝐑𝐄:* ${ttl}\n𖥨ํ∘̥⃟⸽⃟💜➤ *𝐏𝐄𝐒𝐎:* ${size}`.trim();
    await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
  } catch {
    try {
      const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${args[0]}`);
      const lolh = await lolhuman.json();
      const n = lolh.result.title || 'error';
      const n2 = lolh.result.link;
      const n3 = lolh.result.size;
      const cap2 = `*╔═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╗*\n     ᬊ᭄ঔৣ͜͡ீ͜❥͜🧧 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐏𝐥𝐚𝐲 🧧ू ፝͜❥ᬊ᭄\n*╚═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╝*\n\n𖥨ํ∘̥⃟⸽⃟🍀➤ *𝐓𝐈𝐓𝐔𝐋𝐎:* ${n}\n𖥨ํ∘̥⃟⸽⃟💝➤ *𝐏𝐄𝐒𝐎:* ${n3}`.trim();
      await conn.sendMessage(m.chat, {document: {url: n2}, caption: cap2, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m});
    } catch {
      await conn.reply(m.chat, '*𖥨ํ∘̥⃟⸽⃟⛔➤ 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐈𝐍𝐄𝐒𝐏𝐄𝐑𝐀𝐃𝐎, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐈𝐍𝐓𝐄𝐍𝐓𝐄 𝐍𝐔𝐄𝐕𝐀𝐌𝐄𝐍𝐓𝐄.*', m);
    }
  }
};
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i;
export default handler;
