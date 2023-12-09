const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
    // conn.readMessages([m.key])
    await m.reply('*❮⏳ Reiniciando el bot.. ⏳❯*\n\n*❮😘❯➣ Espere un momento para volver a usar el Bot, puede tomar unos minutos.*');
    process.send('reset');
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;
export default handler;
