const handler = async (m, { conn }) => {
    const user = global.db.data.users[m.sender];
        conn.sendMessage(m.chat, {text: `*❮✅❯➜ 𝙃𝙤𝙡𝙖 𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖/𝙎𝙪𝙗𝘾𝙧𝙚𝙖𝙙𝙤𝙧(𝙖): @${m.sender.split('@')[0]} 𝙖𝙝𝙤𝙧𝙖 𝙩𝙪𝙨 𝙧𝙚𝙘𝙪𝙧𝙨𝙤𝙨 𝙨𝙤𝙣 𝙞𝙡𝙞𝙢𝙞𝙩𝙖𝙙𝙤𝙨. 😘✨👑.*`, mentions: [m.sender]}, {quoted: m});
      global.db.data.users[m.sender].money = Infinity;
    global.db.data.users[m.sender].limit = Infinity;
  global.db.data.users[m.sender].level = Infinity;
 global.db.data.users[m.sender].exp = Infinity;
};
handler.help = ['cheat'];
handler.tags = ['owner'];
handler.command = /^(ilimitado|infiniy|chetar)$/i;
handler.rowner = true;
handler.fail = null;
export default handler;
