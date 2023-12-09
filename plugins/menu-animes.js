import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╔╤═♢═♢═♢═ ≪ °🌍° ≫ ═♢═♢═♢═╗
║┊ *Hola usuario/a:
║┊ ${taguser}* 🔥
║├┄┄┄┄┄┄┄┄┄┄┄ • • •
║┊ *Bienvenido/a al menu anime*
║┊ *disfrute de los comandos*
║┊ *jajaja*
╚╧═♢═♢═♢═ ≪ °🌍° ≫ ═♢═♢═♢═╝


╔╤═══❖•ೋ°ৡৢ͜͡  🌻 𖥨֗°ೋ•❖═══╗
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}lolivid_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}loli_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}ppcouple_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}neko_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}waifu_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}akira_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}akiyama_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}anna_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}asuna_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}ayuzawa_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}boruto_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}chiho_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}chitoge_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}deidara_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}erza_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}elaina_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}eba_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}emilia_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}hestia_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}hinata_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}inori_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}isuzu_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}itachi_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}itori_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}kaga_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}kagura_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}kaori_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}keneki_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}kotori_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}kurumi_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}madara_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}mikasa_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}miku_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}minato_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}naruto_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}nezuko_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}sagiri_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}sasuke_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}sakura_
║┊💜ฺ࣭࣪͘ꕸ▸ _${usedPrefix}cosplay_
╚╧═══❖•ೋ°ৡৢ͜͡  🔥 𖥨֗°ೋ•❖═══╝`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*⚠️ ERROR ⚠️: No se pudo mandar el.menu, intente nuevamente por favor.*', m);
  }
};
handler.command = /^(animes|menuanimes)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
