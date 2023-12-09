const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw `*❮💝❯➤ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙣 𝙞𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢*\n\n*𝘾𝙤𝙢𝙤 𝙥𝙤𝙧 𝙚𝙟𝙚𝙢𝙥𝙡𝙤:*\n*${usedPrefix + command} luisitocomunica*`;
  await m.reply(global.wait);
  const res = await fetch(`https://api.lolhuman.xyz/api/igstory/${args[0]}?apikey=${lolkeysapi}`);
  const anu = await res.json();
  const anuku = anu.result;
  if (anuku == '') return m.reply('❮🛡️❯➤ 𝙀𝙍𝙍𝙊𝙍 / 𝙁𝘼𝙇𝙇𝙊:\n\n*MOTIVOS:*\n-Usᴜᴀʀɪᴏ ɪɴᴠᴀʟɪᴅᴏ.\n-Usᴜᴀʀɪᴏ sɪɴ ʜɪsᴛᴏʀɪᴀs.');
  for (const i of anuku) {
    const res = await axios.head(i);
    const mime = res.headers['content-type'];
    if (/image/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.jpg', null, m).catch(() => {
        return m.reply('❮🛡️❯➤ 𝙀𝙍𝙍𝙊𝙍 / 𝙁𝘼𝙇𝙇𝙊:\n\n*MOTIVOS:*\n-Usᴜᴀʀɪᴏ ɪɴᴠᴀʟɪᴅᴏ.\n-Usᴜᴀʀɪᴏ sɪɴ ʜɪsᴛᴏʀɪᴀs.');
      });
    }
    if (/video/.test(mime)) {
      await conn.sendFile(m.chat, i, 'error.mp4', null, m).catch(() => {
        return m.reply('❮🛡️❯➤ 𝙀𝙍𝙍𝙊𝙍 / 𝙁𝘼𝙇𝙇𝙊:\n\n*MOTIVOS:*\n-Usᴜᴀʀɪᴏ ɪɴᴠᴀʟɪᴅᴏ.\n-Usᴜᴀʀɪᴏ sɪɴ ʜɪsᴛᴏʀɪᴀs.');
      });
    }
  }
};
handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory', 'ighistoria'];
export default handler;
