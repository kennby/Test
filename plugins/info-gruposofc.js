const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*💝 GRUPOS OFICIALES 💝*
No disponibles por el momento.`.trim();
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
        'title': '😻 Puedes usar el #menu para ver los comandos disponibles',
        'body': wm,
        'thumbnail': imagen1,
        'sourceUrl': 'https://wa.me/19145948340'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.command = ['linkgc', 'grupos'];
export default handler;
