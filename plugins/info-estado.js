const handler = async (m, {conn}) => {
  try {
    const pp = imagen6;
    const img = await(await fetch('https://github.com/BrunoSobrino.png')).buffer();
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `╔┅┅┅┅❲💞 𝙈𝙞𝙩𝙨𝙪𝙧𝙞-𝘽𝙤𝙩-𝙈𝘿 💞❳┅┅┅┅╗
*╏❬😻❭➮ Hola ${taguser}*
╏•╌╌╌╌╌╌╌╌╌╌╌╌╌•
*╏❬🥏❭➮ 𝑻𝒊𝒆𝒎𝒑𝒐 𝑨𝒄𝒕𝒊𝒗𝒐:* ${uptime}
*╏❬🌎❭➮ 𝑩𝒐𝒕 𝒑𝒖𝒃𝒍𝒊𝒄𝒐 𝒑𝒂𝒓𝒂 𝒕𝒐𝒅𝒐 𝒖𝒔𝒖𝒂𝒓𝒊𝒐.*
*╏❬👑❭➮ 𝑪𝒓𝒆𝒂𝒅𝒐𝒓:*
╏𝑳𝒊𝒛-𝑶𝑭𝑪
*╏❬🥇❭➮ 𝑵𝒖𝒎𝒆𝒓𝒐 𝑮-𝑾𝒉𝒂:*
╏ https://wa.me/19145948340
╚┅┅┅┅❲💞 𝙈𝙞𝙩𝙨𝙪𝙧𝙞-𝘽𝙤𝙩-𝙈𝘿 💞❳┅┅┅┅╝`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://wa.me/19145948340`, "sourceUrl": `https://www.github.com/egobot-supreme/Mitsuri-Bot-MD`}}}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm, "containsAutoReply": true, "mediaType": 1, "thumbnail": pp, "mediaUrl": `https://wa.me/19145948340`, "sourceUrl": `https://www.github.com/egobot-supreme/Mitsuri-Bot-MD`}}}, {quoted: fkontak2});
    }
  } catch {
  }
};
handler.help = ['estado'];
handler.tags = ['main'];
handler.command = /^(estado|status|estate|state|stado|stats|runtime|uptime)$/i;
export default handler;
function clockString(ms) {
  const d = isNaN(ms) ? '--' : Math.floor(ms / 86400000);
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24;
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [`\n*╏☀️➮ ` + d, ' Día(s)* ', `\n*╏⏳➮ ` + h, ' Hora(s)* ', `\n*╏⏳➮ ` + m, ' Minuto(s)* ', `\n*╏⏳➮ ` + s, ' Segundo(s)* '].map((v) => v.toString().padStart(2, 0)).join('');
}
