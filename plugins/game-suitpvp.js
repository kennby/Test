const timeout = 60000;
const poin = 500;
const poin_lose = -100;
const poin_bot = 200;
const handler = async (m, {conn, usedPrefix, text}) => {
  conn.suit = conn.suit ? conn.suit : {};
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw '*❲🍁 ERROR 🍁❳➤ por favor, termina tu partida para iniciar otra psrtida.*';
  const textquien = `*❲🍁❳➤ Para desafiar a alguien en Suitpvp, etiqueta a una persona.*\n\n*❲💖❳➤ Por ejemplo:*\n${usedPrefix}suit @${global.suittag}`;
  if (!m.mentionedJid[0]) return m.reply(textquien, m.chat, {mentions: conn.parseMention(textquien)});
  if (Object.values(conn.suit).find((room) => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `*❲💖❳➤ La persona que usted etiqueto esta jugando una partida con otro/a usuario, por favor espere a que terminen el juego.*`;
  const id = 'suit_' + new Date() * 1;
  const caption = `*❲💞 Piedra / Papel / Tijera 💞❳*\n\n*❲😍❳➤ El/La usuario/a @${m.sender.split`@`[0]} desafia a: @${m.mentionedJid[0].split`@`[0]} en un pvp de piedra, papel, y tijera.*\n\n*❲🛡️❳➤ Escriba "aceptar" para aceptar el desafio.*\n\n*❲🛡️❳➤ Escriba "rechazar" para rechazar el desafio.*\n\nrespondiendo al mensaje...`;
  const imgplaygame = `https://www.merca2.es/wp-content/uploads/2020/05/Piedra-papel-o-tijera-0003318_1584-825x259.jpeg`;
  conn.suit[id] = {
    chat: await conn.sendMessage(m.chat, {text: caption}, {mentions: await conn.parseMention(caption)}),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `❲⏳❳➤ El jugador no presento un "aceptar" ni un "rechazar", se acabo el tiempo, el juego se cancela.`, m);

      delete conn.suit[id];
    }, timeout), poin, poin_lose, poin_bot, timeout,
  };
};
handler.command = /^pvp|suit(pvp)?$/i;
handler.group = true;
handler.game = true;
export default handler;
