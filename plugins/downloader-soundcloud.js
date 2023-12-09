import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) throw `*❬🍀❭➢ Por favor, ingrese el nombre de la cancion para buscarlo.*`;
  try {
    const res = await fetch(`https://api-v2.soundcloud.com/search/tracks?q=${text}&client_id=iZIs9mchVcX5lhVRyQGGAYlNPVldzAoX`);
    const json2 = await res.json();
    let permalinkUrl;
    if (json2.collection.length > 0) {
      const randomIndex = Math.floor(Math.random() * json2.collection.length);
      const randomObject = json2.collection[randomIndex];
      permalinkUrl = randomObject.permalink_url;
    } else {
      permalinkUrl = await json2.collection[0].permalink_url;
    }
    const res2 = await fetch(`https://api.akuari.my.id/downloader/scdl?link=${permalinkUrl}`);
    const json = await res2.json();
    const shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${json.link}`)).text();
    const soundcloudt = `╒═══❮💚 𝑺𝒐𝒖𝒏𝒅𝑪𝒍𝒐𝒖𝒅 💚❯═┅┄• • •\n┝⟆❮🔥❯⟅➢ 𝐓𝐈𝐓𝐔𝐋𝐎/𝐍𝐎𝐌𝐁𝐑𝐄:\n┝❒➢ ${json.title}\n├╌╌╌╌╌╍╍╍═◊\n┝⟆❮💧❯⟅➢ 𝐄𝐍𝐋𝐀𝐂𝐄/𝐔𝐑𝐋\n┝❒➢ ${shortUrl}\n├╌╌╌╌╌╍╍╍═◊\n┝⟆❮🍀❯⟅➢ 𝐄𝐍𝐕𝐈𝐀𝐍𝐃𝐎...\n┝❒➢ *Por favor espere un minuto...*\n├╌╌╌╌╌╍╍╍═◊\n│💜 MITSURI - BOT - MD 💜\n╘═══❮💚 𝑺𝒐𝒖𝒏𝒅𝑪𝒍𝒐𝒖𝒅 💚❯═┅┄• • •`;
    await conn.sendFile(m.chat, json.thumb, '', soundcloudt, m);
    await conn.sendMessage(m.chat, {audio: {url: json.link}, fileName: `${json.title}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch {
    throw '*❬🌹❭➢ Ocurrio un error inesperado, por favor vuelva a intentarlo, si sale nuevamente el error puede reportar este comando con el comando: #reportar*';
  }
};
handler.command = /^(soundcloud|cover)$/i;
export default handler;
