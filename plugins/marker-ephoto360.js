import {Maker} from 'imagemaker.js';
const handler = async (m, {conn, args, command, usedPrefix}) => {
  const response = args.join(' ').split('|');
  if (!args[0]) throw '*❮❤️❯➜ Por favor, ingresa un texto corto uwu.*';
  if (command == 'logocorazon', 'logomitsuricorazon') {
    try {
      await conn.reply(m.chat, '*❮❤️❯➜ Se esta creando su logo, espere un momento por favor...*', m);
      const res = await new Maker().Ephoto360('https://en.ephoto360.com/text-heart-flashlight-188.html', [response[0]]);
      await conn.sendFile(m.chat, res.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*❮⛔❯➜ Ocurrio un error, vuelva a intentarlo por favor...*', m);
    }
  }
  if (command == 'logochristmas') {
    try {
      await conn.reply(m.chat, '*❮❤️❯➜ Se esta creando su logo, espere un momento por favor...*', m);
      const res2 = await new Maker().Ephoto360('https://en.ephoto360.com/christmas-effect-by-name-376.html', [response[0]]);
      await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m);
    } catch {
      await conn.reply(m.chat, '*❮⛔❯➜ Ocurrio un error, vuelva a intentarlo por favor...*', m);
    }
  }
/* if (command == 'logoephoto360') {
if (!response[0].includes('ephoto360')) throw `*❮❤️❯➜ Por favor, ingresé un enlace de "EPHOTO360", mas el texto que desea agregar.*

*❮❤️❯➜ Ejemplo del enlace:*

➜ https://en.ephoto360.com/create-3d-text-effect-on-the-beach-online-688.html | Mitsuri

➜ https://en.ephoto360.com/create-a-graffiti-text-effect-on-the-wall-online-665.html | Mitsuri | Bot`
try {
await conn.reply(m.chat, '*❮❤️❯➜ Se esta creando su logo, espere un momento por favor...*', m)
let res2 = await new Maker().Ephoto360(response[0], [response[1]], [response[2]])
await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m)
} catch {
await conn.reply(m.chat, '*❮⛔❯➜ Ocurrio un error, vuelva a intentarlo por favor...*', m)}}
if (command == 'logotextpro') {
try {
await conn.reply(m.chat, '*❮❤️❯➜ Se esta creando su logo, espere un momento por favor...*', m)
let res2 = await new Maker().TextPro(response[0], [response[1], response[2]])
await conn.sendFile(m.chat, res2.imageUrl, 'error.jpg', null, m)
} catch {
await conn.reply(m.chat, '*❮⛔❯➜ Ocurrio un error, vuelva a intentarlo por favor...*', m)}}*/
};
handler.command = /^logocorazon|logochristmas|logoephoto360|logotextpro/i;
export default handler;
