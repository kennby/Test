import {search, download} from 'aptoide-scraper';
const handler = async (m, {conn, usedPrefix: prefix, command, text}) => {
 if (!text) throw `*❮🍁❯➤ 𝑷𝑶𝑹 𝑭𝑨𝑽𝑶𝑹 𝑰𝑵𝑮𝑹𝑬𝑺𝑬 𝑬𝑳 𝑵𝑶𝑴𝑩𝑹𝑬 𝑫𝑬 𝑳𝑨 𝑨𝑷𝑲 𝑸𝑼𝑬 𝑸𝑼𝑰𝑬𝑹𝑨 𝑩𝑼𝑺𝑪𝑨𝑹.*`;
  try {    
    const searchA = await search(text);
    const data5 = await download(searchA[0].id);
    let response = `*❮👑 𝙰𝙿𝚃𝙾𝙸𝙳𝙴 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 | 𝙱𝙾𝚃 👑❯:*\n\n❮🍁❯➤ *𝙽𝙾𝙼𝙱𝚁𝙴:* ${data5.name}\n❮🌆❯➤ *𝙿𝙰𝙲𝙺𝙰𝙶𝚄𝙴:* ${data5.package}\n❮🚀❯➤ *𝚄𝙻𝚃𝙸𝙼𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙲𝙸𝙾𝙽:* ${data5.lastup}\n❮👑❯➤ *𝚃𝙰𝙼𝙰𝙽̃𝙾:* ${data5.size}`
    await conn.sendMessage(m.chat, {image: {url: data5.icon}, caption: response}, {quoted: m});
 if (data5.size.includes('GB') || data5.size.replace(' MB', '') > 999) {
      return await conn.sendMessage(m.chat, {text: '*❮🚀❯➤ 𝐄𝐋 𝐀𝐑𝐂𝐇𝐈𝐕𝐎 𝐄𝐒 𝐌𝐔𝐘 𝐏𝐄𝐒𝐀𝐃𝐎, 𝐍𝐎 𝐒𝐄 𝐏𝐎𝐃𝐑𝐀 𝐄𝐍𝐕𝐈𝐀𝐑... 𝐈𝐍𝐓𝐄𝐍𝐓𝐄 𝐁𝐔𝐒𝐂𝐀𝐑 𝐎𝐓𝐑𝐀 𝐀𝐏𝐊 𝐐𝐔𝐄 𝐍𝐎 𝐒𝐔𝐏𝐄𝐑𝐄 𝐀 𝐋𝐎𝐒 999 𝐌𝐁*'}, {quoted: m});
    }
    await conn.sendMessage(m.chat, {document: {url: data5.dllink}, mimetype: 'application/vnd.android.package-archive', fileName: data5.name + '.apk', caption: null}, {quoted: m});
  } catch {
    throw `*❮⛔❯➤ 𝙴𝚁𝚁𝙾𝚁, 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁𝙾𝙽 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂 𝙳𝙴 𝚃𝚄 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰.*`;
  }    
};
handler.command = /^(apkmod|modapk|dapk2|aptoide|aptoidedl)$/i;
export default handler;
