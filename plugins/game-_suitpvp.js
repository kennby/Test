const handler = (m) => m;
handler.before = async function(m) {
  this.suit = this.suit ? this.suit : {};
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0;
  const room = Object.values(this.suit).find((room) => room.id && room.status && [room.p, room.p2].includes(m.sender));
  if (room) {
    let win = '';
    let tie = false;
    if (m.sender == room.p2 && /^(acc(ept)?|terima|aceptar|gas|aceptare?|nao|gamau|rechazar|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(tolak|gamau|rechazar|ga(k.)?bisa)/i.test(m.text)) {
        const textno = `*❮🤨❯➤ 𝗘𝗹/𝗟𝗮 𝗨𝘀𝘂𝗮𝗿𝗶𝗼/𝗮 @${room.p2.split`@`[0]} 𝗿𝗲𝗰𝗵𝗮𝘇𝗼 𝗲𝗹 𝗣𝗩𝗣, 𝗲𝗹 𝗷𝘂𝗲𝗴𝗼 𝘀𝗲 𝗰𝗮𝗻𝗰𝗲𝗹𝗮.*`;
        m.reply(textno, null, {mentions: this.parseMention(textno)});
        delete this.suit[room.id];
        return !0;
      }
      room.status = 'play';
      room.asal = m.chat;
      clearTimeout(room.waktu);
      const textplay = `🏙️───────────────✧\n│ 🍁•°𝙐𝙨𝙚𝙧𝙨•\n│ ┆ 💖•°𝙋𝙑𝙋 / 𝘽𝙤𝙩•\n🏙️───────────────✧\n\n❮😍❯➤ 𝙀𝙡 𝙟𝙪𝙚𝙜𝙤 𝙘𝙤𝙢𝙞𝙚𝙣𝙯𝙖, 𝙡𝙖𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙚𝙨 𝙝𝙖𝙣 𝙨𝙞𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙙𝙤𝙨 𝙖 𝙡𝙤𝙨 𝙙𝙤𝙨 𝙘𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨 𝙙𝙚 𝙡𝙤𝙨 𝙅𝙪𝙜𝙖𝙙𝙤𝙧𝙚𝙨 ✨✨\n\n𝙅𝙪𝙜𝙖𝙙𝙤𝙧 1:\n@${room.p.split`@`[0]}\n\n𝙅𝙪𝙜𝙖𝙙𝙤𝙧 2:\n@${room.p2.split`@`[0]}\n\n*_Elijan las opciones en el chat pribado del bot, despues de elegir, entrar nuevamente al grupo para ver los resultados 😍_*\n\n*💜 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 💜*`;
      m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)});
      const comienzop = `┏┉┅━━━━━━⊕━━━━━━┅┉┓
┃😍 HOLA USUARIO/A 😍
┃
┃𝙲𝚘𝚖𝚎𝚗𝚌𝚎𝚖𝚘𝚜 𝚌𝚘𝚗 𝚎𝚕 𝚓𝚞𝚎𝚐𝚘 ✨
┗┉┅━━━━━━⊕━━━━━━┅┉┛

❮💖❯➤ *_Por favor, seleccione una de las opciones que se encuentran abajo ✨_*

➜ piedra
➜ papel
➜ tijera


❮👑❯➤ *El ganador se lleva:*
+${room.poin} de experiencia!!

❮🥀❯➤ *El perdedor se lleva:*
${room.poin_lose} de experiencia!!


*❮💖❯➤ Reponde al mensaje con la opcion que desea poner*
*Por ejemplo: tijera*`;
      const comienzop2 = `┏┉┅━━━━━━⊕━━━━━━┅┉┓
┃😍 HOLA USUARIO/A 😍
┃
┃𝙲𝚘𝚖𝚎𝚗𝚌𝚎𝚖𝚘𝚜 𝚌𝚘𝚗 𝚎𝚕 𝚓𝚞𝚎𝚐𝚘 ✨
┗┉┅━━━━━━⊕━━━━━━┅┉┛

❮💖❯➤ *_Por favor, seleccione una de las opciones que se encuentran abajo ✨_*

➜ piedra
➜ papel
➜ tijera


❮👑❯➤ *El ganador se lleva:*
+${room.poin} de experiencia!!

❮🥀❯➤ *El perdedor se lleva:*
${room.poin_lose} de experiencia!!


*❮💖❯➤ Reponde al mensaje con la opcion que desea poner*
*Por ejemplo: tijera*`;

      if (!room.pilih) this.sendMessage(room.p, {text: comienzop}, {quoted: m});
      if (!room.pilih2) this.sendMessage(room.p2, {text: comienzop2}, {quoted: m});
      room.waktu_milih = setTimeout(() => {
        const iniciativa = `❮💔❯➤ 𝙉𝙞𝙣𝙜𝙪𝙣 𝙟𝙪𝙜𝙖𝙙𝙤𝙧 𝙖 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙡𝙖𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚𝙡 𝙟𝙪𝙚𝙜𝙤, 𝙨𝙚 𝙘𝙖𝙣𝙘𝙚𝙡𝙖 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤.`;
        if (!room.pilih && !room.pilih2) this.sendMessage(m.chat, {text: iniciativa}, {quoted: m});
        else if (!room.pilih || !room.pilih2) {
          win = !room.pilih ? room.p2 : room.p;
          const textnull = `*❮💖❯➤ @${(room.pilih ? room.p2 : room.p).split`@`[0]} 𝙉𝙤 𝙚𝙡𝙚𝙜𝙞𝙨𝙩𝙚 𝙣𝙞𝙣𝙜𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣 𝙙𝙚𝙡 𝙟𝙪𝙚𝙜𝙤, 𝙨𝙚 𝙩𝙚𝙧𝙢𝙞𝙣𝙖 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙥𝙤𝙧 𝙖𝙦𝙪𝙞.*`;
          this.sendMessage(m.chat, {text: textnull}, {quoted: m}, {mentions: this.parseMention(textnull)});
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
          db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose;
        }
        delete this.suit[room.id];
        return !0;
      }, room.timeout);
    }
    const jwb = m.sender == room.p;
    const jwb2 = m.sender == room.p2;
    const g = /tijera/i;
    const b = /piedra/i;
    const k = /papel/i;
    const reg = /^(tijera|piedra|papel)/i;
    if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
      room.pilih = reg.exec(m.text.toLowerCase())[0];
      room.text = m.text;
      m.reply(`*❮✅❯➤ 𝙃𝙖𝙨 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 ${m.text}, 𝙧𝙚𝙜𝙧𝙚𝙨𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 ${room.pilih2 ? `𝙧𝙚𝙫𝙞𝙨𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.*` : '𝙚𝙨𝙥𝙚𝙧𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.*'}`);
      if (!room.pilih2) this.reply(room.p2, '*❮💖❯➤ 𝙀𝙡 𝙤𝙥𝙤𝙣𝙚𝙣𝙩𝙚 𝙖 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣, 𝙚𝙨 𝙩𝙪 𝙩𝙪𝙧𝙣𝙤 𝙙𝙚 𝙚𝙡𝙚𝙜𝙞𝙧!!!*', 0);
    }
    if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
      room.pilih2 = reg.exec(m.text.toLowerCase())[0];
      room.text2 = m.text;
      m.reply(`*❮✅❯➤ 𝙃𝙖𝙨 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 ${m.text}, 𝙧𝙚𝙜𝙧𝙚𝙨𝙖 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 ${room.pilih ? `𝙧𝙚𝙫𝙞𝙨𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.*` : '𝙚𝙨𝙥𝙚𝙧𝙖 𝙡𝙤𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤𝙨.*'}`);
      if (!room.pilih) this.reply(room.p, '*❮💖❯➤ 𝙀𝙡 𝙤𝙥𝙤𝙣𝙚𝙣𝙩𝙚 𝙖 𝙚𝙡𝙚𝙜𝙞𝙙𝙤 𝙪𝙣𝙖 𝙤𝙥𝙘𝙞𝙤𝙣, 𝙚𝙨 𝙩𝙪 𝙩𝙪𝙧𝙣𝙤 𝙙𝙚 𝙚𝙡𝙚𝙜𝙞𝙧!!!*', 0);
    }
    const stage = room.pilih;
    const stage2 = room.pilih2;
    if (room.pilih && room.pilih2) {
      clearTimeout(room.waktu_milih);
      if (b.test(stage) && g.test(stage2)) win = room.p;
      else if (b.test(stage) && k.test(stage2)) win = room.p2;
      else if (g.test(stage) && k.test(stage2)) win = room.p;
      else if (g.test(stage) && b.test(stage2)) win = room.p2;
      else if (k.test(stage) && b.test(stage2)) win = room.p;
      else if (k.test(stage) && g.test(stage2)) win = room.p2;
      else if (stage == stage2) tie = true;
      this.reply(room.asal, `
*❮😍 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 𝘿𝙀𝙇 𝙅𝙐𝙀𝙂𝙊 😍❯
*${tie ? '\n*𝑬𝑴𝑷𝑨𝑻𝑬!!*' : ''}
*@${room.p.split`@`[0]} (${room.text})* ${tie ? '' : room.p == win ? ` *😍 𝙂𝙖𝙣𝙤 +${room.poin} 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖*` : ` *💔 𝙋𝙚𝙧𝙙𝙞𝙤 ${room.poin_lose} 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖.*`}
*@${room.p2.split`@`[0]} (${room.text2})* ${tie ? '' : room.p2 == win ? ` *😍 𝙂𝙖𝙣𝙤 +${room.poin} 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖*` : ` *💔 𝙋𝙚𝙧𝙙𝙞𝙤 ${room.poin_lose} 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖.*`}
`.trim(), m, {mentions: [room.p, room.p2]} );
      if (!tie) {
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin;
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin_bot;
        db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose;
      }
      delete this.suit[room.id];
    }
  }
  return !0;
};
handler.exp = 0;
export default handler;
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
