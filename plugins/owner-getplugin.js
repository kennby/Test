import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
import fs from 'fs';
const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isROwner, usedPrefix, command, text}) => {
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v) => v.replace('.js', ''));
  if (!text) throw `*❮😻❯➤ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙖𝙡𝙜𝙪𝙣 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 (𝙥𝙡𝙪𝙜𝙞𝙣𝙨) 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙩𝙚 𝙚𝙣 𝙚𝙡 𝙗𝙤𝙩.*\n\n*𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤*\n*❮🛡️❯➤ ${usedPrefix + command}* info-infobot\n\n*❮😘❯➤ 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 (𝙥𝙡𝙪𝙜𝙞𝙣𝙨) 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙩𝙚𝙨:*\n*💖* ${ar1.map((v) => ' ' + v).join`\n*💖*`}`;
  if (!ar1.includes(text)) return m.reply(`*❮🥀❯➤ 𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙤 𝙙𝙞𝙘𝙝𝙤 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 (𝙥𝙡𝙪𝙜𝙞𝙣𝙨) 𝙡𝙡𝙖𝙢𝙖𝙙𝙤: "${text}", 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙪𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙩𝙚.*\n\n*┄┄┄┅┅┅════════════┅┅┅┄┄┄*\n\n*❮😘❯➤ 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 (𝙥𝙡𝙪𝙜𝙞𝙣𝙨) 𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙩𝙚𝙨:*\n*💖* ${ar1.map((v) => ' ' + v).join`\n*💖*`}`);
  let o;
  try {
    o = await exec('cat plugins/' + text + '.js');
  } catch (e) {
    o = e;
  } finally {
    const {stdout, stderr} = o;
    if (stdout.trim()) {
      const aa = await conn.sendMessage(m.chat, {text: stdout}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa});
    }
    if (stderr.trim()) {
      const aa2 = await conn.sendMessage(m.chat, {text: stderr}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa2});
    }
  }
};
handler.help = ['getplugin'].map((v) => v + ' *<nombre>*');
handler.tags = ['owner'];
handler.command = /^(getplugin|gp)$/i;
handler.rowner = true;
export default handler;
