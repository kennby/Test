const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // Switch Case Like :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
❮👑❯➤ *El comando no es correcto.*

*Ejemplo de uso:*

*Para abrir el grupo:*
❮✅❯➤ *${usedPrefix + command} abrir*

*Para cerrar el grupo:*
❮⛔❯➤ *${usedPrefix + command} cerrar*
`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  {m.reply('*❮✅ Grupo configurado ✅❯*');}
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(group|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
