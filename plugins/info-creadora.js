const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `◊❲💞 CUENTAS DE LOS CREADORES 💞❳◊

*❬👑❭➢ Numero de la creadora:*
• _Solo preguntar por GuardianBot-MD._

*❬🛡️❭➢ Numero de GuardianBot-MD:*
• wa.me/19145948340

*❬😻❭➢ Numero de Ego_Official:*
• wa.me/19146103450

*❬🥳❭➢ Numero del creador, Mangara:*
• wa.me/51947454367

*❬💞❭➢ Numero de la creadora, Amy:*
• wa.me/5493873452653

*❬🛡️❭➢ Numero de Support GuardianBot-MD/Mitsuri-Bot-MD:*
• wa.me/5493873452654

*❬👑❭➢ Numero de Support Ego_Official:*
• wa.me/5493873687620`.trim();
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
        'title': '😍 Si quieres instalar o consultar un numero prestado para instalar el bot, puede contactarme o con el guardian bot md.⁩',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://wa.me/19145948340'}},
    'caption': text,
    'footer': wm,
    // 'buttons':[
    {buttonId: `${usedPrefix}menu`, buttonText: {displayText: '💦 Menu 💦'}, type: 1},
    {buttonId: `${usedPrefix}donar`, buttonText: {displayText: '👑 Donar 👑'}, type: 1}],
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creadora|propietaria)$/i;
export default handler;
