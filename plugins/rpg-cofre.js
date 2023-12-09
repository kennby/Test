const handler = async (m, {isPrems, conn}) => {
  const time = global.db.data.users[m.sender].lastcofre + 86400000; // 36000000 10 Horas //86400000 24 Horas
  if (new Date - global.db.data.users[m.sender].lastcofre < 86400000) throw `❪💞❫➜ *ya reglamaste tu cofre*\n*por favor vuelve en: ${msToTime(time - new Date())} para volver a reclamar tu cofre uwu*`;

  const img = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
  const dia = Math.floor(Math.random() * 30);
  const tok = Math.floor(Math.random() * 10);
  const mitsuri = Math.floor(Math.random() * 4000);
  const expp = Math.floor(Math.random() * 5000);

  global.db.data.users[m.sender].limit += dia;
  global.db.data.users[m.sender].money += mystic;
  global.db.data.users[m.sender].joincount += tok;
  global.db.data.users[m.sender].exp += expp;

  const texto = `
•👑•┈┈┈••┈┈┈••✦🌹✦••┈┈┈••┈┈┈•👑•
*💖        M I T S U R I - B O T - M D          💖*
•👑•┈┈┈••┈┈┈••✦🌹✦••┈┈┈••┈┈┈•👑•

*❪💎 Diamantes 💎❫:*
❒➢ *${dia}

*❪🪙 Tokens 🪙❫:*
❒➢ *${tok}

*❪😍 Bot Coins 😍❫:*
❒➢ *${mitsuri}

*❪⭐ Experiencia ⭐❫:*
❒➢ *${expp}

•👑•┈┈┈••┈┈┈••✦🌹✦••┈┈┈••┈┈┈•👑•
*💰       C O F R E - D I A R I A - B O T      💰*
•👑•┈┈┈••┈┈┈••✦🌹✦••┈┈┈••┈┈┈•👑•`;

  const fkontak = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo',
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    'participant': '0@s.whatsapp.net',
  };

  await conn.sendFile(m.chat, img, 'mitsuri.jpg', texto, fkontak);
  await conn.sendButton(m.chat, texto, wm, img, [['💖 M E N U 💖', '/menu'] ], fkontak, m)
  global.db.data.users[m.sender].lastcofre = new Date * 1;
};
handler.help = ['daily'];
handler.tags = ['xp'];
handler.command = ['coffer', 'cofre', 'abrircofre', 'cofreabrir'];
handler.level = 5;
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' Horas ' + minutes + ' Minutos';
}
