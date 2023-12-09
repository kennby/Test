import uploadImage from '../lib/uploadImage.js';
import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*❮👑❯➣ Por favor, responda o envie una imagen para este comando.*';
  const img = await q.download?.();
  const url = await uploadImage(img);
  const anu = await fetch(`https://api.lolhuman.xyz/api/read-qr?apikey=${lolkeysapi}&img=${url}`);
  const json = await anu.json();
  await m.reply(`*❮🛡️❯➣ Se realizo con exito, el texto del codigo QR es:* ${json.result}`);
};
handler.command = /^(readqr)$/i;
export default handler;
