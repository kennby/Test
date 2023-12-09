const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*❮❤️❯➤ No se encontro ningun prefijo en la lista de prefijos, por favor intente con otro prefijo que tal vez este en la lists, por ejemplo:* ${usedPrefix + command} /`;
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
  await m.reply(`*❮💝❯➤ El prefijo actual del Bot se establecio a ${text}*`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
