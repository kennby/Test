import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `*❮😍❯➤ Por favor, ingrese un repositorio de github valido, por ejemplo: ${usedPrefix + command} https://github.com/GataNina-Li/GataBotLite-MD*`;
  if (!regex.test(args[0])) throw '*❮⛔ ERROR / FALLO ⛔❯*\n\n*• Enlace/URL invalido/incorrecto.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*❮😍❯➤ Por favor espere un momento, se esta descargando el archivo, debe saber que la descarga tardara dependiendo del peso del archivo que son los archivos del repositorio, o los modulos en la carpeta.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone <url>'];
handler.tags = ['downloader'];
handler.command = /gitclone/i;
export default handler;
