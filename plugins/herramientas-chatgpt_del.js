const handler = async (m, {usedPrefix}) => {
  try {
    delete global.chatgpt.data.users[m.sender];
    m.reply(`*❬✅❭➤ Se elimino exitosamente el historial entre tu y ChatGPT*\n\n*❬😀❭➤ Recuerde usar este comando cuando haya un error en el comando: ${usedPrefix}chatgpt2 O ${usedPrefix}ia2*`);
  } catch (error1) {
    console.log(error1);
    throw `*❬⚠️❭➤ Ocurrio un error, por favor intenté nuevamente.*`;
  }
};
handler.command = ['delchatgpt'];
export default handler;
