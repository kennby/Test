import fetch from 'node-fetch';
const handler = async (m, {conn, args, text}) => {
  if (!text) throw '*❬👑❭➤ Por favor, ingrese un enlace que desea acortar.*';
  const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
  if (!shortUrl1) throw `*❬🛡️❭➤ Formato erroneo, por favor verifique que el texto ingresado sea un texto, intentelo de nuevo.*`;
  const done = `*❬✅❭➤ Enlace acortado exitosamente!!*\n\n*❬😍❭➤ Enlace anterior:*\n${text}\n*❬✅❭➤ Enlace acortado:*\n${shortUrl1}`.trim();
  m.reply(done);
};
handler.help = ['tinyurl', 'acortar'].map((v) => v + ' <link>');
handler.tags = ['tools'];
handler.command = /^(tinyurl|short|acortar|corto)$/i;
handler.fail = null;
export default handler;
