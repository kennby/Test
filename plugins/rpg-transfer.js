const items = ['limit', 'exp'];
const confirmation = {};

async function handler(m, { conn, args, usedPrefix, command }) {
  if (confirmation[m.sender]) return conn.sendMessage(m.chat, {text: '*❮💰❯ Aun hay fondos de transferencia, por favor espere un momento.*', mentions: [m.sender]}, {quoted: m});
  const user = global.db.data.users[m.sender];
  const item = items.filter((v) => v in user && typeof user[v] == 'number');
  const lol = `*╔━═━═━═┨🎊 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 🎊┠═━═━═━╗* 
*┆ 𝑬𝑱𝑬𝑴𝑷𝑳𝑶 𝑫𝑬 𝑼𝑺𝑶 𝑷𝑨𝑹𝑨 𝑬𝑺𝑻𝑬 𝑪𝑶𝑴𝑨𝑵𝑫𝑶.*
*╚━═━═━═┨🎊 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 🎊┠═━═━═━╝*

Pᴀʀᴀ ᴛʀᴀɴsғᴇʀɪʀ ᴜsᴀʀʟᴏ ᴅᴇ ᴇsᴛᴀ ғᴏʀᴍᴀ:
*${usedPrefix + command}*  [tipo] [cantidad] [@user]

❮💎❯ Eᴊᴇᴍᴘʟᴏ ғɪᴊᴏ ᴘᴀʀᴀ ᴅɪᴀᴍᴀɴᴛᴇs:
${usedPrefix + command} limit 5 @${m.sender.split('@')[0]}

❮⚡❯ Eᴊᴇᴍᴘʟᴏ ғɪᴊᴏ ᴘᴀʀᴀ ᴇxᴘᴇʀɪᴇɴᴄɪᴀ:
${usedPrefix + command} exp 100 @${m.sender.split('@')[0]}
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
*❬💰 ARTICULOS TRANSFERIBLES 💰❭:*

❲💎❳➢ 𝚃𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚒𝚛 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜, 𝚎𝚜𝚌𝚛𝚒𝚋𝚊:
❒➺ *limit*

❲⚡❳➢ 𝚃𝚛𝚊𝚗𝚜𝚏𝚎𝚛𝚒𝚛 𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊, 𝚎𝚜𝚌𝚛𝚒𝚋𝚊:
❒➺ *exp*
╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌

💜 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 💜
`.trim();
  const type = (args[0] || '').toLowerCase();
  if (!item.includes(type)) return conn.sendMessage(m.chat, {text: lol, mentions: [m.sender]}, {quoted: m});
  const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : '';
  if (!who) return conn.sendMessage(m.chat, {text: '*❮❤️❯ Por favor mensiona el/la usuario/a que desea transferir.*', mentions: [m.sender]}, {quoted: m});
  if (!(who in global.db.data.users)) return conn.sendMessage(m.chat, {text: `*❮🛡️❯ El/la usuario/a: ${who} no esta en la base de datos del bot.*`, mentions: [m.sender]}, {quoted: m});
  if (user[type] * 1 < count) return conn.sendMessage(m.chat, {text: `*❮🚫❯ No tienes suficiente/s: ${type} para procesar con la transferencia, por favor intente nuevamente mas tarde.*`, mentions: [m.sender]}, {quoted: m});
  let img = './media/Menu1.jpg';
const confirm = `*╔━═━═━═┨🎊 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 🎊┠═━═━═━╗* 
*┆¿Estas seguro/a que quieres hacer*
*┆una transferencia con el/la usuario/a*
*┆ @${(who || '').replace(/@s\.whatsapp\.net/g, '')}?*
*┝╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌*
*┆• Numero/Cantidad:*
*┆ ${count} ✅*
*┆*
*┆• Tipo/Articulo:*
*┆ ${type} ✅*
*┝╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌*
*┆• TIEMPO DE CONFIRMACIÓN:*
*┆⏳ Tienes 60 segundos de tiempo*
*┝╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌*
*┆• Para confirmar la transferencia •:*
*┆*
*┆Si = para transferir ✅*
*┆*
*┆No = para cancelar tranferencia ✅*
*┝╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌*
*┆Gracias por usar Mitsuri Bot MD*
*┆se le agradece xd.*
*╚━═━═━═┨🎊 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 🎊┠═━═━═━╝*

💞 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 - 𝙼 𝙳💞`.trim();
  await conn.sendMessage(m.chat, {text: confirm, mentions: [who]}, {image: img}, {quoted: m});
  confirmation[m.sender] = { sender: m.sender, to: who, message: m, type, count, timeout: setTimeout(() => (conn.sendMessage(m.chat, {text: '*❮⏳❯ Transferencia cancelada, se demoro y paso los 60 segundos, por favor vuelva a intentarlo mas tarde.*', mentions: [m.sender]}, {quoted: m}), delete confirmation[m.sender]), 60 * 1000)};
}

handler.before = async (m) => {
  if (m.isBaileys) return;
  if (!(m.sender in confirmation)) return;
  if (!m.text) return;
  const { timeout, sender, message, to, type, count } = confirmation[m.sender];
  if (m.id === message.id) return;
  const user = global.db.data.users[sender];
  const _user = global.db.data.users[to];
  if (/^No|no$/i.test(m.text)) {
    clearTimeout(timeout);
    delete confirmation[sender];
    return conn.sendMessage(m.chat, {text: '*❮⛔ CANCELADO/DESCARTADO ⛔❯:*\n*• la transferencia fue cancelada, gracias por su atencion.*', mentions: [m.sender]}, {quoted: m});
  }
  if (/^Si|si$/i.test(m.text)) {
    const previous = user[type] * 1;
    const _previous = _user[type] * 1;
    user[type] -= count * 1;
    _user[type] += count * 1;
    if (previous > user[type] * 1 && _previous < _user[type] * 1) {
      conn.sendMessage(m.chat, {text: `*❮✅ TRANSFERENCIA EXITOSA ✅❯*:\n*• Se transfirieron exitosamente.*\n• *Numero/Cantidad:*\n» ${count}\n• *Tipo/Articulo:*\n» ${type}\n\n• *Se transfirieron correctamente con el/la usuario/a:*\n*» @${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, mentions: [to]}, {quoted: m});
    } else {
      user[type] = previous;
      _user[type] = _previous;
      conn.sendMessage(m.chat, {text: `*❮⛔ ERROR ⛔❯, no se pudo transferir: ${count} ${type} con el/la usuario/a @${(to || '').replace(/@s\.whatsapp\.net/g, '')}, por favor intente nuevamente.*`, mentions: [to]}, {quoted: m});
    }
    clearTimeout(timeout);
    delete confirmation[sender];
  }
};
handler.help = ['transfer'].map((v) => v + ' [tipo] [cantidad] [@tag]');
handler.tags = ['xp'];
handler.command = ['payxp', 'transfer', 'darxp', 'transferir'];
handler.disabled = false;
export default handler;

function special(type) {
  const b = type.toLowerCase();
  const special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '');
  return special;
}
function isNumber(x) {
  return !isNaN(x);
}
