import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*❮🍀❯➤ Por favor responda a una nota de voz, o un video para convertirlo en formato audio/mp3.*`;
  const media = await q.download();
  if (!media) throw '*❮⛔ ERROR / FALLO ⛔❯:*\n\n*• Ocurrio un error inesperado al convertir el video en formato audio/mp3, por favor intente nuevamente.*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*❮⛔ ERROR / FALLO ⛔❯:*\n\n* Ocurrio un error inesperado al convertir la nota de voz en formato audio/mp3, por favor intente nuevamente.*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
