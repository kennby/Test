import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '*❮🍀❯➤ Responda a un sticker para cambiar el nombre.*';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '*❮🍀❯➤ Responda a un sticker para cambiar el nombre.*';
    const img = await m.quoted.download();
    if (!img) throw '*❮🍀❯➤ Responda a un sticker para cambiar el nombre.*';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '*❮💜❯➤ Ocurrio un error inesperado, recuerde responder a un sticker para cambiar el nombre y autor, si sale error nuevamente, reporte este comando con el codigo: #reporte*';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|robar|wm$/i;
export default handler;
