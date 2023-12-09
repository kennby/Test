const handler = async (m, {conn, text}) => {
  if (!text) throw '*❮😍❯➤ Para desbanear al usuario, favir de etiquetarlo para desbanearlo.*';
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*❮😍❯➤ Para desbanear al usuario, favir de etiquetarlo para desbanearlo.';
  const users = global.db.data.users;
  users[who].banned = false;
  conn.reply(m.chat, `*❮✅❯➤ El/La usuario/a fue desbaneado/a con exito*\n*❮😍❯➤ El usuario ya puede usar 💜 MITSURI BOT MD 💜*`, m);
};
handler.help = ['unbanuser'];
handler.tags = ['owner'];
handler.command = /^unbanuser$/i;
handler.rowner = true;
export default handler;
