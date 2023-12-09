const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*❮😍❯➣ Este chat fue baneado con éxito.*\n\n*❮🍁❯➣ El/La usuario/a baneado/a el bot no le respondera los comandos hasta que lo desbaneen del bot.*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
