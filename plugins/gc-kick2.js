const handler = async (m, {conn, participants, usedPrefix, command}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*❮😻❯➤ La creadora tiene restringido el: (enable restrict  disable restrict) del uso de este comando.*';
  const kicktext = `*❮💦❯➤ Por favor, responda el mensaje de la persona o etiquete a la persona para eliminarlo del grupo.*\n\n*❮🍁❯➤ Por ejemplo:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.mentionedJid.includes(conn.user.jid)) return;
  const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  const owr = m.chat.split`-`[0];
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
};
handler.command = /^(kick2|echar2|hechar2|sacar2)$/i;
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
export default handler;
