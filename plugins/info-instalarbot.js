const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `
*❬💖 INSTALACIÓN DEL BOT EN TERMUX 💖❭*

𝘿𝙪𝙙𝙖𝙨 𝙨𝙤𝙗𝙧𝙚 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩?
❲🥏❳➜ https://wa.me/19145948340

𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙖𝙧 𝙖𝙡𝙜𝙤 𝙘𝙤𝙣 𝙡𝙖 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙖?
❲❤️❳➜

⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰
𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙘𝙤𝙢𝙤 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩?
❲😻❳➜
⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰
🎉 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙚𝙣 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 🎉

(𝙲𝚘𝚙𝚒𝚊𝚛 𝚞𝚗𝚘 𝚙𝚘𝚛 𝚞𝚗𝚘 𝚝𝚊𝚕 𝚌𝚘𝚖𝚘 𝚎𝚜𝚝𝚊 𝚎𝚕 𝚟𝚒𝚍𝚎𝚘)

❲1️⃣❳➜ cd && termux-setup-storage

❲2️⃣❳➜ apt-get update -y && apt-get upgrade -y

❲3️⃣❳➜ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
 
❲4️⃣❳➜ git clone https://github.com/egobot-supreme/Mitsuri-Bot-MD.git && cd Mitsuri-Bot-MD

❲5️⃣❳➜ yarn install

❲6️⃣❳➜ npm install

❲7️⃣❳➜ npm update

❲8️⃣❳➜ npm start

⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰
🥵 ¿𝘼𝙥𝙖𝙜𝙖𝙨𝙩𝙚 𝙚𝙡 𝙘𝙚𝙡𝙪 𝙤 𝙨𝙚 𝙩𝙚 𝙖𝙥𝙖𝙜𝙖𝙜𝙤 𝙚𝙡 𝙩𝙚𝙧𝙢𝙪𝙭? 🥵

𝙿𝚊𝚛𝚊 𝚙𝚛𝚎𝚗𝚍𝚎𝚛𝚕𝚘 𝚞𝚜𝚎 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜, 𝚛𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚚𝚞𝚎 𝚎𝚜 𝚞𝚗𝚘 𝚙𝚘𝚛 𝚞𝚗𝚘:

❲1️⃣❳➜ cd Mitsuri-Bot-MD

❲2️⃣❳➜ npm start

⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰
💝 ¿𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙤𝙩𝙧𝙤 𝙘𝙤𝙙𝙞𝙜𝙤 𝙌𝙍? 💝

𝙴𝚜𝚌𝚛𝚒𝚋𝚎 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚞𝚗𝚘 𝚙𝚘𝚛 𝚞𝚗𝚘:

❲1️⃣❳➜ cd Mitsuri-Bot-MD

❲2️⃣❳➜ rm -rf MitsuriSession

❲3️⃣❳➜ npm start

⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/egobot-supreme/Mitsuri-Bot-MD`},
    'mimetype': `application/${document}`,
    'fileName': `❬💖  𝙈𝙞𝙩𝙨𝙪𝙧𝙞 - 𝘽𝙤𝙩 - 𝙈𝘿 - 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 💖❭`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/egobot-supreme/Mitsuri-Bot-MD',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': 'Puedes participar en el sorteo de regalos echo por Ego_Official 😍⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://wa.me/19145948340'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    // {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1},
    // {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['instalarbot', 'instalarbot'];
export default handler;
