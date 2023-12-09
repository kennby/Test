import fetch from 'node-fetch';
const handler = async (m, {
  conn,
  command,
}) => {
  const res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`);
  if (res.status != 200) throw await res.text();
  const json = await res.json();
  if (!json.status) throw json;
  conn.sendFile(m.chat, json.result.female, 'error.jpg', `𝐂𝐇𝐈𝐂𝐀 𝐂𝐔𝐓𝐄 😍`, m);
  conn.sendFile(m.chat, json.result.male, 'error.jpg', `𝐂𝐇𝐈𝐂𝐎 𝐂𝐔𝐓𝐄 😍`, m);
  // conn.sendButton(m.chat, '𝐂𝐇𝐈𝐂𝐀 𝐂𝐔𝐓𝐄 😍', wm, json.result.female, [['😘 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 😘', `/${command}`]], m)
  // conn.sendButton(m.chat, '𝐂𝐇𝐈𝐂𝐎 𝐂𝐔𝐓𝐄 😍', wm, json.result.male, [['😘 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 😘', `/${command}`]], m)
};
handler.help = ['ppcouple'];
handler.tags = ['internet'];
handler.command = /^(ppcp|ppcouple)$/i;
export default handler;
