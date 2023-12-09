import {pinterest} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*❲💦❳➢ Ejemplo para usar este comando: ${usedPrefix + command} Minecraft*`;
  const json = await pinterest(text);
  conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `
*❲🍁❳➢ AQUI ESTA TU BUSQUEDA ✨*

❲💦❳➢ *Nombre del bot:*
◊➤ ${global.wm}

❲💌❳➢ *Tu busqueda:*
◊➤ ${text}

❲🍀❳➢ Numero de asistencia:
*Support GuardianBot-MD*
◊➤ https://wa.me/5493873452654


💖 𝙼𝚒𝚝𝚜𝚞𝚛𝚒 - 𝙱𝚘𝚝 - 𝙼𝙳 💖`.trim(), m);
};
handler.help = ['pinterest <keyword>'];
handler.tags = ['internet'];
handler.command = /^(pinterest)$/i;
export default handler;
