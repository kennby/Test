const handler = async (m, {conn, args}) => {
  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('*❬💦 DESCRIPCIÓN CONFIGURADA 💦❭*\n\n_❬😍❭➢ La descripción se ha configurado exitosamente, mira en el perfil del grupo para ver la descripción._');
};
handler.help = ['Setdesc <text>'];
handler.tags = ['group'];
handler.command = /^setdesk|setdesc$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
