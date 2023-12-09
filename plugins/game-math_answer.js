global.math = global.math ? global.math : {};
const handler = async (m, {conn}) => {
  const id = m.chat;
  if (!m.quoted) return;
  if (m.quoted.sender != conn.user.jid) return;
  if (!/^𝙲𝚄𝙰𝙽𝚃𝙾 𝙴𝚂 𝙴𝙻 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴/i.test(m.quoted.text)) return;
  if (!(m.chat in global.math)) return conn.reply(m.chat, `*❮💜❯➣ 𝗬𝗮 𝘀𝗲 𝗵𝗮 𝗿𝗲𝘀𝗽𝗼𝗻𝗱𝗶𝗱𝗼 𝗲𝘀𝗮 𝗽𝗿𝗲𝗴𝘂𝗻𝘁𝗮 𝗷𝗷𝗷*`, m);
  // conn.sendButton(m.chat, '*❮💜❯➣ 𝗬𝗮 𝘀𝗲 𝗵𝗮 𝗿𝗲𝘀𝗽𝗼𝗻𝗱𝗶𝗱𝗼 𝗲𝘀𝗮 𝗽𝗿𝗲𝗴𝘂𝗻𝘁𝗮 𝗷𝗷𝗷*', author, null, [['😍 𝗩𝗼𝗹𝘃𝗲𝗿 𝗮 𝗷𝘂𝗴𝗮𝗿 😍', '/mates']], m)
  if (m.quoted.id == global.math[id][0].id) {
    const math = global.math[id][1];
    if (m.text == math.result) {
      conn.reply(m.chat, `*😍 𝗥𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮 𝗖𝗼𝗿𝗿𝗲𝗰𝘁𝗮 ✨*\n*𝗵𝗮𝘀 𝗴𝗮𝗻𝗮𝗱𝗼: ${math.bonus} 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮 😍*`, m);
      // conn.sendButton(m.chat, `*😍 𝗥𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮 𝗖𝗼𝗿𝗿𝗲𝗰𝘁𝗮 ✨*\n*𝗵𝗮𝘀 𝗴𝗮𝗻𝗮𝗱𝗼: ${math.bonus} 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮 😍*`, author, null, [['😍 𝗩𝗼𝗹𝘃𝗲𝗿 𝗮 𝗷𝘂𝗴𝗮𝗿 😍', `/math ${math.mode}`]], m)
      global.db.data.users[m.sender].exp += math.bonus;
      clearTimeout(global.math[id][3]);
      delete global.math[id];
    } else {
      if (--global.math[id][2] == 0) {
        conn.reply(m.chat, `*🤨 𝗦𝗲 𝗮𝗰𝗮𝗯𝗮𝗿𝗼𝗻 𝘁𝘂𝘀 𝗼𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝗱𝗮𝗱𝗲𝘀.*\n*𝗹𝗮 𝗿𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮 𝗲𝗿𝗮: ${math.result} 😍*`, m);
        // conn.sendButton(m.chat, `*🤨 𝗦𝗲 𝗮𝗰𝗮𝗯𝗮𝗿𝗼𝗻 𝘁𝘂𝘀 𝗼𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝗱𝗮𝗱𝗲𝘀.*\n*𝗹𝗮 𝗿𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮 𝗲𝗿𝗮: ${math.result} 😍*`, author, null, [['😍 𝗩𝗼𝗹𝘃𝗲𝗿 𝗮 𝗷𝘂𝗴𝗮𝗿 😍', `/math ${math.mode}`]], m)
        clearTimeout(global.math[id][3]);
        delete global.math[id];
      } else conn.reply(m.chat, `*😂 𝗥𝗲𝘀𝗽𝘂𝗲𝘀𝘁𝗮 𝗶𝗻𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗮.*\n*𝗮𝘂𝗻 𝗱𝗶𝘀𝗽𝗼𝗻𝗶𝗯𝗹𝗲𝘀 ${global.math[id][2]} 𝗼𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝗱𝗮𝗱/𝗲𝘀*`, m);
    }
  }
};
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/;
handler.command = new RegExp;
export default handler;
