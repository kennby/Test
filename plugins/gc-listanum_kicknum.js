/*              Codigo Creado Por Bruno Sobrino
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD)
*/

const handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {
  if (!args[0]) return m.reply(`*❮🎉❯➤ Por favor, ingresa prefijo del pais para este comando, por ejemplo: ${usedPrefix + command} 51*`);
  if (isNaN(args[0])) return m.reply(`*❮💞❯➤ Por favor, ingresa el numero de pais, para buscar a esos numeros en este grupo, por ejemplo: ${usedPrefix + command} 54*`);
  const lol = args[0].replace(/[+]/g, '');
  const ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (ps == '') return m.reply(`*❮🍁❯➤ En este grupo no hay ningun numero con el prefijo y número: +${lol}*`);
  const numeros = ps.map((v)=> '👤➤ @' + v.replace(/@.+/, ''));
  const delay = (time) => new Promise((res)=>setTimeout(res, time));
  switch (command) {
    case 'listanum': case 'listnum':
      conn.reply(m.chat, `*❮✅❯➤ Lista de numeros con el numero: +${lol} que estan en este grupo:*\n\n` + numeros.join`\n`, m, {mentions: ps});
      break;
    case 'kicknum':
      if (!bot.restrict) return m.reply('*❮🛡️❯➤ La creadora no tiene activado el restric (#enable restrict), contacte con el para que active el comando y así podras usar el comando.*');
      if (!isBotAdmin) return m.reply('*❮🍁❯➤ El bot no es admin en este grupo, no puede eliminar a las personas.*');
      conn.reply(m.chat, `*❮😻❯➤ Iniciando la eliminacion, de los numeros: +${lol}, cada 10 segundos, se eliminará un usuario.*`, m);
      const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
      const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
      for (const user of users) {
        const error = `❮👑❯➤ El/La usuario/a: @${user.split('@')[0]} ya fue eliminado o simplemente salio del grupo.*`;
        if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
          await delay(2000);
          const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)});
          await delay(10000);
        } else return m.reply('*❮⛔ ERROR INESPERADO ⛔❯*');
      }
      break;
  }
};
handler.command = /^(listanum|kicknum|listnum)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;
