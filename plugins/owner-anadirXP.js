import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*❮🍁❯➣ Por favor etiquete a un/a usuario/a para añadir exp.*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*❮🍁❯➣ Por favor ingrese la cantidad de experiencia que desea añadir.*';
  if (isNaN(txt)) throw '*❮🍁❯➣ No se admiten símbolos, solo se admiten numeros.*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 500) throw '*❮🍁❯➣ El numero limite de experiencia para añadir al usuario/a es: 500*';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`*❮💖 AÑADIDO EXITOSAMENTE 💖❯:*

╭━━━━━━✦🌠✦━━━━━━╮
┊ *🌟 Total experiencia:*
┊ ${xp}
╰━━━━━━✦🌠✦━━━━━━╯`);
};
handler.command = ['añadirxp', 'addexp'];
handler.rowner = true;
export default handler;
