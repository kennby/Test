import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `*💚ฺ࣭࣪͘ꕸ▸ Ya te habias registrado, no es necesario registrarse nuevamente.*\n\n*🌻ฺ࣭࣪͘ꕸ▸ ¿Quieres volver a registrarte nuevamente?*\n*Ingrese su numero de serie con este comando a continuacion, por ejemplo:*\n*${usedPrefix}unreg* ❲Numero de serie❳`;
  if (!Reg.test(text)) throw `*𖥨ํ∘̥⃟⸽⃟🌎❯ Ingreso erroneo*\n\n*Por favor, ingrese el comando de esta manera: ${usedPrefix + command} nombre.edad*\n*💖 Por ejemplo: ${usedPrefix + command} Liz.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*𖥨ํ∘̥⃟⸽⃟🍃❯ Nombre faltante, por favor ponga su nombre.*';
  if (!age) throw '*𖥨ํ∘̥⃟⸽⃟🌎❯ Edad faltante, por favor ponga su edad.*';
  if (name.length >= 30) throw '*𖥨ํ∘̥⃟⸽⃟🍀❯ El nombre no debe ser muy largo, por favor intente nuevamente con un nombre corto que no tenga mas de 30 caracteres.*';
  age = parseInt(age);
  if (age > 50) throw '*𖥨ํ∘̥⃟⸽⃟🌹❯ Viejo/a Sabroso/a 😏🔥 jajaja*';
  if (age < 9) throw '*𖥨ํ∘̥⃟⸽⃟🍓❯ Lamentablemente no aceptamos menores mijo/a 😂✨*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `
*╭═❒❒❒❬✅ Verificación ✅❭❒❒❒═╮*
╎ 💞 Mitsuri - Bot - MD - OFC 💞
*╰═❒❒❒❬✅ Verificación ✅❭❒❒❒═╯*
╔┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╗
║ *Usuario/a Registrado/a*
╠┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╣
║ *❬🌹❭➤ Nombre User:*
║ ${name}
║
║ *❬📆❭➤ Edad:*
║${age}
║
║ *❬🥏❭➤ ID de registro:*
║${sn}
╠┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╣
║Tu ID de registro te servira
║para borrar tu registro en:
║
║💞 Mitsuri-Bot-MD 💞
╚┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄╝`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `Tu ID de registro te servira para borrar tu registro en, 💞 Mitsuri-Bot-MD 💞\n${author}`, [['✅ Ahora estoy verificado/a ✅', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|verificar|reg|registrar)$/i;
export default handler;
