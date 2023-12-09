const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*❮👑 INFORMACIÓN DEL GRUPO 👑❯:*\n
*❮✅❯➤ Identificación del grupo:* 
${groupMetadata.id}

❮🍁❯➤ *Nombre del grupo:* 
${groupMetadata.subject}

❮💞❯➤ *Descripción del grupo:* 
${groupMetadata.desc?.toString() || 'No tiene descripción...'}

❮👥❯➤ *Cantidad de participantes:*
${participants.length} Participantes

❮👑❯➤ *Creador/a del grupo:* 
@${owner.split('@')[0]}

❮🎉❯➤ *Administradores del grupo:*
${listAdmin}

*💞 Comandos agregados al grupo 💞:*

❒➜ *Welcome/Bienvenida:*
${welcome ? '✅ Activado ✅' : '⛔ Desactivado ⛔'}

❒➜ *Detect/Detector:*
${detect ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 

❒➜ *Detect2/Detector 2:*
${detect2 ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 

❒➜ *Antilink/Anti enlaces:*
${antiLink ? '✅ Activado ✅' : '⛔ Desactivado ⛔'}
 
❒➜ *Antilink2/Anti enlaces 2:*
${antiLink2 ? '✅ Activado ✅' : '⛔ Desactivado ⛔'}
 
❒➜ *ModoHorny/Modo Hot:*
${modohorny ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 

❒➜ *Autosticker/Stickers Automáticos:*
${autosticker ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 

❒➜ *Audios:*
${audios ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 

❒➜ *Anti ver una vez:*
${antiviewonce ? '✅ Activado ✅' : '⛔ Desactivado ⛔'}
 
❒➜ *Antidelete/Anti eliminar:*
${antidelete ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 

❒➜ *Antitoxic/ Anti toxicos:*
${antiToxic ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 

❒➜ *Anti traba:*
${antiTraba ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 

❒➜ *Modo admin/Solo admins:*
${modoadmin ? '✅ Activado ✅' : '⛔ Desactivado ⛔'} 
`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['infogrup'];
handler.tags = ['group'];
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i;
handler.group = true;
export default handler;
