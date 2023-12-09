import fetch from 'node-fetch';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fs from "fs";
import yts from 'yt-search';
let limit1 = 100;
let limit2 = 400;
let limit_a1 = 50;
let limit_a2 = 400;
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
  if (!text) throw `_*< DESCARGAS - PLAY />*_\n\n*[ ℹ️ ] Hace falta el título o enlace del video de YouTube.*\n\n*[ 💡 ] Ejemplo:* _${usedPrefix + command} Good Feeling - Flo Rida_`;
    const yt_play = await search(args.join(' '));
    let additionalText = '';
    if (command === 'play') {
      additionalText = 'audio';
    } else if (command === 'play2') {
      additionalText = 'vídeo';
    }
    const texto1 = `*╔═══❖•ೋ°ৡৢ͜͡  🍀 𖥨֗°ೋ•❖═══╗*
 ᬊ᭄ঔৣ͜͡ீ͜❥͜✅ 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐏𝐥𝐚𝐲 ✅ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  🍀 𖥨֗°ೋ•❖═══╝*

╭᥀·࣭࣪̇˖🍀◗ *NOMBRE/TITULO:*
║
╰◊➣ ${yt_play[0].title}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖💦◗ *PUBLICADO EN:*
║
╰◊➣ ${yt_play[0].ago}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖⏳◗ *TIEMPO/DURACION:*
║
╰◊➣ ${secondString(yt_play[0].duration.seconds)}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖😃◗ *NUMERO DE VISTAS:*
║
╰◊➣ ${`${MilesNumber(yt_play[0].views)}`}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖👑◗ *AUTOR/A | CREADOR/A:*
║
╰◊➣ ${yt_play[0].author.name}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖🏙️◗ *CANAL AUTOR/A:*
║
╰◊➣ ${yt_play[0].author.url}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖💖◗ *ID DEL VIDEO/AUDIO:*
║
╰◊➣ ${yt_play[0].videoId}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖🌹◗ *TIPO ¿Video? - ¿Audio?:*
║
╰◊➣ ${yt_play[0].type}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
╭᥀·࣭࣪̇˖⬇️◗ *ENLACE / URL DIRECTO:*
║
╰◊➣ ${yt_play[0].url}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

᥀·࣭࣪̇˖🌻◗ 𝚂𝚎 𝚎𝚜𝚝𝚊 𝚎𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚜𝚞 𝚌𝚘𝚗𝚝𝚎𝚗𝚒𝚍𝚘
𝚎𝚗 𝚏𝚘𝚛𝚖𝚊𝚝𝚘 ${additionalText}.
𝙿𝚘𝚛 𝚏𝚊𝚟𝚘𝚛 𝚎𝚜𝚙𝚎𝚛𝚎 𝚞𝚗 𝚖𝚒𝚗𝚞𝚝𝚘 𝚍𝚎𝚙𝚎𝚗𝚍𝚒𝚎𝚗𝚍𝚘
𝚍𝚎 𝚌𝚞𝚊𝚗𝚝𝚘 𝚙𝚎𝚜𝚎 𝚎𝚕 ${additionalText}.


💜 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💜`.trim();
    conn.sendMessage(m.chat, {image: {url: yt_play[0].thumbnail}, caption: texto1}, {quoted: m});
    if (command == 'play') {
    try {   
    const audio = global.API('ApiEmpire', `/api/v1/ytmp3?url=${yt_play[0].url}`)
    const ttl = await yt_play[0].title
    const buff_aud = await getBuffer(audio);
    const fileSizeInBytes = buff_aud.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const size = fileSizeInMB.toFixed(2);       
    if (size >= limit_a2) {  
    await conn.sendMessage(m.chat, {text: `*❍⃕⃟᎒⃟̀✅➣ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐒𝐔 ${audio} 𝐓𝐄𝐍𝐆𝐀 𝐏𝐀𝐂𝐈𝐄𝐍𝐂𝐈𝐀.*`}, {quoted: m});
    return;    
    }     
    if (size >= limit_a1 && size <= limit_a2) {  
    await conn.sendMessage(m.chat, {document: buff_aud, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {audio: buff_aud, mimetype: 'audio/mpeg', fileName: ttl + `.mp3`}, {quoted: m});   
    return;    
    }} catch {
    throw '*❮⚠️ 𝐄𝐑𝐑𝐎𝐑 / 𝐀𝐋𝐄𝐑𝐓𝐀  ⚠️❯:*\n*No se pudo descargar el video/audio, por favor intente nuevamente, si sale error varias veces, reporte este comando con el comando: #reporte*';    
    }}
    if (command == 'play2') {
    try {   
    const video = global.API('ApiEmpire', `/api/v1/ytmp4?url=${yt_play[0].url}`)
    const ttl2 = await yt_play[0].title
    const buff_vid = await getBuffer(video);
    const fileSizeInBytes2 = buff_vid.byteLength;
    const fileSizeInKB2 = fileSizeInBytes2 / 1024;
    const fileSizeInMB2 = fileSizeInKB2 / 1024;
    const size2 = fileSizeInMB2.toFixed(2);       
    if (size2 >= limit2) {  
    await conn.sendMessage(m.chat, {text: `*❍⃕⃟᎒⃟̀✅➣ 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐍𝐃𝐎 𝐒𝐔 ${video} 𝐓𝐄𝐍𝐆𝐀 𝐏𝐀𝐂𝐈𝐄𝐍𝐂𝐈𝐀.*`}, {quoted: m});
    return;    
    }     
    if (size2 >= limit1 && size2 <= limit2) {  
    await conn.sendMessage(m.chat, {document: buff_vid, mimetype: 'video/mp4', fileName: ttl2 + `.mp4`}, {quoted: m});   
    return;
    } else {
    await conn.sendMessage(m.chat, {video: buff_vid, mimetype: 'video/mp4', fileName: ttl2 + `.mp4`}, {quoted: m});   
    return;    
    }} catch {
    throw '*❮⚠️ 𝐄𝐑𝐑𝐎𝐑 / 𝐀𝐋𝐄𝐑𝐓𝐀  ⚠️❯:*\n*No se pudo descargar el video/audio, por favor intente nuevamente, si sale error varias veces, reporte este comando con el comando: #reporte*';    
    }
  }
};
handler.command = /^(play|play2)$/i;
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
  return search.videos;
}

function MilesNumber(number) {
  const exp = /(\d)(?=(\d{3})+(?!\d))/g;
  const rep = '$1.';
  const arr = number.toString().split('.');
  arr[0] = arr[0].replace(exp, rep);
  return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
  seconds = Number(seconds);
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const dDisplay = d > 0 ? d + (d == 1 ? 'd ' : 'd ') : '';
  const hDisplay = h > 0 ? h + (h == 1 ? 'h ' : 'h ') : '';
  const mDisplay = m > 0 ? m + (m == 1 ? 'm ' : 'm ') : '';
  const sDisplay = s > 0 ? s + (s == 1 ? 's' : 's') : '';
  return dDisplay + hDisplay + mDisplay + sDisplay;
}

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

const getBuffer = async (url, options) => {
    options ? options : {};
    const res = await axios({method: 'get', url, headers: {'DNT': 1, 'Upgrade-Insecure-Request': 1,}, ...options, responseType: 'arraybuffer'});
    return res.data;
};
