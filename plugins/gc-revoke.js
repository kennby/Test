/* Creditos a https://github.com/ALBERTO9883 */

const handler = async (m, {conn}) => {
  const revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `❬✅❭➢ *_Se restableció exitosamente el enlace del grupo._*\n\n*❬😻❭➢ Nuevo enlace del grupo: ${'https://chat.whatsapp.com/' + revoke}`, m);
};
handler.command = ['resetlink', 'revoke'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;
