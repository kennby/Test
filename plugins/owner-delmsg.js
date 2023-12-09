const handler = async (m, {command, usedPrefix, text}) => {
  const which = command.replace(/eliminar/i, '');
  if (!text) throw `*❮💖❯➜ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙪𝙨𝙖𝙧: ${usedPrefix}list${which} 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖. 💖*`;
  const msgs = global.db.data.msgs;
  if (!text in msgs) throw `*❮⛔❯➜ 𝙀𝙡 '${text}' 𝙣𝙤 𝙚𝙨𝙩𝙖 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙖𝙙𝙤 𝙚𝙣 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨. 💖*`;
  delete msgs[text];
  m.reply(`*❮✅❯➜ 𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙤 𝙚𝙭𝙞𝙩𝙤𝙨𝙖𝙢𝙚𝙣𝙩𝙚 𝙚𝙣 𝙡𝙖 𝙡𝙞𝙨𝙩𝙖 𝙙𝙚 𝙢𝙚𝙣𝙨𝙖𝙟𝙚, 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙘𝙤𝙣 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚: '${text}'*`);
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'del' + v + ' <text>');
handler.tags = ['database'];
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/;
handler.rowner = true;
export default handler;
