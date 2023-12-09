import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
  function convertirMsADiasHorasMinutosSegundos(ms) {
  var segundos = Math.floor(ms / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var días = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  var resultado = "";
  if (días !== 0) {
    resultado += días + " días, ";
  }
  if (horas !== 0) {
    resultado += horas + " horas, ";
  }
  if (minutos !== 0) {
    resultado += minutos + " minutos, ";
  }
  if (segundos !== 0) {
    resultado += segundos + " segundos";
  }

  return resultado;
}

  const message = users.map((v, index) => `*• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •\n${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •\n*❮🎀❯➤ 𝗟𝗜𝗡𝗞:* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •\n*❮🍀❯➤ 𝗡𝗢𝗠𝗕𝗥𝗘:* ${v.user.name || '-'}\n• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •\n*❮🌍❯➤ 𝗧𝗜𝗘𝗠𝗣𝗢 𝗔𝗖𝗧𝗜𝗩𝗢:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}\n• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •`).join('\n\n');
  const replyMessage = message.length === 0 ? '*𖥨ํ∘̥⃟⸽⃟💌➣ Por el momento no hay SubBots intente nuevamente mas tarde.*\n\n*PUEDE SER POR ESTOS MOTIVOS:*\n\n*𖥨ํ∘̥⃟⸽⃟💌➣ Puede que todabia nadie a usado SubBot en este bot, lo cual no hay SubBots disponibles.*\n*𖥨ํ∘̥⃟⸽⃟💌➣ Puede que esten en soporte o eliminaron session en el bot, lo cual no hay SubBots disponibles.*' : message;
  const totalUsers = users.length;
  const responseMessage = `
*𖥨ํ∘̥⃟⸽⃟💌➣ 𝐀𝐐𝐔𝐈 𝐓𝐈𝐄𝐍𝐄𝐒 𝐋𝐀 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐒𝐔𝐁𝐁𝐎𝐓𝐒 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 𝐀𝐂𝐓𝐈𝐕𝐎𝐒 💞*

*𖥨ํ∘̥⃟⸽⃟💌➣ 𝐒𝐄 𝐋𝐄𝐒 𝐏𝐔𝐄𝐃𝐄 𝐂𝐎𝐍𝐓𝐀𝐂𝐓𝐀𝐑 𝐏𝐀𝐑𝐀 𝐔𝐍𝐈𝐑𝐋𝐎𝐒 𝐀 𝐔𝐍 𝐆𝐑𝐔𝐏𝐎, (𝐀𝐆𝐋𝐀𝐑𝐀𝐃𝐎 𝐐𝐔𝐄 𝐍𝐎 𝐒𝐄𝐀 𝐔𝐍 𝐆𝐑𝐔𝐏𝐎 𝐃𝐄 𝐗𝐗𝐗 𝐎 𝐏𝐀𝐑𝐀 𝐍𝐎 𝐂𝐔𝐌𝐏𝐋𝐈𝐑 𝐋𝐀𝐒 𝐍𝐎𝐑𝐌𝐀𝐒 𝐃𝐄𝐋 𝐁𝐎𝐓) 💗*

*𖥨ํ∘̥⃟⸽⃟💌➣ 🌻 𝐌𝐈𝐓𝐒𝐔𝐑𝐈-𝐁𝐎𝐓-𝐌𝐃 🌻: 𝙌𝙪𝙚𝙙𝙖 𝙚𝙣 𝙘𝙡𝙖𝙧𝙤 𝙦𝙪𝙚 𝙡𝙤𝙨 𝙨𝙪𝙗𝙗𝙤𝙩𝙨 𝙣𝙤 𝙨𝙚 𝙝𝙖𝙧𝙖𝙣 𝙧𝙚𝙨𝙥𝙤𝙣𝙨𝙖𝙗𝙡𝙚𝙨 𝙙𝙚𝙡 𝙢𝙖𝙡 𝙪𝙨𝙤 𝙦𝙪𝙚 𝙨𝙚 𝙡𝙚 𝙙𝙚 𝙖𝙡 𝙗𝙤𝙩, 𝙚𝙨𝙤 𝙥𝙖𝙨𝙖 𝙥𝙖𝙧𝙖 𝙖𝙦𝙪𝙚𝙡𝙡𝙤𝙨 𝙪𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙦𝙪𝙚 𝙣𝙤 𝙘𝙪𝙢𝙥𝙡𝙚𝙣 𝙘𝙤𝙣 𝙡𝙖𝙨 𝙣𝙤𝙧𝙢𝙖𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩. 🔥*

*𖥨ํ∘̥⃟⸽⃟💌➣ 𝐒𝐔𝐁𝐁𝐎𝐓𝐒 𝐀𝐂𝐓𝐈𝐕𝐎𝐒:* ${totalUsers || '0'} 💦*

🌍 ${replyMessage.trim()}`.trim();

  await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;
