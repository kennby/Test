import Presence from '@whiskeysockets/baileys';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw `*❬😍❭➢ Por favor, para cambiar el nombre del grupo, ingrese cualquier nombre para cambiarlo en este grupo.*`;
  try {
    const text = args.join` `;
    if (!args || !args[0]) {
    } else {
      conn.groupUpdateSubject(m.chat, text);
    }
  } catch (e) {
    throw '*❬🍁❭➢ Por favor, el nombre del grupo no debe de tener mas de 100 carácteres, intente nuevamente pero que no pase sobre los 100 caracteres.*';
  }
};
handler.help = ['setname <text>'];
handler.tags = ['group'];
handler.command = /^(setname)$/i;
handler.group = true;
handler.admin = true;
export default handler;
