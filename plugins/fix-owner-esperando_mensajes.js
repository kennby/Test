/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*𖥨ํ∘̥⃟⸽⃟🍀➤ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙪𝙩𝙞𝙡𝙞𝙯𝙖 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙚𝙣 𝙚𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙥𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 𝙙𝙚𝙡 𝘽𝙤𝙩.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: '*𖥨ํ∘̥⃟⸽⃟💝➤ 𝙄𝙣𝙞𝙘𝙞𝙖𝙧 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙘𝙞𝙤𝙣 𝙙𝙚 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙢𝙚𝙣𝙤𝙨 𝙚𝙡: creds.json.*'}, {quoted: m});
  const sessionPath = './MitsuriSession/';
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: '*𖥨ํ∘̥⃟⸽⃟💖➤ 𝙇𝙖 𝙘𝙖𝙧𝙥𝙚𝙩𝙖 MitsuriSession 𝙣𝙤 𝙚𝙭𝙞𝙨𝙩𝙚 𝙤 𝙚𝙨𝙩𝙖𝙧𝙖 𝙫𝙖𝙘𝙞𝙖.*'}, {quoted: m});
    }
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*𖥨ํ∘̥⃟⸽⃟✨➤ 𝙉𝙤 𝙨𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙤 𝙣𝙞𝙣𝙜𝙪𝙣 𝙖𝙧𝙘𝙝𝙞𝙫𝙤 𝙥𝙖𝙧𝙖 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙚𝙣 𝙡𝙖 𝙘𝙖𝙧𝙥𝙚𝙩𝙖 MitsuriSession.*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*𖥨ํ∘̥⃟⸽⃟💜➤ 𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧𝙤𝙣: ${filesDeleted} 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨, 𝙢𝙚𝙣𝙤𝙨 𝙚𝙡: creds.json.*`}, {quoted: m});
    }
  } catch (err) {
    console.error('𝙀𝙍𝙍𝙊𝙍 𝘼𝙇 𝙇𝙀𝙀𝙍 𝙇𝘼 𝘾𝘼𝙍𝙋𝙀𝙏𝘼..:', err);
    await conn.sendMessage(m.chat, {text: '*𖥨ํ∘̥⃟⸽⃟💦➤ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤 𝙖𝙡 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙡𝙤𝙨 𝙖𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙚𝙣 𝙡𝙖 𝙘𝙖𝙧𝙥𝙚𝙩𝙖 𝙨𝙚𝙨𝙞𝙤𝙣.*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*𖥨ํ∘̥⃟⸽⃟🍀➤ 𝙃𝙤𝙡𝙞𝙨𝙨𝙨𝙨𝙨*\n\n*𖥨ํ∘̥⃟⸽⃟🍀➤ 𝙎𝙞 𝙚𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚 𝙖 𝙩𝙪𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙝𝙖𝙜𝙖 𝙪𝙣 𝙥𝙚𝙦𝙪𝙚𝙣̃𝙤 𝙨𝙥𝙖𝙢.*\n\n*𖥨ํ∘̥⃟⸽⃟💖➤ 𝙋𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:*\n${usedPrefix}play\n${usedPrefix}play\n${usedPrefix}play`}, {quoted: m});
};
handler.help = ['del_reg_in_session_owner'];
handler.tags = ['owner'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession)$/i;
handler.rowner = true
export default handler;
