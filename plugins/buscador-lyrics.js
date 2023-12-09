import {find_lyrics} from '@brandond/findthelyrics';
import {getTracks} from '@green-code/music-track-data';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
  if (!teks) throw `*❲🎊❳➤ para usar este comando correctamente, es de esta forma, por ejemplo: ${usedPrefix + command} beret ojala*`;
  try {
    const result = await getTracks(teks);
    const lyrics = await find_lyrics(`${result[0].artist} ${result[0].title}`);
    const res = await fetch(global.API('https://some-random-api.com', '/lyrics', {title: result[0].artist + result[0].title}));
    const json = await res.json();
    let img;
    try {
      img = result.album.artwork;
    } catch {
      try {
        img = json.thumbnail.genius;
      } catch {
        const bochil = await googleImage(`${result[0].artist} ${result[0].title}`);
        img = await bochil.getRandom();
      }
    }
    const textoLetra = `*╔═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╗*\n  ᬊ᭄ঔৣ͜͡ீ͜❥͜🎆 𝙻𝚈𝚁𝙸𝙲𝚂 𝙱𝙾𝚃 🎆ू ፝͜❥ᬊ᭄\n*╚═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╝*\n\n𖥨ํ∘̥⃟⸽⃟😍➤ 𝐓𝐈𝐓𝐔𝐋𝐎:\n❒➮ *${result[0].title || ''}*\n\n𖥨ํ∘̥⃟⸽⃟👑➤ 𝐀𝐔𝐓𝐎𝐑/𝐀:\n❒➮ *${result[0].artist || ''}*\n\n𖥨ํ∘̥⃟⸽⃟🌆➤ 𝐋𝐄𝐓𝐑𝐀:\n❒➮ ${lyrics || ''}\n\n*╔═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╗*\n  ᬊ᭄ঔৣ͜͡ீ͜❥͜🎆 𝙻𝚈𝚁𝙸𝙲𝚂 𝙱𝙾𝚃 🎆ू ፝͜❥ᬊ᭄\n*╚═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╝*`;
    await conn.sendMessage(m.chat, {image: {url: img}, caption: textoLetra}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: {url: result[0].preview}, fileName: `${result[0].artist} ${result[0].title}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
  } catch {
    throw `*❲⛔❳➤ ERROR, POR FAVOR INTENTE NUEVAMENTE, Y SI EL COMANDO SIGUE SIN FUNCIONAR, REPORTE ESTE COMANDO CON EL CODIGO: #reporte*`;
  }
};
handler.help = ['lirik', 'letra'].map((v) => v + ' <Apa>');
handler.tags = ['internet'];
handler.command = /^(lirik|lyrics|lyric|letra)$/i;
export default handler;
