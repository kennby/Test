import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*❮😍 INFORMACIÓN 😍❯:*\n\n*• Por favor, responda a un imagen, o video, para convertirlo en un enlace.*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(`*❮✅ CONVERSIÓN EXITOSA ✅❯:*\n\n*😍 Se convirtio el contenido a enlace!!*\n\n❲⬇️❳➢ *_Enlace/URL:_*\n➢ ${link}\n\n❲💞❳➢ *_Nombre del bot:_*\n${global.wm}`);
};
handler.help = ['tourl <reply image>'];
handler.tags = ['sticker'];
handler.command = /^(upload|tourl)$/i;
export default handler;
