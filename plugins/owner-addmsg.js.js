const handler = async (m, {command, usedPrefix, text}) => {
  const M = m.constructor;
  const which = command.replace(/agregar/i, '');
  if (!m.quoted) throw '*❮🍁 INFO 🍁❯➤* Por fabor, responde a un mensaje/texto, imagen, etc, y use una palabra cono clave.';
  if (!text) throw `*❮🍀❯➤ Para ver la lista, usar: *${usedPrefix}list${which}* para ver la lista de mensajes.`;
  const msgs = global.db.data.msgs;
  if (text in msgs) throw `*❮😍❯➤ El '${text}' se ha registrado en la lista de mensajes exitosamente.*`;
  msgs[text] = M.toObject(await m.getQuotedObj());
  m.reply(`*❮🥵❯➤ Mensaje guardado exitosamente a la lista de mensajes como: '${text}'*\n\n*❮😍❯➤ Para ver escribe: ${usedPrefix}ver${which} ${text}*`);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'add' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
