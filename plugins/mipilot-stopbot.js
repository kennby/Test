import fs from "fs"
async function handler(m, {conn, usedPrefix}) {
   if (conn.user.jid == global.conn.user.jid) return m.reply(`*💞 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙰𝙿𝙰𝙶𝙰𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻...*`)
   m.reply(`*🎀 𝗗𝗲𝗷𝗮𝗿𝗮𝘀 𝗱𝗲 𝘀𝗲𝗿 𝗦𝘂𝗯𝗕𝗼𝘁 𝗲𝗻 5 𝗺𝗶𝗻𝘂𝘁𝗼𝘀 / 💦 𝙼𝚒𝚝𝚜𝚞𝚛𝚒 - 𝙱𝚘𝚝 - 𝙼𝙳 💦...*`)
   conn.fstop = true
   conn.ws.close()
}
handler.command = handler.help = ['stop', 'byebot'];
handler.tags = ['jadibot'];
handler.owner = true
export default handler; 
