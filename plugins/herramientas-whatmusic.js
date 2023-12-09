import fs from 'fs';
import acrcloud from 'acrcloud';
const acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu',
});

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (/audio|video/.test(mime)) {
    if ((q.msg || q).seconds > 20) return m.reply('*❮🌷 INFORMACIÓN IMPORTANTE 🌷❯:*\n\n❮💞❯➣ El archivo es demasiado grande, por favor se le pide que corte el archivo por lo menos a 10 o 20 segundos, del audio es suficiente para identificarlo.');
    const media = await q.download();
    const ext = mime.split('/')[1];
    fs.writeFileSync(`./tmp/${m.sender}.${ext}`, media);
    const res = await acr.identify(fs.readFileSync(`./tmp/${m.sender}.${ext}`));
    const {code, msg} = res.status;
    if (code !== 0) throw msg;
    const {title, artists, album, genres, release_date} = res.metadata.music[0];
    const txt = `
*❮😍 RESULTADOS ENCONTRADOS 😍❯:*

❒➤ *Titulo/Nombre:*
° ${title}

❒➤ *Artista:*
° ${artists !== undefined ? artists.map((v) => v.name).join(', ') : 'Artista desconocido.'}

❒➤ *Album:*
° ${album.name || 'Album desconocido.'}

❒➤ *Genero:*
° ${genres !== undefined ? genres.map((v) => v.name).join(', ') : 'No encontrado.'}

❒➤ *Fecha de lanzamiento:*
${release_date || 'No hay fecha de lanzamiento.'}
`.trim();
    fs.unlinkSync(`./tmp/${m.sender}.${ext}`);
    m.reply(txt);
  } else throw '*⚠️ ERROR ⚠️, por favor, responde a un audio.*';
};
handler.command = /^quemusica|quemusicaes|whatmusic$/i;
export default handler;
