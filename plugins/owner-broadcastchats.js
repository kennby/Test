import fs from 'fs';
const handler = async (m, {conn, text} ) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map((v) => v[0]);
  if (!text) throw '*❮✅❯➜ Por favor, ingrese el mensaje que quiere transmitir.*';
  const cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks = text ? text : cc.text;
  for (const i of chats) {
    await delay(500);
    conn.relayMessage(i,
        {liveLocationMessage: {
          degreesLatitude: 35.685506276233525,
          degreesLongitude: 139.75270667105852,
          accuracyInMeters: 0,
          degreesClockwiseFromMagneticNorth: 2,
          caption: '*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*\n\n' + teks + '\n\n𝘌𝘴𝘵𝘦 𝘦𝘴 𝘶𝘯 𝘤𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘥𝘰 𝘰𝘧𝘤 𝘥𝘦 💜 𝘔𝘪𝘵𝘴𝘶𝘳𝘪 - 𝘉𝘰𝘵 - 𝘔𝘋 💜',
          sequenceNumber: 2,
          timeOffset: 3,
          contextInfo: m,
        }}, {}).catch((_) => _);
  }
  m.reply(`*❮🍁 𝘊𝘩𝘢𝘵𝘗𝘳𝘪𝘷𝘢𝘵𝘦 🍁❯➜ 𝘔𝘦𝘯𝘴𝘢𝘫𝘦 𝘦𝘯𝘷𝘪𝘢𝘥𝘰 𝘢: ${chats.length} 𝘤𝘩𝘢𝘵𝘴 𝘱𝘳𝘪𝘷𝘢𝘥𝘰𝘴.*\n\n*❮🛡️ 𝗡𝗢𝗧𝗔 🛡️❯:* Este comando puede tener errores, por lo cual, a veces no puede enviar el mensaje de comunicado a los chats.`);
};
handler.help = ['broadcastchats', 'bcchats'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i;
handler.rowner = true;
export default handler;


/* import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chats) {
conn.sendButton(id, `*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*\n\n*❮💖❯➤ 𝑴𝒆𝒏𝒔𝒂𝒋𝒆:*\n${text}\n\n*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*`, '𝘌𝘴𝘵𝘦 𝘦𝘴 𝘶𝘯 𝘤𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘥𝘰 𝘰𝘧𝘤 𝘥𝘦 💜 𝘔𝘪𝘵𝘴𝘶𝘳𝘪 - 𝘉𝘰𝘵 - 𝘔𝘋 💜\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['👑 Owner 👑', '.owner'],['😻 Donar 😻', '.donasi']], false, {
contextInfo: { externalAdReply: {
title: '💖 Comunicado oficial a chats privados',
body: '🍀 𝑴𝒊𝒕𝒔𝒖𝒓𝒊 - 𝑩𝒐𝒕 - 𝑴𝑫 🍀',
sourceUrl: `https://github.com/SerizawaBeta-MD`,
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*❮🍁 𝘊𝘩𝘢𝘵𝘗𝘳𝘪𝘷𝘢𝘵𝘦 🍁❯➜ 𝘔𝘦𝘯𝘴𝘢𝘫𝘦 𝘦𝘯𝘷𝘪𝘢𝘥𝘰 𝘢: ${chats.length} 𝘤𝘩𝘢𝘵𝘴 𝘱𝘳𝘪𝘷𝘢𝘥𝘰𝘴.*\n\n*❮🛡️ 𝗡𝗢𝗧𝗔 🛡️❯:* Este comando puede tener errores, por lo cual, a veces no puede enviar el mensaje de comunicado a los chats.`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcastchats?|bcc(hats?)?)$/i
handler.rowner = true
export default handler*/

