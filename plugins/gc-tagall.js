const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const img = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
  const pesan = args.join` `;
  const oi = `*Mensaje:* ${pesan}`;
  let teks = `*╭≫ ─◊─⚚─◊─ ≪•◦ 🥏 ◦•≫ ─◊─⚚─◊─ ≪╮*\n*╏🍁     ¡INVOCANDO EL GRUPO!     🍁*\n*╰≫ ─◊─⚚─◊─ ≪•◦ 🥏 ◦•≫ ─◊─⚚─◊─ ≪╯*\n\n❮🎉❯➤ ${oi}\n\n*╔◊┄┄❒┅┅❬🍁 Tagall 🍁❭┅┅❒┄┄◊╗*\n`;
  for (const mem of participants) {
    teks += `╟❬👤❭➮ @${mem.id.split('@')[0]}\n`;
  }
  teks += `╚◊┄┄❒┅┅❬🍁 Tagall 🍁❭┅┅❒┄┄◊╝\n\n*╭≫ ─◊─⚚─◊─ ≪•◦ 🥏 ◦•≫ ─◊─⚚─◊─ ≪╮*\n*╏🍁     ¡INVOCANDO EL GRUPO!     🍁*\n*╰≫ ─◊─⚚─◊─ ≪•◦ 🥏 ◦•≫ ─◊─⚚─◊─ ≪╯*\n${wm}`;
  conn.sendMessage(m.chat, {text: teks, url: img, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
