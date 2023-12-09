import axios from 'axios';
const handler = async (m, {
  conn,
  args,
  usedPrefix,
  command,
}) => {
  const res = (await axios.get(`https://raw.githubusercontent.com/egobot-supreme/Mitsuri-Bot-MD/master/src/JSON/navidad.json`)).data;
  const mystic = await res[Math.floor(res.length * Math.random())];
  conn.sendMessage(m.chat, {
    image: {
      url: mystic,
    },
    caption: `_𝙵𝙴𝙻𝙸𝚉 𝙽𝙰𝚅𝙸𝙳𝙰𝙳 😘🎄🎆_`,
  }, {
    quoted: m,
  });
  // conn.sendButton(m.chat, `_𝙵𝙴𝙻𝙸𝚉 𝙽𝙰𝚅𝙸𝙳𝙰𝙳 😘🎄🎆_`, author, mystic, [['😘 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 😘', `${usedPrefix + command}`]], m)
};
handler.help = ['navidad'];
handler.tags = ['internet'];
handler.command = /^(navidad)$/i;
export default handler;
