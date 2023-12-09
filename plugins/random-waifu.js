import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await fetch('https://api.waifu.pics/sfw/waifu');
  if (!res.ok) throw await res.text();
  const json = await res.json();
  if (!json.url) throw 'Error!';
  conn.sendFile(m.chat, json.url, 'error.jpg', `Ara ara sempai 🥵~~`, m);
//conn.sendButton(m.chat, `Ara ara sempai 🥵~~`, author, json.url, [['😘 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 😘', `/${command}`]], m)
};
handler.help = ['waifu'];
handler.tags = ['anime'];
handler.command = /^(waifu)$/i;
export default handler;
