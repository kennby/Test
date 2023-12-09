const toM = (a) => '@' + a.split('@')[0];
function handler(m, {groupMetadata}) {
  const ps = groupMetadata.participants.map((v) => v.id);
  const a = ps.getRandom();
  let b;
  do b = ps.getRandom();
  while (b === a);
  m.reply(`*💝 𝑯𝑶𝑳𝑨 ${toM(a)}, 𝑫𝑬𝑩𝑬𝑹𝑰𝑨𝑺 𝑪𝑨𝑺𝑨𝑹𝑻𝑬 𝑪𝑶𝑵: ${toM(b)}, 𝑯𝑨𝑪𝑬𝑵 𝑼𝑵𝑨 𝑩𝑶𝑵𝑰𝑻𝑨 𝑷𝑨𝑹𝑬𝑱𝑨 😍💜💝*`, null, {
    mentions: [a, b],
  });
}
handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['formarpareja', 'formarparejas'];
handler.group = true;
export default handler;
