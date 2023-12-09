import gplay from "google-play-scraper";

let handler = async (m, { conn, text }) => {
  if (!text) throw "**";
  let res = await gplay.search({ term: text });
  if (!res.length) throw `*💜➤ Por favor ingrese el nombre de la apk/aplicacion que quiera buscar en Play Store.*`;
  let opt = {
    contextInfo: {
      externalAdReply: {
        title: res[0].title,
        body: res[0].summary,
        thumbnail: (await conn.getFile(res[0].icon)).data,
        sourceUrl: res[0].url,
      },
    },
  };
  await console.log(res);
  res = res.map(
    (v) =>
      `*❪🌻ฺ࣭࣪͘ꕸ▸ TITULO/NOMBRE:*
       ❬❒❭➢ ${v.title}
       
       ─────────
       
       *❪👑ฺ࣭࣪͘ꕸ▸ DESARROLLADOR/A:*
       ❬❒❭➢ ${v.developer}
       
       ─────────
       
       *❪🎊ฺ࣭࣪͘ꕸ▸ ¿PAGA?/¿GRATIS?:*
       ❬❒❭➢ ${v.priceText}
       
       ─────────
       
       *❪⭐ฺ࣭࣪͘ꕸ▸ PUNTUACIONES:*
       ❬❒❭➢ ${v.scoreText}
       
       ─────────
       
       *❪⬇️ฺ࣭࣪͘ꕸ▸ ENLACE/URL:*
       ❬❒❭➢${v.url}`
        ).join`\n◊┄┄┄┄•┄┄┄┄┄┄┄•┄┄┄┄◊\n`;
  m.reply(res, null, opt);
};
handler.help = ['playstore <aplicacion>'];
handler.tags = ['internet'];
handler.command = /^(playstore)$/i;
export default handler;
