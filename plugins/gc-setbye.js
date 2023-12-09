const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text;
    m.reply('*❬👋🏻 SETBYE CONFIGURADO 👋🏻❭*\n\n_❬😻❭➢ Se configuro la despedida de este grupo exitosamente_');
  } else throw `*❬🍁 USO CORRECTO 🍁❭:*\n\n_❬🎉❭➢ Por favor, ingrese cualquier texto que quiera agregar para la despedida cuando un usuario salga del grupo._\n\n*❬😍❭➢ Para mensionar al usuario que ha salido del grupo, use este texto: @user*`;
};
handler.help = ['setbye <text>'];
handler.tags = ['group'];
handler.command = ['setbye'];
handler.admin = true;
export default handler;
