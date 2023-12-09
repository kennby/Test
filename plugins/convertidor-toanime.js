import uploadImage from '../lib/uploadImage.js';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  if (!/image/g.test(mime)) throw '*❲👑❳➤ Por favor, responda o etiquete a una imagen para procesar.*';
  m.reply('*❲✅ 𝗖𝗢𝗡𝗩𝗜𝗥𝗧𝗜𝗘𝗡𝗗𝗢 / 𝗧𝗢𝗔𝗡𝗜𝗠𝗘 ✅❳*\n\n❲⏳❳➤ 𝚂𝚎 𝚎𝚜𝚝𝚊 𝚌𝚘𝚖𝚟𝚒𝚛𝚝𝚒𝚎𝚗𝚍𝚘 𝚕𝚊 𝚒𝚖𝚊𝚐𝚎𝚗 𝚎𝚗 𝚊𝚗𝚒𝚖𝚎, 𝚙𝚘𝚛 𝚏𝚊𝚟𝚘𝚛 𝚎𝚜𝚙𝚎𝚛𝚎 𝚞𝚗 𝚖𝚘𝚖𝚎𝚗𝚝𝚘...\n\n*💜 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 💜*');
  const data = await q.download?.();
  const image = await uploadImage(data);
  try {
    const anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`;
    await conn.sendFile(m.chat, anime, 'error.jpg', null, m);
  } catch (i) {
    try {
      const anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`;
      await conn.sendFile(m.chat, anime2, 'error.jpg', null, m);
    } catch (a) {
      try {
        const anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`;
        await conn.sendFile(m.chat, anime3, 'error.jpg', null, m);
      } catch (e) {
        throw '*❲⛔ 𝐄𝐑𝐑𝐎𝐑 / 𝐅𝐀𝐋𝐋𝐎 ⛔❳\n\nPor favor verifique que la imagen sea visible en el rostro de la persona para convertirlo a anime.*';
      }
    }
  }
};
handler.help = ['toanime'];
handler.tags = ['tools'];
handler.command = /^(jadianime|toanime)$/i;
export default handler;
