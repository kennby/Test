import {wallpaper} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*❮🍓❯➤ Por favor use el comando de esta forma, por ejemplo: ${usedPrefix + command} Roblox*`;
  const res = await wallpaper(text);
  const img = res[Math.floor(Math.random() * res.length)];
  conn.sendFile(m.chat, img, 'error.jpg', `❮🍀 R E S U L T A D O S   D E 🍀❯:\n*${text}*\n\nPuede usar el menu para ver los demas comandos.\n\n*#menu*\n*#help*\n*#estado*\n*#perfil*\n\n💞 Mitsuri - Bot - MD 💞`, m);
};
handler.help = ['', '2'].map((v) => 'wallpaper' + v + ' <query>');
handler.tags = ['downloader'];
handler.command = /^(wallpaper2?)$/i;
export default handler;
