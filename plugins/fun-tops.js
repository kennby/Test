import util from 'util';
import path from 'path';
const user = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata, command, conn, participants}) {
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

  if (command == 'topgays') {
    const vn = './media/gay2.mp3';
    const img = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
    const top = `╔═════ ≪ °💖° ≫ ═════╗
╟• Top 10 Gays/Lesbianas
╟• captados en grupos
╟• publicos 😨😱
╚═════ ≪ °💖° ≫ ═════╝

┌─────── ∘°❉°∘ ──────┐
*╎Gay/Lesbiana numero 1*
╎ ${user(a)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 2*
╎ ${user(b)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 3*
╎ ${user(c)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 4*
╎ ${user(d)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 5*
╎ ${user(e)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 6*
╎ ${user(f)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 7*
╎ ${user(g)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 8*
╎ ${user(h)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 9*
╎ ${user(i)}
├┄┄┄┄┄┄┄ • • •
*╎Gay/Lesbiana numero 10*
╎ ${user(j)}
└─────── °∘❉∘° ──────┘`;
    m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]});
    conn.sendMessage(m.chat, {audio: {url: vn}, {url: img} fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
    // conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  }

  if (command == 'topotakus') {
    const vn = './media/otaku.mp3';
    const img = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
    const top = `╔═════ ≪ °💜° ≫ ═════╗
╟• Top 10 Otakus/Otakas xd
╟• captados en grupos
╟• publicos 😨😱
╚═════ ≪ °💜° ≫ ═════╝

┌─────── ∘°❉°∘ ──────┐
*╎Otaku numero 1*
╎ ${user(a)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 2*
╎ ${user(b)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 3*
╎ ${user(c)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 4*
╎ ${user(d)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 5*
╎ ${user(e)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 6*
╎ ${user(f)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 7*
╎ ${user(g)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 8*
╎ ${user(h)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 9*
╎ ${user(i)}
├┄┄┄┄┄┄┄ • • •
*╎Otaku numero 10*
╎ ${user(j)}
└─────── °∘❉∘° ──────┘`;
    m.reply(top, null, {mentions: [a, b, c, d, e, f, g, h, i, j]});
    conn.sendMessage(m.chat, {audio: {url: vn}, {url: img} fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
    // conn.sendFile(m.chat, vn, 'otaku.mp3', null, m, true, { type: 'audioMessage', ptt: true })
  }
}
handler.help = handler.command = ['topgays', 'topotakus'];
handler.tags = ['games'];
handler.group = true;
export default handler;
