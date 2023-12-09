const handler = async (m, {conn, isROwner, text}) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const getGroups = await conn.groupFetchAllParticipating();
  const groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
  const anu = groups.map((v) => v.id);
  const pesan = m.quoted && m.quoted.text ? m.quoted.text : text;
  if (!pesan) throw '*❮😻❯➤ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙖 𝙩𝙧𝙖𝙣𝙨𝙢𝙞𝙩𝙞𝙧.*';
  // m.reply(`*❮💖❯➤ Mensaje enviado a: ${anu.length} grupo/s*\n\n*❮🛡️ 𝗡𝗢𝗧𝗔 🛡️❯:* Este comando puede tener errores, por lo cual, a veces no puede enviar el mensaje de comunicado a los chats.`)
  for (const i of anu) {
    await delay(500);
    conn.relayMessage(i,
        {liveLocationMessage: {
          degreesLatitude: 35.685506276233525,
          degreesLongitude: 139.75270667105852,
          accuracyInMeters: 0,
          degreesClockwiseFromMagneticNorth: 2,
          caption: '*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*\n\n' + pesan + '\n\n𝘌𝘴𝘵𝘦 𝘦𝘴 𝘶𝘯 𝘤𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘥𝘰 𝘰𝘧𝘤 𝘥𝘦 💜 𝘔𝘪𝘵𝘴𝘶𝘳𝘪 - 𝘉𝘰𝘵 - 𝘔𝘋 💜',
          sequenceNumber: 2,
          timeOffset: 3,
          contextInfo: m,
        }}, {}).catch((_) => _);
  }
  m.reply(`*❮💖❯➤ Mensaje enviado a: ${anu.length} grupo/s*\n\n*❮🛡️ 𝗡𝗢𝗧𝗔 🛡️❯:* Este comando puede tener errores, por lo cual, a veces no puede enviar el mensaje de comunicado a los chats.`);
};
handler.help = ['broadcastgroup', 'bcgc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(broadcast|bc)(group|grup|gc)$/i;
handler.owner = true;

export default handler;

/* import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) {
conn.sendButton(id, `*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*\n\n*❮💖❯➤ 𝑴𝒆𝒏𝒔𝒂𝒋𝒆:*\n${text}\n\n*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*`, '𝘌𝘴𝘵𝘦 𝘦𝘴 𝘶𝘯 𝘤𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘥𝘰 𝘰𝘧𝘤 𝘥𝘦 💜 𝘔𝘪𝘵𝘴𝘶𝘳𝘪 - 𝘉𝘰𝘵 - 𝘔𝘋 💜\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🍁 Owner 🍁', '.owner'],['🌿 Donar 🌿', '.donasi']], false, {
contextInfo: { externalAdReply: {
title: '👑 Comunicado oficial para grupos.',
body: '🍁 Mitsuri - Bot - MD 🍁',
sourceUrl: `https://github.com/SerizawaBeta-MD`,
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*❮💖❯➤ Mensaje enviado a: ${anu.length} grupo/s*\n\n*❮🛡️ 𝗡𝗢𝗧𝗔 🛡️❯:* Este comando puede tener errores, por lo cual, a veces no puede enviar el mensaje de comunicado a los chats.`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
handler.rowner = true
export default handler*/
