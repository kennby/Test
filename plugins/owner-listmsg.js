const handler = (m) => {
  const msgs = global.db.data.msgs;
  m.reply(`
*⋆⁺˖⸙̭◊➣ Lista de textos, claves 👑*

*🍀 Mensajes 🍀*
${Object.keys(msgs).map((v) => '*⋆⁺˖⸙̭💖➣ ' + v).join('*\n*')}*
`.trim());
};
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map((v) => 'list' + v);
handler.tags = ['database'];
handler.command = /^lista(vn|msg|video|audio|img|sticker)$/;
export default handler;
