import {toDataURL} from 'qrcode';
const handler = async (m, {text, conn}) => {
  if (!text) throw `*❮😍❯➣ Por favor, ingrese el texto que quiera convertirlo en codigo QR.*`;
  conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), {scale: 8}), 'qrcode.png', '¯\\_(ツ)_/¯', m);
};
handler.help = ['', 'code'].map((v) => 'qr' + v + ' <teks>');
handler.tags = ['tools'];
handler.command = /^qr(code)?$/i;
export default handler;
