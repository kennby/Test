import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/bot.mp3';
  const chat = global.db.data.chats[m.chat];
  //const s = seconds: '4556'
  // const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "19146103450-19145948340@g.us" } : {}) }, message: {orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '🌷 𝑴𝒊𝒕𝒔𝒖𝒓𝒊 - 𝑩𝒐𝒕 - 𝑴𝑫 🌷', orderTitle: 'Bang', thumbnail: fs.readFileSync('./Menu2.jpg'), sellerJid: '0@s.whatsapp.net'}}}
  // const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "19146103450-19145948340@g.us" } : {}) }, message: {"audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"}}}
  if (/^bot$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    await m.reply(`*😊 Hola ¿Como puedo ayudarte usuario/a?*\n\n*😊 Si quieres ver el menu y los comandos, puedes escribir estos comandos:*\n\n*#help*\n*#menu*\n*#Menu*\n*#ayuda*\n\n*😊 El prefijo ( # ) o ( . ) es opcional para este uso del bot.*`);
    m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
    // conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', seconds: '4556', ptt: true, sendEphemeral: true, quoted: m })
  }
  return !0;
};
export default handler;
