const handler = async (m, {conn, usedPrefix}) => {
  const pp = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
  try {
  } catch (e) {
  } finally {
    const name = await conn.getName(m.sender);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `
*💖 𝑯𝒐𝒍𝒊𝒊𝒔𝒔𝒔*
*${taguser} 💖*

╓╌╌╌╌╌╌╌╌╌╌❨🛡️❩╌╌╌╌╌╌╌╌╌╌╖
║💞 𝗠𝗜𝗧𝗦𝗨𝗥𝗜 - 𝗕𝗢𝗧 - 𝗠𝗗 - 𝗢𝗙𝗖 💞
╙╌╌╌╌╌╌╌╌╌╌❨🛡️❩╌╌╌╌╌╌╌╌╌╌╜

╓╌╌╌╌╌╌╌╌╌╌❨🛡️❩╌╌╌╌╌╌╌╌╌╌╖
║❤️𝘼𝙦𝙪𝙞 𝙥𝙪𝙚𝙙𝙚𝙨 𝙜𝙪𝙖𝙧𝙙𝙖𝙧 𝙡𝙤𝙨 𝙩𝙚𝙭𝙩𝙤𝙨,
║𝙑𝙞𝙙𝙚𝙤𝙨, 𝙉𝙤𝙩𝙖 𝙙𝙚 𝙫𝙤𝙯, 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨, 𝙚𝙩𝙘.❤️
╠══════════════◊
╟❬💬❭➢ _${usedPrefix}agregarmsg_
║ *❬texto/comando/palabra clave❭*
║
║ *(responde a un texto)*
╠════•━┅┅┄┄ • • • •
╟❬🔊❭➢ _${usedPrefix}agregarvn_
║ *❬texto/comando/palabra clave❭*
║
║ *(responde a una nota de voz)*
╠════•━┅┅┄┄ • • • •
╟❬🎥❭➢ _${usedPrefix}agregarvideo_
║ *❬texto/comando/palabra clave❭*
║
║ *(responde a un video)*
╠════•━┅┅┄┄ • • • •
╟❬🎧❭➢ _${usedPrefix}agregaraudio_
║ *❬texto/comando/palabra clave❭*
║
║ *(responde a un audio)*
╠════•━┅┅┄┄ • • • •
╟❬🖼️❭➢ _${usedPrefix}agregarimg_
║ *❬texto/comando/palabra clave❭*
║
║ *(responde a una imagen)*
╠════•━┅┅┄┄ • • • •
╟❬🎭❭➢ _${usedPrefix}agregarsticker_
║ *❬texto/comando/palabra clave❭*
║
║ *(responde a un sticker)*
╠══════════════◊
║❤️𝙑𝙚𝙧 𝙇𝙞𝙨𝙩𝙖 𝘿𝙚 𝙂𝙪𝙖𝙧𝙙𝙖𝙙𝙤𝙨 𝙀𝙣 𝙀𝙡 𝘽𝙤𝙩.❤️
╠══════════════◊
╟❬💬❭➢ _${usedPrefix}listamsg_
╠════•━┅┅┄┄ • • • •
╟❬🔊❭➢ _${usedPrefix}listavn_
╠════•━┅┅┄┄ • • • •
╟❬🎥❭➢ _${usedPrefix}listavideo_
╠════•━┅┅┄┄ • • • •
╟❬🎧❭➢ _${usedPrefix}listaaudio_
╠════•━┅┅┄┄ • • • •
╟❬🏞️❭➢ _${usedPrefix}listaimg_
╠════•━┅┅┄┄ • • • •
╟❬🎭❭➢ _${usedPrefix}listasticker_
╠══════════════◊
║❤️𝙑𝙚𝙧 𝘼𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙂𝙪𝙖𝙧𝙙𝙖𝙙𝙤𝙨.❤️
╠══════════════◊
╟❬💬❭➢ _${usedPrefix}vermsg_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🔊❭➢ _${usedPrefix}vervn_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🎥❭➢ _${usedPrefix}vervideo_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🎧❭➢ _${usedPrefix}veraudio_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🏞️❭➢ _${usedPrefix}verimg_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🖼️❭➢ _${usedPrefix}versticker_
║ *❬texto/comando/palabra clave❭*
╠══════════════◊
║❤️𝙀𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝘼𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙂𝙪𝙖𝙧𝙙𝙖𝙙𝙤𝙨.❤️
╠══════════════◊
╟❬🗑️💬❭➢ _${usedPrefix}eliminarmsg_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🗑️🔊❭➢ _${usedPrefix}eliminarvn_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🗑️🎥❭➢ _${usedPrefix}eliminarvideo_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🗑️🎧❭➢ _${usedPrefix}eliminaraudio_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🗑️🖼️❭➢ _${usedPrefix}eliminarimg_
║ *❬texto/comando/palabra clave❭*
╠════•━┅┅┄┄ • • • •
╟❬🗑️🎭❭➢ _${usedPrefix}eliminarsticker_
║ *❬texto/comando/palabra clave❭*
╙╌╌╌╌╌╌╌╌╌╌❨🛡️❩╌╌╌╌╌╌╌╌╌╌╜

╓╌╌╌╌╌╌╌╌╌╌❨🛡️❩╌╌╌╌╌╌╌╌╌╌╖
║😻 𝘾𝘼𝙅𝘼 𝙁𝙐𝙀𝙍𝙏𝙀 / 𝘼𝙇𝙈𝘼𝘾𝙀𝙉 😻
╙╌╌╌╌╌╌╌╌╌╌❨🛡️❩╌╌╌╌╌╌╌╌╌╌╜`.trim();
    if (m.isGroup) {
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
    // conn.sendButton(m.chat, str, wm, pp, [['🍁 𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪 🍁', '/menu']], m, { mentions: [m.sender] })
  }
};
handler.help = ['cajafuerte'];
handler.tags = ['owner'];
handler.command = /^(cajafuerte)$/i;
handler.rowner = true;
handler.fail = null;
export default handler;
