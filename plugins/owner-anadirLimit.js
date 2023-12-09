import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, {conn, text}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*❮🧧❯➤ Por favor, etiqueta a un/a usuario/a para añadir 3 diamantes.*';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*❮😍❯➤ Por favor ingrese la cantidad de diamantes que quiera añadir al al usuario/a*\n\n*❮🍀❯➤ Por ejemplo:*\n#dardiamantes @tag 3';
  if (isNaN(txt)) throw '*❮🍀❯➤ Simbolo no admitido, solo se admite numeros.*';
  const dmt = parseInt(txt);
  let limit = dmt;
  const pjk = Math.ceil(dmt * pajak);
  limit += pjk;
  if (limit < 5) throw '*❮❤️❯➤ El numero limite para añadir diamantes es: 5*';
  const users = global.db.data.users;
  users[who].limit += dmt;
  m.reply(`*❮💎 AÑADIDO EXITOSAMENTE 💎❯:*

╭━━━━━━✦❤️✦━━━━━━╮
┊ *💎 Total diamantes:*
┊ ${dmt}
╰━━━━━━✦❤️✦━━━━━━╯`);
};
handler.command = ['añadirdiamantes', 'addd', 'dard', 'dardiamantes'];
handler.rowner = true;
export default handler;
