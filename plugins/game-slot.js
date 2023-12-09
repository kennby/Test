/* CREDITOS A https://github.com/FG98F */

const handler = async (m, {args, usedPrefix, command}) => {
  const fa = `
❮💖❯➜ *Por favor ingresa la cantidad que deseas aportar :3* 

❮🌿❯➜ *Por ejemplo:*
*${usedPrefix + command} 100*`.trim();
  if (!args[0]) throw fa;
  if (isNaN(args[0])) throw fa;
  const apuesta = parseInt(args[0]);
  const users = global.db.data.users[m.sender];
  const time = users.lastslot + 10000;
  if (new Date - users.lastslot < 10000) throw `*❮👑❯➜ Espere ${msToTime(time - new Date())} para volver a apostar uwu*`;
  if (apuesta < 200) throw '*❮💖❯➜ Lo minimo que tienes que apostar son 100 de experiencia.*';
  if (users.exp < apuesta) {
    throw `*❮💖❯➜ No tienes suficientes EXP, por favor ve a jugar algunos juegos RPG en el bot o interactuar con el bot para ganar mas experiencia.*`;
  }
  const emojis = ['🐋', '🐉', '🕊️'];
  let a = Math.floor(Math.random() * emojis.length);
  let b = Math.floor(Math.random() * emojis.length);
  let c = Math.floor(Math.random() * emojis.length);
  const x = [];
  const y = [];
  const z = [];
  for (let i = 0; i < 3; i++) {
    x[i] = emojis[a];
    a++;
    if (a == emojis.length) a = 0;
  }
  for (let i = 0; i < 3; i++) {
    y[i] = emojis[b];
    b++;
    if (b == emojis.length) b = 0;
  }
  for (let i = 0; i < 3; i++) {
    z[i] = emojis[c];
    c++;
    if (c == emojis.length) c = 0;
  }
  let end;
  if (a == b && b == c) {
    end = `*╏❮🥳❯➜ Ganaste la cantidad de:*\n*╏ +${apuesta + apuesta} de experiencia!!*`;
    users.exp += apuesta;
  } else if (a == b || a == c || b == c) {
    end = `*╏❮😘❯➜ Casi lo logras, sigue intentando.*\n*╏❮💖❯➜ Toma +10 de experiencia.*`;
    users.exp += 50;
  } else {
    end = `*╏❮💀❯➜ Perdiste, ahora tienes:\n╏ -${apuesta} de experiencia.*`;
    users.exp -= apuesta;
  }
  users.lastslot = new Date * 1;
  return await m.reply(
      `
╔•──•──•─⎚─•──•──•╗
╏ 🥳 𝐒𝐋𝐎𝐓𝐒 | 𝐁𝐎𝐓 🥳 
╠•──•─┬•─⎚─•┬─•──•╣
╏ ${x[0]}    ${y[0]}    ${z[0]}
╠•──•─┼•─⎚─•┼─•──•╣
╏ ${x[1]}    ${y[1]}    ${z[1]}
╠•──•─┼•─⎚─•┼─•──•╣
╏ ${x[2]}    ${y[2]}    ${z[2]}
╠•──•─┴•─⎚─•┴─•──•╣
${end}
╚•──•──•─⎚─•──•──•╝`);
};
handler.help = ['slot <apuesta>'];
handler.tags = ['game'];
handler.command = ['slot'];
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m ' + seconds + ' s ';
}

