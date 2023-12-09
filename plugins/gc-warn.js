const handler = async (m, {conn, text, command, usedPrefix}) => {
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const pp = './src/warn.jpg';
  let who;
  if (m.isGroup) {
    who = m.mentionedJid[0] ?
      m.mentionedJid[0] :
      m.quoted ?
      m.quoted.sender :
      text;
  } else who = m.chat;
  const user = global.db.data.users[who];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const dReason = 'Sin motivo';
  const msgtext = text || dReason;
  const sdms = msgtext.replace(/@\d+-?\d* /g, '');
  const warntext = `*❬🍁❭➤ Por favor, responda el mensaje del usuario, o etiqueta al usuario para advertirle una advertencia.*\n\n*❬👑❭➤ Por ejemplo:*\n*${
    usedPrefix + command
  } @${global.suittag}*`;
  if (!who) {
    throw m.reply(warntext, m.chat, {mentions: conn.parseMention(warntext)});
  }
  user.warn += 1;
  await m.reply(
      `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `*@${who.split`@`[0]}*`
      } Ha recibido una advertencia en este mismo grupo.!\nMotivo: ${sdms}\n*❬⚠️ Advertencias ⚠️❭➤ ${
        user.warn
      }/3*`,
      null,
      {mentions: [who]},
  );
  if (user.warn >= 3) {
    if (!bot.restrict) {
      return m.reply(
          '*❬🛡️❭➤ La propietaria no tiene activado el #restric, por favor contacte con la propietaria para que lo habilité.*',
      );
    }
    user.warn = 0;
    await m.reply(
        `❬⚠️❭➤ Usted fue advertido varias veces!!\n*@${
          who.split`@`[0]
        }* Superaste las *3* advertencias, ahora seras eliminado/a de este grupo 😒`,
        null,
        {mentions: [who]},
    );
    await conn.groupParticipantsUpdate(m.chat, [who], 'remove');
  }
  return !1;
};

handler.command = /^(advertir|advertencia|warn|warning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
