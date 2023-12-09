import {join} from 'path';
import {promises} from 'fs';
const handler = async (m, {conn, args, usedPrefix, __dirname}) => {
  const imgr = flaaa.getRandom();
  const _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch((_) => ({}))) || {};
  const user = global.db.data.users[m.sender];
  if (user.health >= 100) return conn.reply(m.chat, `*❲ ❤️ 𝚅𝙸𝙳𝙰/𝚂𝙰𝙻𝚄𝙳 ❤️ ❳*\n▰▰▰▰▰▰▰▰▰▰ ❬ ${user.health}% ❭\n\n*Tu salud esta llena, ahora ve a lastimarte uwu <3`, m);
  /* conn.sendButton(m.chat, `*❲ ❤️ 𝚅𝙸𝙳𝙰/𝚂𝙰𝙻𝚄𝙳 ❤️ ❳*\n▰▰▰▰▰▰▰▰▰▰ ❬ ${user.health}% ❭\n\n`, wm, imgr + `*Tu salud esta llena, ahora ve a lastimarte uwu <3`, [
[`🌎 𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁 🌎`, `${usedPrefix}adventure`]], m)*/
  const heal = 40 + (user.cat * 4);
  const count = Math.max(1, Math.min(Number.MAX_SAFE_INTEGER, (isNumber(args[0]) && parseInt(args[0]) || Math.round((90 - user.health) / heal)))) * 1;
  if (user.potion < count) {
    return conn.reply(m.chat, `*${htki} Sin pociones ${htka}\n\n😍 Necesitas: ${count - user.potion} de pocion para recuperar tu vida ❤️❤️❤️

❬❤️ 𝚂𝙰𝙻𝚄𝙳/𝚅𝙸𝙳𝙰 ❤️❭:
${user.health} 😍

❬🧪 𝙿𝙾𝙲𝙸𝙾𝙽 🧪❭:
${user.potion} 😍

*💝 Puedes comprar pociones o tambien le puedes pedir a alguien que te transfiera.*`, m);
  }
  /* conn.sendButton(m.chat,`${htki} Sin pociones ${htka}`,
`😍 Necesitas ${count - user.potion} de pocion para recuperar tu vida ❤️❤️❤️
❬❤️ 𝚂𝙰𝙻𝚄𝙳/𝚅𝙸𝙳𝙰 ❤️❭:
${user.health} 😍
❬🧪 𝙿𝙾𝙲𝙸𝙾𝙽 🧪❭:
${user.potion} 😍
*💝 Puedes comprar pociones o tambien le puedes pedir a alguien que te transfiera.*`.trim(), imgr + 'POCION BAJA', [
[`💝 Comprar pocion 💝`, `${usedPrefix}buy potion ${count - user.potion}`],
[`😍 Pedir Ayuda 😍`, `${usedPrefix}pedirayuda *Por Favor alguien ayudeme con ${count - user.potion} de Pocion, me muero* 😍
*💖 Ayuda transfiriendo 💖:*
*${usedPrefix}transfer potion ${count - user.potion}* @${conn.getName(m.sender)}`]], m)*/
  user.potion -= count * 1; // 1 potion = count (1)
  user.health += heal * count;
  conn.reply(m.chat, `*❬❤️ SALUD / VIDA COMPLETA ❤️❭:*\n\nUsaste: ${count} de pocion 🧪 para recuperar tu salud\n\n*❲ ❤️ 𝚅𝙸𝙳𝙰/𝚂𝙰𝙻𝚄𝙳 ❤️ ❳*\n▰▰▰▰▰▰▰▰▰▰ ❬ ${user.health}% ❭\n\n😍 Vida completada`, m);
};
/* conn.sendButton(m.chat, `**❬❤️ SALUD / VIDA COMPLETA ❤️❭:*`, `Usaste: ${count} de pocion 🧪 para recuperar tu salud\n\n*❲ ❤️ 𝚅𝙸𝙳𝙰/𝚂𝙰𝙻𝚄𝙳 ❳*\n▰▰▰▰▰▰▰▰▰▰ ❬ ${user.health}% ❭`, imgr + '😍 Vida completada', [
[`❤️ 𝙰𝚅𝙴𝙽𝚃𝚄𝚁𝙰𝚁 ❤️`, `${usedPrefix}adventure`]], m)*/
handler.help = ['heal'];
handler.tags = ['rpg'];
handler.command = /^(heal|curar)$/i;
export default handler;
function isNumber(number) {
  if (!number) return number;
  number = parseInt(number);
  return typeof number == 'number' && !isNaN(number);
}
