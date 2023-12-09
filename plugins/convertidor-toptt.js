import {toPTT} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (m.quoted ? m.quoted : m.msg).mimetype || '';
  if (!/video|audio/.test(mime)) throw `*❮👑 INFORMACIÓN 👑❯:*\n\n*• Por favor, responda a un video o audio/mp3 para convertirlo en Nota de voz*`;
  const media = await q.download?.();
  if (!media && !/video/.test(mime)) throw '*❮⛔ ERROR / FALLO ⛔❯:*\n\n*• Ocurrio un error al descargar su video, por favor intente nuevamente, y si el error continúa, reporte a este comando con el codigo: #reporte*';
  if (!media && !/audio/.test(mime)) throw '*❮⛔ ERROR / FALLO ⛔❯:*\n\n*• Ocurrio un error al descargar su audio, por favor intente nuevamente, y si el error continúa, reporte a este comando con el código: #reporte*';
  const audio = await toPTT(media, 'mp4');
  if (!audio.data && !/audio/.test(mime)) throw '*❮⛔ ERROR / FALLO ⛔❯:*\n\n*• Ocurrió un error al convertir su audio/mp3 a Nota de voz, por favor intente nuevamente, y si continúa el error, reporte a este comando con el codigo: #reporte*';
  if (!audio.data && !/video/.test(mime)) throw '*❮⛔ ERROR / FALLO ⛔❯:*\n\n*• Ocurrió un error al convertir su video a Nota de voz, por favor intente nuevamente, y si continúa el error, reporte a este comando con el codigo: #reporte*';
  const aa = conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, {mimetype: 'audio/mpeg'});
  if (!aa) return conn.sendMessage(m.chat, {audio: {url: media}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
};
handler.help = ['tovn (reply)'];
handler.tags = ['audio'];
handler.command = /^to(vn|(ptt)?)$/i;
export default handler;
