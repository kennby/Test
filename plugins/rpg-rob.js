const ro = 5000;
const handler = async (m, {conn, usedPrefix, command}) => {
  const time = global.db.data.users[m.sender].lastrob + 7200000;
  if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*'꩖͜͡ꦿꦼ🔥 Alto ahi viejo/a sabroso/a, espere durante: ${msToTime(time - new Date())} para volver a robar, te vas a volver color marron si sigues robando mijo/a :v (bait)*`;
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  if (!who) throw `*❮💘❯ Por favor etiqueta a alguien para robarle su exp >:)*`;
  if (!(who in global.db.data.users)) throw `*❮😨❯ El usuario no se encuentra en la base de datos del bot, no podemos robarle si no esta en la base.*\nobliguemoslo a que se registre (modo malvada)`;
  const users = global.db.data.users[who];
  const rob = Math.floor(Math.random() * ro);
  if (users.exp < rob) return m.reply(`❮👸❯ El/la usuario/a @${who.split`@`[0]} tiene menos de *${ro} experiencia. jaja*\nNo le robemos, apenas tiene para subir un nivel jaja 😍`, null, {mentions: [who]});
  global.db.data.users[m.sender].exp += rob;
  global.db.data.users[who].exp -= rob;
  m.reply(`*'꩖͜͡ꦿꦼ💘 Robaste ${rob} de experiencia al usuario/a @${who.split`@`[0]}*\n\n*Consejo:*\n_Robar te cambia el color de piel a color marron poco a poco_\n\n( Bait :v )`, null, {mentions: [who]});
  global.db.data.users[m.sender].lastrob = new Date * 1;
};
handler.help = ['rob'];
handler.tags = ['econ'];
handler.command = ['robar', 'rob'];
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return hours + ' Hora(s) ' + minutes + ' Minuto(s)';
}
