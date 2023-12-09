import ws from 'ws';
const handler = async (m, {conn, usedPrefix, text}) => {
  if (conn.user.jid !== global.conn.user.jid) throw false;
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn.user.jid)])];
  const cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m;
  const teks = text ? text : cc.text;
  const content = conn.cMod(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : '*💞 𝐃𝐈𝐅𝐔𝐍𝐒𝐈𝐎𝐍 𝐌𝐈𝐓𝐒𝐔𝐑𝐈-𝐁𝐎𝐓 💞*\n\n' + teks);
  for (const id of users) {
    await delay(1500);
    await conn.copyNForward(id, content, true);
  }
  conn.reply(m.chat, `*❮🎀❯➤ 𝙻𝚊 𝚍𝚒𝚏𝚞𝚗𝚜𝚒𝚘𝚗 𝚑𝚊 𝚜𝚒𝚍𝚘 𝚎𝚗𝚟𝚒𝚊𝚍𝚊 𝚊 𝚕𝚘𝚜 ${users.length} 𝚂𝚞𝚋𝙱𝚘𝚝𝚜*
    
  ${users.map((v) => '❮🎀❯➤ wa.me/' + v.replace(/[^0-9]/g, '') + `?text=${encodeURIComponent(usedPrefix)}estado\n\n💞 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 - 𝗕𝗼𝘁 - 𝗠𝗗 💞`).join('\n')}
  \n*Se finalizo con el envió en ${users.length * 1.5} segundos aproximadamente*`.trim(), m);
};
handler.command = /^bcbot$/i;
handler.rowner = true;
handler.mods = false;
handler.premium = false;
handler.group = false;
handler.private = false;

handler.admin = false;
handler.botAdmin = false;

handler.fail = null;

export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

const delay = (time) => new Promise((res) => setTimeout(res, time));
