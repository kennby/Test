import util from 'util';
import path from 'path';
const user = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata, command, conn, text, usedPrefix}) {
  if (!text) throw `👑 Ejemplo de uso:\n.top *texto*`;
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  const b = ps.getRandom();
  const c = ps.getRandom();
  const d = ps.getRandom();
  const e = ps.getRandom();
  const f = ps.getRandom();
  const g = ps.getRandom();
  const h = ps.getRandom();
  const i = ps.getRandom();
  const j = ps.getRandom();
  const k = Math.floor(Math.random() * 70);
  const x = `${pickRandom(['🎊', '💝', '🦋', '🔮', '😳', '🍆', '🥵', '🍑', '👑', '✨', '💩', '🍑', '🤨', '💧', '🔥', '🏙️', '☃️', '👀', '🌆'])}`;
  const l = Math.floor(Math.random() * x.length);
  const vn = `https://hansxd.nasihosting.com/sound/sound${k}.mp3`;
  const img = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
  const top = `┏┉┅━━━━━━⊕━━━━━━┅┉┓
╏ ${x} top 10 ${text} ${x}
┗┉┅━━━━━━⊕━━━━━━┅┉┛

*1️⃣. ${user(a)}*
┄┄┄┄┄┄┄┄┄┄
*2️⃣. ${user(b)}*
┄┄┄┄┄┄┄┄┄┄
*3️⃣. ${user(c)}*
┄┄┄┄┄┄┄┄┄┄
*4️⃣. ${user(d)}*
┄┄┄┄┄┄┄┄┄┄
*5️⃣. ${user(e)}*
┄┄┄┄┄┄┄┄┄┄
*6️⃣. ${user(f)}*
┄┄┄┄┄┄┄┄┄┄
*7️⃣. ${user(g)}*
┄┄┄┄┄┄┄┄┄┄
*8️⃣. ${user(h)}*
┄┄┄┄┄┄┄┄┄┄
*9️⃣. ${user(i)}*
┄┄┄┄┄┄┄┄┄┄
*🔟. ${user(j)}*
┄┄┄┄┄┄┄┄┄┄

*💜 Mitsuri - Bot - MD 💜*`;
  m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]});
  conn.sendFile(m.chat, vn, {url: img}, 'error.mp3', null, m, true, {
    type: 'audioMessage',
    ptt: true});
}
handler.help = handler.command = ['top'];
handler.tags = ['fun'];
handler.group = true;
handler.limit = 2;
export default handler;
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
