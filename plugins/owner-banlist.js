const handler = async (m, {conn, isOwner}) => {
  const chats = Object.entries(global.db.data.chats).filter((chat) => chat[1].isBanned);
  const users = Object.entries(global.db.data.users).filter((user) => user[1].banned);
  const caption = `
╔━━━━━┉┉┉❲🥏❳┉┉┉━━━━━╗
┃🛡️ 𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜(𝚊𝚜) 𝚋𝚊𝚗𝚎𝚊𝚍𝚘𝚜
╠━━━━━┉┉┉❲🛡️❳┉┉┉━━━━━╣
┠𝐓𝐎𝐓𝐀𝐋: ${users.length} ${users ? '\n' + users.map(([jid], i) => `
┠❒➢ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '┠❒➢'}
┃🍁 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 🍁
╚━━━━━┉┉┉❲👑❳┉┉┉━━━━━╝


╔━━━━━┉┉┉❲🥏❳┉┉┉━━━━━╗
┃🛡️ 𝙲𝚑𝚊𝚝(𝚜) 𝚋𝚊𝚗𝚎𝚊𝚍𝚘𝚜
╠━━━━━┉┉┉❲🍁❳┉┉┉━━━━━╣
┠𝐓𝐎𝐓𝐀𝐋: ${chats.length} ${chats ? '\n' + chats.map(([jid], i) => `
┠❒➢ ${isOwner ? '@' + jid.split`@`[0] : jid}`.trim()).join('\n') : '┠❒➢'}
┃✨ 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 ✨
╚━━━━━┉┉┉❲👑❳┉┉┉━━━━━╝
`.trim();
  m.reply(caption, null, {mentions: conn.parseMention(caption)});
};
handler.command = /^banlist(ned)?|ban(ned)?list|daftarban(ned)?$/i;
handler.rowner = true;
export default handler;
