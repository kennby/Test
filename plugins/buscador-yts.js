import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, {conn, text}) => {
  if (!text) throw '𖥨ํ∘̥⃟⸽⃟💝➤ *_¿𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙱𝚄𝚂𝙲𝙰𝚁 𝙴𝙽 𝚈𝙾𝚄𝚃𝚄𝙱𝙴?_*';
  const results = await yts(text);
  const tes = results.all;
  const teks = results.all.map((v) => {
    switch (v.type) {
      case 'video': return `

𖥨ํ∘̥⃟⸽⃟😍➤ *𝚃𝙸𝚃𝚄𝙻𝙾/𝙽𝙾𝙼𝙱𝚁𝙴:*
❒➢ *_${v.title}_*

𖥨ํ∘̥⃟⸽⃟⬇️➤ *𝙴𝙽𝙻𝙰𝙲𝙴/𝚄𝚁𝙻:* 
❒➢ ${v.url}

𖥨ํ∘̥⃟⸽⃟⏳➤ *𝚃𝙸𝙴𝙽𝙿𝙾/𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:*
❒➢ ${v.timestamp}

𖥨ํ∘̥⃟⸽⃟🏙️➤ *𝚂𝚄𝙱𝙸𝙳𝙾 𝙴𝙽:*
❒➢ ${v.ago}

𖥨ํ∘̥⃟⸽⃟👀➤ *𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝚅𝙸𝚂𝚃𝙰𝚂:*
❒➢ ${v.views}

*💜 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 💜*`;
    }
  }).filter((v) => v).join('\n\n⊱┄┄┄┄┄┄┄┄┄┄✿┄┄┄┄┄┄┄┄┄┄⊰\n\n');
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m);
};
handler.help = ['ytsearch *<texto>*'];
handler.tags = ['search'];
handler.command = ['ytsearch', 'yts'];
export default handler;
