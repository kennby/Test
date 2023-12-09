// codigo adaptado por: https://github.com/GataNina-Li & https://github.com/elrebelde21

import {randomBytes} from 'crypto';

const handler = async (m, {conn, command, participants, usedPrefix, text}) => {
  if (!text) return '*❮😻❯➤ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙖 𝙩𝙧𝙖𝙣𝙨𝙢𝙞𝙩𝙞𝙧.*';
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
  const cc4 = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks4 = text ? text : cc4.text;
  const groups2 = Object.keys(await conn.groupFetchAllParticipating());
  const chats2 = Object.keys(global.db.data.users).filter((user) => user.endsWith('@s.whatsapp.net'));
  await conn.reply(m.chat, '*❮🍁 𝘔𝘦𝘯𝘴𝘢𝘫𝘦 🍁❯➜ 𝘔𝘦𝘯𝘴𝘢𝘫𝘦 𝘦𝘯𝘷𝘪𝘢𝘥𝘰 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘩𝘢𝘵𝘴.*\n\n*❮🛡️ 𝗡𝗢𝗧𝗔 🛡️❯:* Este comando puede tener errores, por lo cual, a veces no puede enviar el mensaje de comunicado a los chats.', m);
  const start2 = new Date().getTime();
  const usersTag2 = participants.map((u) => conn.decodeJid(u.id));
  let totalPri2 = 0;
  for (let i = 0; i < groups2.length; i++) {
    const group = groups2[i];
    const delay = i * 4000; // 4 seg
    setTimeout(async () => {
      await conn.reply(group, `*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*\n\n` + teks4, {mentions: usersTag2}, {quoted: fkontak});
    }, delay);
  }
  for (const user of chats2) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 segundos
    await conn.reply(user, `*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*\n\n` + teks4, fkontak, null);
    totalPri2++;
    if (totalPri2 >= 500000) {
      break;
    }
  }
  const end2 = new Date().getTime();
  const totalPrivate2 = chats2.length;
  const totalGroups2 = groups2.length;
  const total2 = totalPrivate2 + totalGroups2;
  let time2 = Math.floor((end2 - start2) / 1000);
  if (time2 >= 60) {
    const minutes = Math.floor(time2 / 60);
    const seconds = time2 % 60;
    time2 = `${minutes} minutos y ${seconds} segundos`;
  } else {
    time2 = `${time2} segundos`;
  }
  await m.reply(`🍁 Mensaje enviado a 🍁:
\`\`\`Chat Privado(s) >> ${totalPrivate2}\`\`\`
\`\`\`Chat Grupo(s)  >>   ${totalGroups2}\`\`\`
\`\`\`Chat totales >>   ${total2}\`\`\`\n\n*Tiempo total del envio es: ${time2}*\n${totalPri2 >= 500000 ? `\n*❮🛡️ 𝗡𝗢𝗧𝗔 🛡️❯: Este comando puede tener errores, por lo cual, a veces no puede enviar el mensaje de comunicado a los chats.` : ''}`);
};
handler.help = ['broadcast', 'bc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(comunicar|comunicado|broadcastall|bc)$/i;

handler.owner = true;

export default handler;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const randomID = (length) => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);

/* import fs from 'fs'
let handler = async (m, { conn, text } ) => {
let chatsall = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of chatsall) { conn.sendButton(id, `*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*\n\n*❮💖❯➤ 𝑴𝒆𝒏𝒔𝒂𝒋𝒆:*\n${text}\n\n*╭•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╮*\n╎ 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝘾 / 𝘽𝙊𝙏\n*╰•👑•┈┈┈••┈┈••✦💜✦••┈┈••┈┈┈•👑•╯*`, '𝘌𝘴𝘵𝘦 𝘦𝘴 𝘶𝘯 𝘤𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘥𝘰 𝘰𝘧𝘤 𝘥𝘦 💜 𝘔𝘪𝘵𝘴𝘶𝘳𝘪 - 𝘉𝘰𝘵 - 𝘔𝘋 💜\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['💖 Owner 💖', '.owner'],['👑 Donar 👑', '.donasi']], false, {
contextInfo: { externalAdReply: {
title: '💖 𝘾𝙤𝙢𝙪𝙣𝙞𝙘𝙖𝙙𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙘𝙝𝙖𝙩𝙨',
body: '💜 𝑴𝒊𝒕𝒔𝒖𝒓𝒊 - 𝑩𝒐𝒕 - 𝑴𝑫 💜',
sourceUrl: `https://github.com/SerizawaBeta-MD`,
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
}
m.reply(`*❮🍁 𝘔𝘦𝘯𝘴𝘢𝘫𝘦 🍁❯➜ 𝘔𝘦𝘯𝘴𝘢𝘫𝘦 𝘦𝘯𝘷𝘪𝘢𝘥𝘰 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘩𝘢𝘵𝘴.*\n\n*❮🛡️ 𝗡𝗢𝗧𝗔 🛡️❯: Este comando puede tener errores, por lo cual, a veces no puede enviar el mensaje de comunicado a los chats.*`)
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.rowner = true
export default handler*/
