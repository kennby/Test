import {createHash} from 'crypto';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, participants, isPrems}) => {
  let pp = 'https://i.postimg.cc/W3DXR6Fw/Picsart-23-10-19-20-27-53-676.jpg';
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  if (!(who in global.db.data.users)) throw `🎀 El usuario que está mencionando no está registrado en mi base de datos`;
  try {
    pp = await conn.profilePictureUrl(who);
  } catch (e) {
  } finally {
    const {name, limit, lastclaim, registered, regTime, age, premiumTime} = global.db.data.users[who];
    const username = conn.getName(who);
    const prem = global.prems.includes(who.split `@` [0]);
    const sn = createHash('md5').update(who).digest('hex');
    const str = `╭──────── • ────────╮
│       💜 𝐌𝐈𝐓𝐒𝐔𝐑𝐈 💜
╰───────╮ • ╭───────╯
╭───────╯ • ╰───────╮
│      🍡 𝐁𝐎𝐓 - 𝐌𝐃 🍡
╰──────── • ────────╯

┌≫ ──── ≪•◦ ❲🍡🌳🍡❳ ◦•≫ ──── ≪
│𖥨ํ∘̥⃟⸽⃟🌻➣ *𝗡𝗼𝗺𝗯𝗿𝗲:*
├❒➤ ${username} ${registered ? '(' + name + ') ': ''}
┝┅┅┅┅┅┅┅┄┄┄┄ • • • •
│𖥨ํ∘̥⃟⸽⃟🥏➣ *𝗡𝘂𝗺𝗲𝗿𝗼:*
├❒➤ ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
┝┅┅┅┅┅┅┅┄┄┄┄ • • • •
│𖥨ํ∘̥⃟⸽⃟🌎➣ *𝗘𝗻𝗹𝗮𝗰𝗲 𝗱𝗲 𝗻𝘂𝗺𝗲𝗿𝗼:*
├❒➤ wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
┝┅┅┅┅┅┅┅┄┄┄┄ • • • •
│𖥨ํ∘̥⃟⸽⃟💎➣ *𝗟𝗶𝗺𝗶𝘁𝗲𝘀/𝗱𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀:*
├❒➤ ${limit} 𝚄𝚂𝙾𝚂
┝┅┅┅┅┅┅┅┄┄┄┄ • • • •
│𖥨ํ∘̥⃟⸽⃟🌆➣ *¿𝗥𝗲𝗴𝗶𝘀𝘁𝗿𝗮𝗱𝗼?:*
├❒➤ ${registered ? 'Si ✅': 'No ⛔'}
┝┅┅┅┅┅┅┅┄┄┄┄ • • • •
│𖥨ํ∘̥⃟⸽⃟🌳➣ *¿𝗣𝗿𝗲𝗺𝗶𝘂𝗺?:*
├❒➤ ${premiumTime > 0 ? 'Si 👑' : (isPrems ? 'Si ✅' : 'No 🥀') || ''}
┝┅┅┅┅┅┅┅┄┄┄┄ • • • •
│𖥨ํ∘̥⃟⸽⃟💦➣*𝗜𝗗 𝗱𝗲 𝗿𝗲𝗴𝗶𝘀𝘁𝗿𝗼:* 
├❒➤ ${sn}
└≫ ──── ≪•◦ ❲🍡🌳🍡❳ ◦•≫ ──── ≪
*:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*:･ﾟ✧ *:･ﾟ✧
*:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧*:･ﾟ✧
*:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧
*:･ﾟ✧ *:･ﾟ✧ *:･ﾟ✧
│ │ │ │ │ │ │
│ │ │ │ │ │ є
│ │ │ │ │ ʍ
│ │ │ │ O
│ │ │ ⊂
│ │ L
│ E
W`;
    conn.sendMessage(m.chat, {image: {url: pp}, caption: str}, {quoted: m});
  }
};
handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;
export default handler;
