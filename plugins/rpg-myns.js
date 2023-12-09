import {createHash} from 'crypto';
const handler = async function(m, {conn, text, usedPrefix}) {
  const sn = createHash('md5').update(m.sender).digest('hex');
  m.reply(`
╔╍═╍═╍═❬👑 ID USER 👑❭═╍═╍═╍╗
╎*Hola usuario/a:*
╎🧧 ¿Olvidaste tu numero de serie?
╎
╎aqui lo tienes 😍
╎
╎ ${sn} ✅
╚╍═╍═╍═❬👑 ID USER 👑❭═╍═╍═╍╝`.trim());
};
handler.help = ['myns'];
handler.tags = ['xp'];
handler.command = /^(myns|ceksn)$/i;
handler.register = true;
export default handler;
