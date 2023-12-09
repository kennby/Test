import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
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
    const str = `╔╤═♢═♢═♢═ ≪ °🌻° ≫ ═♢═♢═♢═╗
║┊ *Hola usuario/a:
║┊ ${taguser}* 💖
║├┄┄┄┄┄┄┄┄┄┄┄ • • •
║┊ *Bienvenido/a al menu audios*
║┊ *disfrute de los comandos*
║┊ *jajaja*
╚╧═♢═♢═♢═ ≪ °🌻° ≫ ═♢═♢═♢═╝

𖥨ํ∘̥⃟⸽⃟💌 Para usar estos comandos, sin usar prefijo de estos (#, /, *, .)*

╔╤═══❖•ೋ°ৡৢ͜͡  🍁 𖥨֗°ೋ•❖═══╗
║┊💦ฺ࣭࣪͘ꕸ▸ _Quien es tu sempai botsito 7w7_
║┊💦ฺ࣭࣪͘ꕸ▸ _Te diagnostico con gay_
║┊💦ฺ࣭࣪͘ꕸ▸ _No digas eso papu_
║┊💦ฺ࣭࣪͘ꕸ▸ _A nadie le importa_
║┊💦ฺ࣭࣪͘ꕸ▸ _Fiesta del admin_
║┊💦ฺ࣭࣪͘ꕸ▸ _Fiesta del administrador_ 
║┊💦ฺ࣭࣪͘ꕸ▸ _Vivan los novios_
║┊💦ฺ࣭࣪͘ꕸ▸ _Feliz cumpleaños_
║┊💦ฺ࣭࣪͘ꕸ▸ _Noche de paz_
║┊💦ฺ࣭࣪͘ꕸ▸ _Buenos dias_
║┊💦ฺ࣭࣪͘ꕸ▸ _Buenos tardes_
║┊💦ฺ࣭࣪͘ꕸ▸ _Buenos noches_
║┊💦ฺ࣭࣪͘ꕸ▸ _Audio hentai_
║┊💦ฺ࣭࣪͘ꕸ▸ _Chica lgante_
║┊💦ฺ࣭࣪͘ꕸ▸ _Feliz navidad_
║┊💦ฺ࣭࣪͘ꕸ▸ _Vete a la vrg_
║┊💦ฺ࣭࣪͘ꕸ▸ _Pasa pack Bot_
║┊💦ฺ࣭࣪͘ꕸ▸ _Atencion grupo_
║┊💦ฺ࣭࣪͘ꕸ▸ _Marica quien_
║┊💦ฺ࣭࣪͘ꕸ▸ _Murio el grupo_
║┊💦ฺ࣭࣪͘ꕸ▸ _Oh me vengo_
║┊💦ฺ࣭࣪͘ꕸ▸ _tio que rico_
║┊💦ฺ࣭࣪͘ꕸ▸ _Viernes_
║┊💦ฺ࣭࣪͘ꕸ▸ _Baneado_
║┊💦ฺ࣭࣪͘ꕸ▸ _Sexo_
║┊💦ฺ࣭࣪͘ꕸ▸ _Hola_
║┊💦ฺ࣭࣪͘ꕸ▸ _Un pato_
║┊💦ฺ࣭࣪͘ꕸ▸ _Nyanpasu_
║┊💦ฺ࣭࣪͘ꕸ▸ _Te amo_
║┊💦ฺ࣭࣪͘ꕸ▸ _Yamete_
║┊💦ฺ࣭࣪͘ꕸ▸ _Bañate_
║┊💦ฺ࣭࣪͘ꕸ▸ _Es puto_
║┊💦ฺ࣭࣪͘ꕸ▸ _La biblia_
║┊💦ฺ࣭࣪͘ꕸ▸ _Onichan_
║┊💦ฺ࣭࣪͘ꕸ▸ _Mierda de Bot_
║┊💦ฺ࣭࣪͘ꕸ▸ _Siuuu_
║┊💦ฺ࣭࣪͘ꕸ▸ _Epico_
║┊💦ฺ࣭࣪͘ꕸ▸ _Shitpost_
║┊💦ฺ࣭࣪͘ꕸ▸ _Rawr_
║┊💦ฺ࣭࣪͘ꕸ▸ _UwU_
║┊💦ฺ࣭࣪͘ꕸ▸ _:c_
║┊💦ฺ࣭࣪͘ꕸ▸ _a_
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
    conn.reply(m.chat, '*⚠️ ERROR ⚠️: Ocurrio un error inespersdo, puede demorarse un poco mas.*', m);
  }
};
handler.command = /^(menu2|audios|menú2|memu2|menuaudio|menuaudios|memuaudios|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
