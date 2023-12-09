export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`
  *❮💦❯➢ Dejaste de estar inactivo/a usuario/a${user.afkReason ? ' depues de estar inactivo/a por el motivo por:\n ' + user.afkReason : ''}*
  
  
  *❮🎊❯➢ Tienpo de inactividad del usuario/a: ${(new Date - user.afk).toTimeString()}*
  `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`*❮⚠️ NO ETIQUETAR ⚠️❯*

*❮💜❯➢ El/la usuario/a que etiqueto, esta inactivo/a, por favor no molestar.*      
*❮🚀❯➢ ${reason ? 'Motivo de inactividad: ' + reason : 'Motivo de inactividad: _𝙴𝚕 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚗𝚘 𝚙𝚞𝚜𝚘 𝚞𝚗 𝚖𝚘𝚝𝚒𝚟𝚘._'}*
*❮💦❯➢ Tiempo de inactividad transcurrido: ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
}
