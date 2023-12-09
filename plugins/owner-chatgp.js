/* ---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
  
  𝘿𝙖𝙧 𝙡𝙤𝙨 𝙘𝙧𝙚𝙙𝙞𝙩𝙤𝙨 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧
-----------------------------------------------------------------------------------------*/

import {randomBytes} from 'crypto';
const link = /chat.whatsapp.com/;
const handler = async (m, {conn, text, groupMetadata}) => {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  if (!text) throw '*❮✅❯➜ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣 𝙩𝙚𝙭𝙩𝙤 𝙥𝙖𝙧𝙖 𝙚𝙣𝙫𝙞𝙖𝙧 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨.*';
  const linkThisGroup = `${link}`;
  if (m.text.includes(linkThisGroup)) return conn.reply(m.chat, '❮😕❯➜ 𝙉𝙤 𝙥𝙪𝙚𝙙𝙚𝙨 𝙚𝙨𝙥𝙖𝙢𝙚𝙖𝙧 𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙖 𝙤𝙩𝙧𝙤𝙨 𝙜𝙧𝙪𝙥𝙤𝙨.', m);
  const time = global.db.data.users[m.sender].msgwait + 300000;
  if (new Date - db.data.users[m.sender].msgwait < 300000) throw `*❮⏳❯➜ 𝙏𝙞𝙚𝙣𝙚𝙨 𝙦𝙪𝙚 𝙚𝙨𝙥𝙚𝙧𝙖𝙧 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙚𝙣𝙫𝙞𝙖𝙧 𝙤𝙩𝙧𝙤 𝙢𝙚𝙣𝙨𝙖𝙟𝙚.*`;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const name = await conn.getName(m.sender);
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map((v) => v[0]);
  const fakegif = {key: {participant: `0@s.whatsapp.net`, ...('51958907754-19145948340@g.us' ? {remoteJid: '51958907754-19145948340@g.us'} : {})}, message: {'videoMessage': {'title': '☕︎✞࿕ཹ⃟ﷺ✨𝕃-𝑰-𝑍🍓꙲✞👑ᵒᶠᶜ༆ᴥ︎︎︎', 'h': `Hmm`, 'seconds': '99999', 'gifPlayback': 'true', 'caption': '💖 𝑺𝒖𝒑𝒆𝒓 𝑴𝒊𝒕𝒔𝒖𝒓𝒊 - 𝑩𝒐𝒕 - 𝑴𝑫 - 𝑶𝑭𝑪 💖', 'jpegThumbnail': false}}};
  const teks = `*❮😘❯➜ 𝙂𝙧𝙪𝙥𝙤:* ${groupMetadata.subject}\n*❮👑❯➜ 𝘿𝙚:* ${name}\n*❮🥏❯➜ 𝙉𝙪𝙢𝙚𝙧𝙤:* wa.me/${who.split`@`[0]}\n*❮💎❯➜ 𝙈𝙚𝙣𝙨𝙖𝙟𝙚:* ${text}`;
  for (const id of groups) {
    await conn.sendMessage(id, {text: teks}, {quoted: fakegif});
    global.db.data.users[m.sender].msgwait = new Date * 1;
  }
};
handler.command = /^(msg)$/i;
handler.owner = true;
handler.group = true;
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' m ' + seconds + ' s ';
}
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const randomID = (length) => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);
