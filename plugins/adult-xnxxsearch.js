import fetch from 'node-fetch';
const handler = async (m, {text, usedPrefix, command}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `*❮💜 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 💜❯: 𝗟𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 +18 𝗻𝗼 𝗲𝘀𝘁𝗮𝗻 𝗽𝗲𝗿𝗺𝗶𝘁𝗶𝗱𝗼𝘀 𝗽𝗮𝗿𝗮 𝘂𝘀𝗼 𝗽𝘂𝗯𝗹𝗶𝗰𝗼 𝗻𝗶 𝗽𝗮𝗿𝗮 𝘂𝘀𝘂𝗮𝗿𝗶𝗼𝘀 𝗱𝗲 𝗺𝗲𝗻𝗼𝗿 𝗲𝗱𝗮𝗱.*`;   
  if (!text) throw `*❮💞❯➢ Por favor, ingrese el comando con un texto, por ejemplo: ${usedPrefix + command} Con mi amiga*`;
  try {
    const vids_ = {
      from: m.sender,
      urls: [],
    };
    if (!global.videoListXXX) {
      global.videoListXXX = [];
    }
    if (global.videoListXXX[0]?.from == m.sender) {
      global.videoListXXX.splice(0, global.videoListXXX.length);
    }
    const res = await xnxxsearch(text);
    const json = res.result;
    let cap = `*❮✅ RESULTADOS - MITSURI BOT ✅❯:*\n•» ${text.toUpperCase()}\n\n`;
    let count = 1;
    for (const v of json) {
      const linkXXX = v.link;
      vids_.urls.push(linkXXX);
      cap += `𖥨ํ∘̥⃟⸽⃟🎆➣ *NUMERO:*\n*[${count}]*\n\n𖥨ํ∘̥⃟⸽⃟🔥➣*NOMBRE/TITULO:*\n${v.title}\n\n𖥨ํ∘̥⃟⸽⃟⬇️➣ *ENLACE/LINK:*\n${v.link}\n\n𖥨ํ∘̥⃟⸽⃟🛡️➣ *INFORMACIÓN:*\n${v.info}`;
      cap += '\n\n' + '✿ ----------------- ✿ ------------------ ✿' + '\n\n';
      count++;
    }
    m.reply(cap);
    global.videoListXXX.push(vids_);
  } catch {
    throw e;
  }
};
handler.help = ['xnxxsearch'].map((v) => v + ' <query>');
handler.tags = ['downloader', 'premium'];
handler.command = /^xnxxsearch|xnxxs$/i;
export default handler;

async function xnxxsearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = [];
      const url = [];
      const desc = [];
      const results = [];
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb').each(function(c, d) {
          url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
        });
      });
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb-under').each(function(c, d) {
          desc.push($(d).find('p.metadata').text());
          $(d).find('a').each(function(e, f) {
            title.push($(f).attr('title'));
          });
        });
      });
      for (let i = 0; i < title.length; i++) {
        results.push({title: title[i], info: desc[i], link: url[i]});
      }
      resolve({code: 200, status: true, result: results});
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
}


