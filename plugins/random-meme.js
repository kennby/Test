/*   Creditos - ig : https://www.instagram.com/fg98._/    */
import hispamemes from 'hispamemes';
const handler = async (m, {command, conn}) => {
  const url = await hispamemes.meme();
  conn.sendFile(m.chat, url, 'error.jpg', `_💖😂 ${command} 😂💖_`, m);
};
// conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['😘 𝐒𝐈𝐆𝐔𝐈𝐄𝐍𝐓𝐄 😘', `/${command}`]], m)}
handler.help = ['meme'];
handler.tags = ['random'];
handler.command = /^(meme|memes)$/i;
export default handler;
