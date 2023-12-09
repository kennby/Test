import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  if (!text) return conn.reply(m.chat, '*❮🍁❯➤ Por favor ingrese el codigo mas el nombre de usuario del tiktoker para buscarlo.*', m);
  try {
    const res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${lolkeysapi}`);
    const res2 = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=${lolkeysapi}`;
    const json = await res.json();
    if (res.status !== 200) throw await res.text();
    if (!json.status) throw json;
    const thumb = await (await fetch(json.result.user_picture)).buffer();
    const Mitsuri = `
*╔═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╗*
   ᬊ᭄ঔৣ͜͡ீ͜❥͜🧧 𝐓𝐢𝐤𝐓𝐨𝐤 𝐁𝐨𝐭 🧧ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╝*

╭─╼━━━══━━━≺🍁≻━━━══━━━╾─╮

❲👤❳➤ *𝙽𝙾𝙼𝙱𝚁𝙴:*

❒➣ ${json.result.nickname}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌

❲🌎❳➤ *𝚄𝚂𝚄𝙰𝚁𝙸𝙾/𝙰:*

❒➣ ${json.result.username}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌

❲🌆❳➤ *𝚅𝙸𝙳𝙴𝙾𝚂 𝙿𝚄𝙱𝙻𝙸𝙲𝙾𝚂:*

❒➣ ${json.result.video}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌

❲👥❳➤ *𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚁𝙴𝚂:*

❒➣ ${json.result.followers}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌

❲😍❳➤ *𝚂𝙴𝙶𝚄𝙸𝙳𝙾𝚂:*

❒➣ ${json.result.followings}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌

❲❤️❳➤ *𝙻𝙸𝙺𝙴𝚂:*

❒➣ ${json.result.likes}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌

❲🎆❳➤ *𝙱𝙸𝙾/𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽:*

❒➣ ${json.result.bio}

╌╌╌╌╌╌╌╌╌╌╌╌╌╌

💜 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 - 𝙱𝙾𝚃 - 𝙼𝙳 - 𝙾𝙵𝙲 💜

╰─╼━━━══━━━≺🍁≻━━━══━━━╾─╯

*╔═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╗*
   ᬊ᭄ঔৣ͜͡ீ͜❥͜🧧 𝐓𝐢𝐤𝐓𝐨𝐤 𝐁𝐨𝐭 🧧ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╝*`.trim();
    conn.sendFile(m.chat, res2, 'error.jpg', Mitsuri, m, false);
  } catch (e) {
    throw '*❮⚠️❯➤ Error en la busqueda, por favor verifique que todo edte bien, y vuelva a intentarlo.*';
  }
};
handler.help = ['tiktokstalk'].map((v) => v + ' ❬username❭');
handler.tags = ['stalk'];
handler.command = /^(tiktokstalk|ttstalk)$/i;
export default handler;
