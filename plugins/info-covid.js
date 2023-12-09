import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command}) => {
  if (!text) throw `*❮💖❯➤ Por favor ingrese el numero de pais, por ejemplo: ${usedPrefix + command} Argentina*`;
  const res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)));
  if (!res.ok) throw await res.text();
  const json = await res.json();
  if (!json.confirmed) throw 'País?';
  if (json.confirmed) {
    m.reply(`
💖 M I T S U R I - B O T - M D 💖
    
❮🎆❯➤ *País:*
${text}

❮🛡️❯➤ *Confirmado:*
${json.confirmed.value}

❮🤨❯➤ *Curado:*
${json.recovered.value}

❮💀❯➤ *Muertes:*
${json.deaths.value}

❮❤️‍🔥❯➤ *Info Actualizada:*
${json.lastUpdate}
`.trim());
  } else throw json;
};
handler.help = ['covid'].map((v) => v + ' <país>');
handler.tags = ['info'];
handler.command = /^(corona|covid|covid19)$/i;
export default handler;
