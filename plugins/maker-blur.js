const handler = async (m, {conn, usedprefix}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/blur', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', '*❮✅❯ 𝗘𝗹 𝗲𝗳𝗲𝗰𝘁𝗼 𝗳𝘂𝗲 𝗮𝗽𝗹𝗶𝗰𝗮𝗱𝗼 𝗰𝗼𝗻 𝗲𝘅𝗶𝘁𝗼!!\n\n💞 𝑀𝑖𝑡𝑠𝑢𝑟𝑖-𝐵𝑜𝑡-𝑀𝐷 💞*', m);
};
handler.help = ['blur', 'difuminar2'];
handler.tags = ['maker'];
handler.command = /^(blur|difuminar2)$/i;
export default handler;
