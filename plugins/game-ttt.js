import TicTacToe from '../lib/tictactoe.js';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  conn.game = conn.game ? conn.game : {};
  if (Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*❮🤖❯➤ Aun estas en un juego con alguien.*';
  if (!text) throw `*❮🤖❯➤ Para comenzar se requiere poner nombre a la sala del juego.*\n\n*❮🍁❯➤ Por ejemplo:*\n*➤ ${usedPrefix + command} nueva sala*`;
  let room = Object.values(conn.game).find((room) => room.state === 'WAITING' && (text ? room.name === text : true));
  if (room) {
    await m.reply('*❮🎉❯➤ Inicia el juego, un/a jugador/a entro al juego.*');
    room.o = m.chat;
    room.game.playerO = m.sender;
    room.state = 'PLAYING';
    const arr = room.game.render().map((v) => {
      return {
        X: '❎',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
      }[v];
    });
    const str = `
*❮🎲 TRES EN RAYA 🎳❯*

❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

*Turno de @${room.game.currentTurn.split('@')[0]} ahora.*
`.trim();
    if (room.x !== room.o) await conn.sendMessage(room.x, {text: str, mentions: this.parseMention(str)}, {quoted: m});
    await conn.sendMessage(room.o, {text: str, mentions: conn.parseMention(str)}, {quoted: m});
  } else {
    room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING'};
    if (text) room.name = text;
    const imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`;
    conn.reply(m.chat, `*❮🎲 TRES EN RAYA 🎳❯*\n\n*❮🎉❯➤ Esperando al/la segundo/a jugador/a.*\n*➤ Para dejar de jugar y salirse de la partida, usen en el comando: ${usedPrefix}delttt*\n\n❮🛡️❯➤ Para unirse a la partidad puede escribir: (${usedPrefix + command} ${text})`, m);
    // conn.sendButton(m.chat, `*❮🎲 TRES EN RAYA 🎳❯*\n\n*❮🎉❯➤ Esperando al/la segundo/a ganador/a.*\n*➤ Para dejar de jugar y salirse de la partida, usen el comando: ${usedPrefix}delttt*`, wm, imgplay, [['🎳 Unirse a la partida 🎳', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
    conn.game[room.id] = room;
  }
};
handler.command = /^(tictactoe|ttc|ttt|xo)$/i;
export default handler;
