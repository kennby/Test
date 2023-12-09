const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
╒╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╕
╎    *_👑 BALANCE 👑_*
╞╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╡
╎❮👑❯➢ *Nombre/User:*
├❒➢ ${name}
╎
╎❮💎❯➢ *Diamantes:*
├❒➢ ${global.db.data.users[who].limit}💎
╘╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╛
*INFORMACIÓN:* 
*_Puedes comprar diamantes con estos comandos a continuación:_*

❮💰❯➢ *${usedPrefix}buy (cantidad)*
_Elegir cantidad de diamantes, ejemplo: .buy 5_

❮🏆❯➢ *${usedPrefix}buyall*
_Generar diamantes de forma automática._`);
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
