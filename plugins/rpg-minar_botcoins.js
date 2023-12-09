const handler = async (m, {conn, isPrems}) => { // lastmiming
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        },
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        },
        "participant": "0@s.whatsapp.net"
    }

  const user = global.db.data.users[m.sender];
  const premium = user.premium;
  const minar = `${pickRandom(['🧐🍷 Que fino/a has minado',
'👑 Genial, obtienes',
'JAJAJAJA XD, Obtienes',
'🧐🍷 Has Minado',
'0: Minaste esta cantidad',
'🧐🍷 Mientras sigas minando, subirás tus ingresos',
'🤖⛏️ Minando',
'0: jaja, mira, tienes',
'Si no consigues mucho en la mina, pues soporta :v, tienes',
'🧐🍷 Mala o buena suerte de minar',
'0: Mira cabron/a minaste',
'0: jsksksks mira, minaste esta cantidad',
'☕ No encontraste ningun lugar, todo esta seco, sin nada, solo polvo y con piedras comunes, pero minas igual y obtienes',
'v: tus ingresos subiran, depende de cuanto mines jsjdkkdk, por ello obtienes',
'⛏️ Minaste poquito, mira Xd,','v: Te debo algunas minas, ya que no conseguiste nada xd, obtienes'])}`;
  const pp = 'https://i.postimg.cc/3JbhYfRL/Picsart-23-09-28-16-44-12-496.jpg';
  const aqua = `${pickRandom([0, 2, 3, 1, 5])}` * 1;
  const aquapremium = `${pickRandom([2, 4, 6, 7, 5, 9])}` * 1;
  const rock = `${pickRandom([6, 9, 0, 12, 2])}` * 1;
  const rockpremium = `${pickRandom([13, 9, 17, 20, 25])}` * 1;
  const pancingan = `${pickRandom([1, 0, 2, 1, 0, 0, 0])}` * 1;
  const pancinganpremium = `${pickRandom([1, 3, 4, 9, 2, 5, 8])}` * 1;
  const recompensas = {aqua: premium ? aquapremium : aqua, rock: premium ? rockpremium : rock, pancingan: premium ? pancinganpremium : pancingan};
  const money = `${pickRandom([100, 200, 250, 300, 370, 400, 450, 480, 500, 510, 640, 680, 704, 760, 800, 840, 880, 900, 1000, 1059, 1080, 1100, 1190, 1230, 1380, 1399, 1290, 1300, 1340, 1350, 1590, 1400, 1450, 1700, 1800, 1900, 2000, 0, 0, 10, 1, 99, 999, 1789, 1430])}` * 1;
  const moneypremium = `${pickRandom([500, 600, 700, 800, 900, 1000, 1050, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1950, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900, 3000, 3100, 3200, 3400, 3500, 3600, 3700, 3800, 3850, 3900, 3950, 4000])}` * 1;
  const time = user.lastcoins + 600000; // 10 min
  if (new Date - user.lastcoins < 600000) return await conn.reply(m.chat, `*⏳ 𝙑𝙪𝙚𝙡𝙫𝙖 𝙚𝙣 ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙧 𝙢𝙞𝙣𝙖𝙣𝙙𝙤 ${global.rpgshopp.emoticon('money')}⛏️*`, m);
  user.money += premium ? moneypremium : money;
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `+${recompensas[reward]} ${global.rpgshop.emoticon(reward)}\n`;
  }
  const text = `*${premium ? '🎟️ Recompensa Premium' : '🆓 Recompensa Gratis'}*\n*${minar}*\n*${money} ${global.rpgshop.emoticon('money')}*\n\n👑 𝗕 𝗢 𝗡 𝗢\n${texto}\n\n🏆 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`;
  await conn.sendFile(m.chat, pp, 'mystic.jpg', text, m);
  user.lastcoins = new Date * 1;
};
handler.help = ['minar2'];
handler.tags = ['mitsuri'];
handler.command = ['minar2', 'miming2', 'mine2', 'minarmysticcoins', 'minarcoins', 'minarmystic'];
handler.fail = null;
handler.exp = 0;
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' m y ' + seconds + ' s ';
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
