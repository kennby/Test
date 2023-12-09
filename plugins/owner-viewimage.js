
let handler = async (m, { text }) => {
  if (!text) throw `❮💜❯➤ 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁, 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙿𝙴𝚃𝙰 𝙿𝙰𝚁𝙰 𝙱𝚄𝚂𝙲𝙰𝚁 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽.`;
  let ext = text.split('.').pop();
  let path = `${text}`;
  if (!fs.existsSync(path)) throw `❮💝❯➤ 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙽𝙾 𝙴𝚇𝙸𝚂𝚃𝙴 𝙴𝙽 𝙻𝙰 𝙲𝙰𝚁𝙿𝙴𝚃𝙰 𝚁𝙰𝙸𝚉...`;
  let media = await fs.readFileSync(path);
  let mimeType = `image/${ext}`;
  m.reply(media, null, { thumbnail: await (await fetch(`data:${mimeType};base64,${media.toString('base64')}`)).buffer() });
};

handler.help = ['viewimage <nome>'];
handler.tags = ['tools'];
handler.command = /^(viewimage|vi)$/i;
handler.owner = true;

export default handler;
