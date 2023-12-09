/* Created By https://github.com/ALBERTO9883 */
import fs from 'fs';
import fetch from 'node-fetch';
import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {text, usedPrefix, command, conn}) => {
  if (!text) throw `❮🌸❯➢ *Por favor, ingrese un nombre de paquete que quiera buscar.*`;
  try {
    const res2 = await googleImage(text);
    const sfoto = res2.getRandom();
    const json = await fetch(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkeysapi}&query=${text}`);
    const jsons = await json.json();
    const {stickers} = jsons.result[0];
    const res = jsons.result.map((v, index) => `❮😘❯➢ Resultado: ${1 + index}\n*❮💜❯➢ Nombre:* ${v.title}\n❮🌸❯➢ Autor/a:* ${v.author}\n❮🍎❯➢ • Url:* ${v.url}`).join`\n\n◊╌╌╌╌╌╌╌╌╌╌╌╌╌╌◊\n\n`;
    await conn.sendFile(m.chat, sfoto, 'error.jpg', res, m);
  } catch {
    await m.reply('❮🍎❯➢ *Ocurrió un error inesperado, por favor intente nuevamente.*');
  }
};
handler.command = ['stickersearch2', 'searchsticker2', 'stickerssearch2', 'searchstickers2'];
export default handler;
