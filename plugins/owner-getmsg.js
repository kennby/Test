const handler = async (m, {conn, command, usedPrefix, text}) => {
  const which = command.replace(/ver/i, '');
  if (!text) throw `*❮✅❯➜ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙪𝙨𝙖𝙧: *${usedPrefix}list${which}* 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖. 💖*`;
  const msgs = global.db.data.msgs;
  if (!text in msgs) throw `*❮⛔❯➜ 𝙀𝙡 '${text}' 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙚𝙣 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨. 💖*`;
  const _m = await conn.serializeM(msgs[text]);
  await _m.copyNForward(m.chat, true);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'get' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^ver(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
