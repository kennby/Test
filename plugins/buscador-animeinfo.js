import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*❮😍❯➤ Por favor, ingresa el titulo/nombre del anime que quiera buscar.*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
╴ ╴ ╴ ╴ ╴ ╴ ╴❀ ╴ ╴ ╴ ╴ ╴ ╴ 
• Sea bienvenido/a usuario/a
──────────────────
•⛩️ Anime info - Bot ⛩️
──────────────────

❮😍❯➤ *𝚃𝙸𝚃𝚄𝙻𝙾/𝙽𝙾𝙼𝙱𝚁𝙴:*
❒➣ ${result.title}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮🔥❯➤ *𝙵𝙾𝚁𝙼𝙰𝚃𝙾:*
❒➣ ${result.type}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮⚡❯➤ *𝙴𝚂𝚃𝙰𝙳𝙾:*
❒➣ ${result.status.toUpperCase().replace(/\_/g, ' ')}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮💗❯➤ *𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝙴𝙿𝙸𝚂𝙾𝙳𝙸𝙾𝚂:*
❒➣ ${result.episodes}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮⏳❯➤ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:*
❒➣ ${result.duration}*

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮💜❯➤ *𝙱𝙰𝚂𝙰𝙳𝙾 𝙴𝙽:*
❒➣ ${result.source.toUpperCase()}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮💎❯➤ *𝙴𝙽𝚃𝚁𝙴𝙽𝙰𝙳𝙾:*
❒➣ ${result.aired.from}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮🎊❯➤ *𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾:*
❒➣ ${result.aired.to}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮💖❯➤ *𝙿𝙾𝙿𝚄𝙻𝙰𝚁𝙸𝙳𝙰𝙳:*
❒➣ ${result.popularity}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮💙❯➤ *𝙵𝙰𝚅𝙾𝚁𝙸𝚃𝙾𝚂:*
❒➣ ${result.favorites}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮✅❯➤ *𝙲𝙰𝙻𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽:*
❒➣ ${result.rating}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮🚀❯➤ *𝚁𝙰𝙽𝙶𝙾:*
❒➣ ${result.rank}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮😍❯➤ *𝚃𝚁𝙰𝙸𝙻𝙴𝚁/𝚂:*
❒➣ ${result.trailer.url}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮⬇️❯➤ *𝙴𝙽𝙻𝙰𝙲𝙴/𝚄𝚁𝙻:*
❒➣ ${result.url}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮🌆❯➤ *𝙱𝙰𝙲𝙺𝙶𝚁𝙾𝚄𝙽𝙳:*
❒➣ ${resultes.text}

⊱╌╌╌❀╌╌╌❀╌╌╌❀╌╌╌⊰

❮🍀❯➤ *𝚁𝙸𝙽𝙶𝙺𝙰𝚂𝙰𝙽:*
❒➣ ${resultes2.text}

──────────────────
👑 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 👑
──────────────────`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*❮⛔ ERROR/FALLO ⛔❯*\n*• Ocurrio un error inesperado, por favor intente nuevamente, verifique que el nombre este bien escrito, o si el comando no funciona muchas veces, reporta este comando con el codigo: #reporte*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
