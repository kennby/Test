import {tmpdir} from 'os';
import path, {join} from 'path';
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch,
} from 'fs';
const handler = async (m, {conn, usedPrefix: _p, __dirname, args}) => {
  conn.reply(m.chat, '*❮✅❯➜ 𝙇𝙤𝙨 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙙𝙚 𝙡𝙖 𝙘𝙖𝙧𝙥𝙚𝙩𝙖 𝙏𝙈𝙋, 𝙛𝙪𝙚𝙧𝙤𝙣 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨 𝙚𝙭𝙞𝙩𝙤𝙨𝙖𝙢𝙚𝙣𝙩𝙚!*', m);

  const tmp = [tmpdir(), join(__dirname, '../tmp')];
  const filename = [];
  tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
  return filename.map((file) => {
    const stats = statSync(file);
    unlinkSync(file);
  });
};
handler.help = ['cleartmp'];
handler.tags = ['owner'];
handler.command = /^(cleartmp|cleartemp)$/i;
handler.rowner = true;
export default handler;
