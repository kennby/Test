import fetch from 'node-fetch';
import axios from 'axios';
import cheerio from 'cheerio';
const handler = async (m, {conn, args, command, usedPrefix, text}) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*❮💜 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 💜❯: 𝗟𝗼𝘀 𝗰𝗼𝗺𝗮𝗻𝗱𝗼𝘀 +18 𝗻𝗼 𝗲𝘀𝘁𝗮𝗻 𝗽𝗲𝗿𝗺𝗶𝘁𝗶𝗱𝗼𝘀 𝗽𝗮𝗿𝗮 𝘂𝘀𝗼 𝗽𝘂𝗯𝗹𝗶𝗰𝗼 𝗻𝗶 𝗽𝗮𝗿𝗮 𝘂𝘀𝘂𝗮𝗿𝗶𝗼𝘀 𝗱𝗲 𝗺𝗲𝗻𝗼𝗿 𝗲𝗱𝗮𝗱.*';
  if (!args[0]) throw `*❲💜❳➤ Por favor ingrese un enlace valido de xvideos para descargarlo, por ejemplo: ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`;
  try {
    conn.reply(m.chat, '*❲⏳❳➤ El video se esta enviando, por favor espere unos minutos.*\n\n*❲👀❳➤ El video puede tardar dependiendo del peso del video.*', m);
    const res = await xvideosdl(args[0]);
    conn.sendMessage(m.chat, {document: {url: res.result.url}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
  } catch (e) {
   throw '*❲⛔ 𝙴𝚁𝚁𝙾𝚁/𝙵𝙰𝙻𝙻𝙾 ⛔❳*\n\n*❲🔊❳➤ Verifique que el enlace sea de xvideos, o similar a este:*\n*◉ https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*';
  }
};
handler.command = /^(xvideosdl)$/i;
export default handler;

async function xvideosdl(url) {
    return new Promise((resolve, reject) => {
		fetch(`${url}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {xmlMode: false});
     const title = $("meta[property='og:title']").attr("content")
     const keyword = $("meta[name='keywords']").attr("content")
     const views = $("div#video-tabs > div > div > div > div > strong.mobile-hide").text()+" views"
     const vote = $("div.rate-infos > span.rating-total-txt").text()
     const likes = $("span.rating-good-nbr").text()
     const deslikes = $("span.rating-bad-nbr").text()
     const thumb = $("meta[property='og:image']").attr("content")
     const url = $("#html5video > #html5video_base > div > a").attr("href")
    resolve({status: 200, result: {title, url, keyword, views, vote, likes, deslikes, thumb}})
   })
 })
};

async function xvideosSearch(url) {
    return new Promise(async (resolve) => {
     await axios.request(`https://www.xvideos.com/?k=${url}&p=${Math.floor(Math.random() * 9) +1}`, {method: "get"}).then(async result => {
    let $ = cheerio.load(result.data, {xmlMod3: false});
    let title = [];
    let duration = [];
    let quality = [];
    let url = [];
    let thumb = [];
    let hasil = [];
  
    $("div.mozaique > div > div.thumb-under > p.title").each(function(a,b){
      title.push($(this).find("a").attr("title"));
      duration.push($(this).find("span.duration").text());
      url.push("https://www.xvideos.com"+$(this).find("a").attr("href"));
    });
    $("div.mozaique > div > div.thumb-under").each(function(a,b){
      quality.push($(this).find("span.video-hd-mark").text());
    });
    $("div.mozaique > div > div > div.thumb > a").each(function(a,b){
      thumb.push($(this).find("img").attr("data-src"));
    });
    for(let i=0; i < title.length; i++){
      hasil.push({
        title: title[i],
        duration: duration[i],
        quality: quality[i],
        thumb: thumb[i],
        url: url[i]
      });
    }
    resolve(hasil);
  });
  });
  };
