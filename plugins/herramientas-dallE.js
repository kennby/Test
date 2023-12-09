import fetch from 'node-fetch';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*❬🍁❭➤ Por favor, ingrese un texto para crear una imagen, y asi usar la funcion de dall-e*\n\n*❬🍁❭➤ Ejemplos del comando:*\n*➤ ${usedPrefix + command} perrito pequeño*\n*➤ ${usedPrefix + command} kimetsu no yaiba gyomei*`;
    await conn.sendMessage(m.chat, {text: '*❬⏳❭➤ Se esta creando la imagen, por favor esperé un momento...*'}, {quoted: m});
  try {
    const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
    const json1 = await tiores1.json();
    await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
  } catch {  
      console.log('❬⛔❭➤ Error en la API numero 1 de dall-e.');  
  try {
    const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
  } catch {
      console.log('❬⛔❭➤ Error en la API numero 2 de dall-e.');
  try {
    const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
    const json3 = await tiores3.json();
    await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
  } catch {
      console.log('❬⛔❭➤ Error en la API numero 3 de dall-e.');
  try {
    const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
    await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
  } catch {
    console.log('⚠️ ERROR ⚠️: ningun api es funcional.');
    throw `*❬⛔❭➤ Error, no se encontraron los resultados.*`;
  }}
 }}
};
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
export default handler;
