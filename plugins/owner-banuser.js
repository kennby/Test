    const handler = async (m, {conn, participants, usedPrefix, command}) => {
  const BANtext = `*❮💎❯➤ Por favor etiquete a un/a usuario/a para banearlo.*\n\n*❮👑❯➤ Por ejemplo:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, {mentions: conn.parseMention(BANtext)});
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*❮😻❯➤ El usuario fue baneado exitosamente.*\n*❮😻❯➤ El/La usuario/a no podra usar el bot ni el bot contestara los comandos, hasta que lo desbaneen.*');
};
handler.command = /^banuser$/i;
handler.rowner = true;
export default handler;
