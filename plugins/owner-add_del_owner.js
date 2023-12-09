const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  const why = `*❮💖❯➤ El uso del comando es incorrecto.*\n\n*❮🍀❯➤ Aqui te dejo un ejemplo de uso valido:*\n*❮🍀❯➤ ${usedPrefix + command} @${m.sender.split('@')[0]}*\n*❮🍀❯➤ ${usedPrefix + command} ${m.sender.split('@')[0]}*\n*❮🍀❯➤ ${usedPrefix + command} <mensaje citado>*`;
  const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;
  if (!who) return conn.reply(m.chat, why, m, {mentions: [m.sender]});
  switch (command) {
    case 'addowner':
      const nuevoNumero = who;
      global.owner.push([nuevoNumero]);
      await conn.reply(m.chat, '*❮🔥❯➤ Se ha agregado el nuevo numero a la lista de owners exitosamente.*', m);
      break;
    case 'delowner':
      const numeroAEliminar = who;
      const index = global.owner.findIndex(owner => owner[0] === numeroAEliminar);
      if (index !== -1) {
        global.owner.splice(index, 1);
        await conn.reply(m.chat, '*❮🍀❯➤ El numero fue eliminado con exito a la lista de owners.*', m);
      } else {
        await conn.reply(m.chat, '*❮🛡️❯➤ El numero ingresado, no se encuentra en la lista de owners, por favor verifiquelo...*', m);
      }
      break;
  }
};
handler.command = /^(addowner|delowner)$/i;
handler.rowner = true;
export default handler;
