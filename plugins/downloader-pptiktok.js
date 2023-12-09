import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*❮💖❯➤ Por favor ingrese el nombre de usuario del tiktoker para descargar la foto de perfil.*';
  const res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
  conn.sendFile(m.chat, res, 'error.jpg', `*❮✅ EXITO / TODO CORRECTO ✅❯*\n*❮💖❯➤ Aqui tienes la foto de perfil.!!*\n*❮🌻❯➤ Usuario TikTok: ${text}*`, m, false);
};
handler.help = ['tiktokfoto'].map((v) => v + ' <username>');
handler.tags = ['downloader'];
handler.command = /^(tiktokfoto|pptiktok)$/i;
export default handler;
