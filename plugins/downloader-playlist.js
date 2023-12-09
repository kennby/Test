import yts from 'yt-search';
import fs from 'fs';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*১︧.۪̇〬°⃟᮪݇⃟⃟💚➢ No se ingreso el nombre de la canción, por favor ingrese el titulo/nombre de la cancion para descargarlo.*\n\n*১︧.۪̇〬°⃟᮪݇⃟⃟💜➢ Por ejemplo:*\n*${usedPrefix + command} Fät tony - unholy*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoList) {
      global.videoList = [];
    }
    if (global.videoList[0]?.from == m.sender) {
      global.videoList.splice(0, global.videoList.length);
    }
    const results = await yts(text);
    const textoInfo = `*❲🍃❳➮ Para descargar el video o musica, puedes hacerlo de esta forma:*

❲🔥❳➮ ${usedPrefix}audio *❲Numero❳*
❲💧❳➮ ${usedPrefix}video *❲Numero❳* 

*❲💚❳➮ Ejemplo de uso:*

*❒➣ Ejemplo de audio:
${usedPrefix}audio 5*

*❒➣ Ejemplo de video:
${usedPrefix}video 8*

*💜 Mitsuri - Bot - MD 💜*`.trim();
    const teks = results.all.map((v, i) => {
      const link = v.url;
      vids_.urls.push(link);
      return `⟆❲🍀❳⟆➢ *_NUMERO:_*
❒➮ [${i + 1}]

⟆❲🌆❳⟆➢ *_NOMBRE/TITULO:_*
❒➮ ${v.title}

⟆❲⬇️❳⟆➢ *_ENLACE/URL:_*
❒➮ ${v.url}

⟆❲⏳❳⟆➢ *_TIEMPO DE DURACION:_*
❒➮ ${v.timestamp}

⟆❲🌎❳⟆➢ *_SUBIDO EN:_*
❒➮ ${v.ago}

⟆❲👀❳⟆➢ *_CANTIDAD DE VISTAS:_*
❒➮ ${v.views}`;
    }).join('\n\n•══════❲ *Mitsuri - Bot - MD* ❳══════•\n\n');
    conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, m);
    global.videoList.push(vids_);
  } catch {
    await m.reply('*❮🚫❯➢ Ocurrio un error inesperado, por favor compruebe que el nombre este correcto o intente nuevamente con otro nombre.*');
  }
};
handler.help = ['playlist *❬Texto❭*'];
handler.tags = ['search'];
handler.command = /^playlist|playlist2$/i;
export default handler;
