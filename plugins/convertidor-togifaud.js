const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*❮🍀❯➣ Por favor, responda un video para convertirlo en un gif con audio.*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*❮🍁❯➣ El tipo de archivo: ${mime} es erroneo, por favor responda a un video para convertirlo en gif con audio.*`;
  m.reply(global.wait);
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*❮🍀 EXITO / TODO CORRECTO 🍀❯*\n\n❒➤ *Video transformado con exito*\n\n❲💦❳➣ *Nombre bot:*\n❒➤ 💞 Mitsuri Bot MD 💞\n\n❲🔥❳➣ *Asistencia Bot:*\n❒➤ https://wa.me/5493873452654?text=%20Hola,%20necesito%20contactar%20con%20soporte%20*GuardianBot-MD*%20lo%20antes%20posible.%20De%20ante%20mano,%20espero%20tu%20respuesta%20pacientemente\n\n💞 Mitsuri - Bot - MD 💞'}, {quoted: m});
};
handler.command = ['togifaud'];
export default handler;
