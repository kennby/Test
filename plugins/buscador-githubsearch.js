import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*❮❤️❯➤ Por favor, ingresa el nombre del bot en un repositorio de github, por ejemplo: ${usedPrefix + command} GataBotLite-MD*`;
  const res = await fetch(global.API('https://api.github.com', '/search/repositories', {
    q: text,
  }));
  const json = await res.json();
  if (res.status !== 200) throw json;
  //const imagen = await conn.getFile(json.items[0].owner.avatar_url).data
  const str = json.items.map((repo, index) => {
  return `
❲💦❳➮ *Numero:*
*${1 + index}*

❲😼❳➮ *Nombre Repo:*
${repo.full_name}${repo.fork ? ' (fork)' : ''}*

❲⬇️❳➮ *Enlace/Repo:*
${repo.html_url}

❲😍❳➮ *Creado el:*
${formatDate(repo.created_at)}

❲🚀❳➮ *Actualizado el:*
${formatDate(repo.updated_at)}

❲👑❳➮ *Clonar/Repo:*
$ git clone ${repo.clone_url}

❲👀❳➮ *Vistas:*
${repo.watchers}

❲💝❳➮ *Forks:*
${repo.forks}

❲🌟❳➮ *Estrellas totales:*
${repo.stargazers_count}
 
❲✅❳➮ *Descripcion:*
${repo.description ? `🌆 *Descripción:*\n${repo.description}` : ''}
`.trim()}).join('\n\n┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄\n\n');
  conn.sendMessage(m.chat, {text: str.trim()}, {quoted: m})
//conn.sendMessage(m.chat, {text: str.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen, "mediaUrl": `https://www.atom.bio/theshadowbrokers-team`, "sourceUrl": `https://www.atom.bio/theshadowbrokers-team`}}}, {quoted: m});  
};
handler.help = ['githubs'];
handler.tags = ['buscadores'];
handler.command = /^(ghs|githubs|githubs|githubsearch|gits|gitsearch)$/i;
export default handler;

function formatDate(n, locale = 'es') {
  const d = new Date(n);
  return d.toLocaleDateString(locale, {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'});
}
