import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
try {
const pp = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
const handler = async (m, {command, text}) => m.reply(`
╭╌╍╍╍═══❲ 💜 ❳═══╍╍╍╌╮
║ *💞 Preguntas - Bot  💞*
╟╌╌╌╌╌╌╌╌╌╌╌ • •
║ *🍀 Tu pregunta:*
║ ${text}
╟╌╌╌╌╌╌╌╌╌╌╌ • •
║ *💜 Respuesta de la pregunta:*
║ ${['Si', 'Tal vez sí', 'Posiblemente', 'Probablemente no', 'No', 'Imposible'].getRandom()}
║
║ 🎀 Mitsuri - Bot - MD 🎀
╰╌╍╍╍═══❲ 💜 ❳═══╍╍╍╌╯`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid,
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {url: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {url: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️, 𝗘𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗻𝗼 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗮 𝗮𝗹 𝗽𝗮𝗿𝗲𝗰𝗲𝗿, 𝗽𝘂𝗲𝗱𝗲 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗿𝗹𝗼 𝗮𝗹 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 𝗱𝗲𝗹 𝗯𝗼𝘁.*', m);
  }
} : {});

handler.help = ['pregunta <texto>?'];
handler.tags = ['kerang'];
handler.command = /^pregunta|preguntas|apakah$/i;
export default handler;
