import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*❮💝❯➤ 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐃𝐄 𝐄𝐒𝐓𝐀 𝐅𝐎𝐑𝐌𝐀, 𝐏𝐎𝐑 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command} Minecraft*`;
  //if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('❮⛔❯➤ 𝐄𝐒𝐄 𝐓𝐄𝐗𝐓𝐎 𝐐𝐔𝐄 𝐈𝐍𝐆𝐑𝐄𝐒𝐎 𝐄𝐒𝐓𝐀 𝐏𝐑𝐎𝐇𝐈𝐁𝐈𝐃𝐎 𝐄𝐍 𝐄𝐋 𝐆𝐑𝐔𝐏𝐎.\n❮🤨❯➤ 𝐒𝐈 𝐔𝐒𝐓𝐄𝐃 𝐄𝐒 𝐀𝐃𝐌𝐈𝐍, 𝐏𝐔𝐄𝐃𝐄 𝐔𝐒𝐀𝐑 𝐄𝐒𝐓𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐏𝐀𝐑𝐀 𝐀𝐂𝐓𝐈𝐕𝐀𝐑𝐋𝐎: (#enable modohorny) 𝐒𝐈 𝐍𝐎 𝐄𝐒 𝐀𝐃𝐌𝐈𝐍, 𝐏𝐔𝐄𝐃𝐄 𝐏𝐄𝐃𝐈𝐑 𝐀 𝐔𝐍 𝐀𝐃𝐌𝐈𝐍 𝐐𝐔𝐄 𝐋𝐎 𝐇𝐀𝐆𝐀.');
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `*╭•• <<─◊─◊─◊─≪•◦❲💝❳◦•≫─◊─◊─◊─>> ••╮*\n*╟➤ ✅ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎/𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎 ✅*\n*╰•• <<─◊─◊─◊─≪•◦╌╌╌◦•≫─◊─◊─◊─>> ••╯*\n\n❮😍❯➤ 𝙏𝙪 𝙩𝙚𝙭𝙩𝙤 𝙖 𝙗𝙪𝙨𝙘𝙖𝙧:\n➤ ${text}\n\n❮⬇️❯➤ 𝙀𝙣𝙡𝙖𝙘𝙚/𝙐𝙍𝙇:\n➤ ${link}\n\n❮🍀❯➤ 𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧:\n➤ *Google*\n\n❮💦❯➤ 𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩\n${global.wm}`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(gimage|image|imagen)$/i;
export default handler;
