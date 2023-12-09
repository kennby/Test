import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""

//APARTADO DE OWNERS PARA EL BOT
global.owner = [
  ['51958907754', '💖 Mitsuri - Bot - MD - OFC💖', true],
  ['19146103450', 'Owner Mitsuri 1 💘', true],
  ['51947454367', 'Owner Mitsuri 2 💘', true],
  ['5493873452654', 'Owner Mitsuri 3 💘', true],
  ['19145948340', 'Owner Mitsuri 4 💘', true],
  ['19147094259', 'Owner Mitsuri 5 💘', true],
  ['5493873687620', 'Owner Mitsuri 6 💘', true]]
];
//┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

global.suittag = ['51958907754'];
global.prems = ['51958907754'];


//Globals para mensajeria del bot
global.packname = '𝑳𝒊𝒛•𝒀𝒂𝒏𝒆𝒕𝒉';
global.author = '💞 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💞';
global.wm = '💜 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💜';
global.titulowm = '👑 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 𝐁𝐨𝐭 𝐌𝐃 | 𝐋𝐈𝐙 𝐎𝐅𝐈𝐂𝐈𝐀𝐋 👑';
global.titulowm2 = `🍡 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 𝐌𝐈𝐓𝐒𝐔𝐑𝐈 🍡`
global.igfg = '💞 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💞';
global.wait = '*❲🍡❳ 𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨...*';

//┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

//Dirección de imagenes o videos del bot en menus o otros contenidos.
global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/MitsuriBotMD.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./src/MenuMitsuriBot-MD.jpg');

//┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

global.mods = [];

//┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄
global.wm2 = `👑 ${dia} ✓ ${fecha} 👑\n• 💞 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💞`;
global.gt = '💞 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💞';
global.mysticbot = '💞 𝐌𝐢𝐭𝐬𝐮𝐫𝐢 - 𝐁𝐨𝐭 - 𝐌𝐃 💞';
global.md = 'https://github.com/SerizawaBeta-MD/';
global.mysticbot = 'https://github.com/SerizawaBeta-MD/';
global.waitt = '*❲🍡❳ 𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨...*\n*❬19%❭ ▰▰▱▱▱▱▱▱▱▱*';
global.waittt = '*❲🍡❳ 𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨...*\n*❬68%❭ ▰▰▰▰▰▰▱▱▱▱*';
global.waitttt = '*❲🍡❳ 𝐂𝐚𝐫𝐠𝐚𝐧𝐝𝐨...*\n*❬98%❭ ▰▰▰▰▰▰▰▰▰▱*';
global.nomorown = '51958907754';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n💞 Mitsuri Bot MD 💞\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊➛*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `𝗗𝗔𝗧𝗢:  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗘 𝗠 𝗣 𝗢: ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
