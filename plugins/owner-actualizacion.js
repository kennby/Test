// adartado por mario (Aka: un ladrón de código)

import axios from 'axios';
let previousCommitSHA = '';
let previousUpdatedAt = '';
let previousCommitUser = ''; 
const owner = 'egobot-supreme';
const repo = 'Mitsuri-Bot-MD';
const handler = async (m, {conn, text, usedPrefix, command}) => {
 conn.sendMessage(m.chat, {text: `*❮🍀❯➤ Comando cambiado exitosamente, se le notificara cuando haya cambios en el repositorio oficial del bot.*`}, {quoted: m});  
try {
  async function checkRepoUpdates() {
    try {
      const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`);
      const {sha, commit: {message}, html_url, author: { login } } = response.data[0];

      if (sha !== previousCommitSHA || message !== previousUpdatedAt) {
        previousCommitSHA = sha;
        previousUpdatedAt = message;
        previousCommitUser = login
        conn.sendMessage(m.chat, {text: `*❮🥳❯➤ El repositorio ha sido actualizado!!!*\n\n*❮🍀❯➤ Repositorio:* ${html_url}\n\n*❮🍄❯➤ Mensaje de commit:* ${message}\n\n*❮💎❯➤ Commit por:* ${login}`}, {quoted: m});
      }
    } catch (error) {
      console.error(error)
      m.reply('*❮💖❯➤ ERROR AL VERIFICAR EL REPOSITORIO OFICIAL DEL BOT.*');
    }
  }
  setInterval(checkRepoUpdates, 6000);
} catch (e) {
m.reply(e)
}
};
handler.command = /^(actualizacion|actualizaciones)/i;
handler.rowner = true;
export default handler;
