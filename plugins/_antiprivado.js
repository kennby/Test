export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`*❬🌻❭➦ Hola usuario/a:*\n*• @${m.sender.split`@`[0]}*\n\n*❬🍓❭➦. Esta prohibido hablar en privado con el numero del bot oficial, se te bloqueara automáticamente.*\n\n*❬💖❭➦ Tenias una pregunta o consultar algo urgentemente?*\n*Puedes hablar a estos contactos de abajo para recibir asistencia.*\n\n*"Support GuardianBot-MD"*\nhttps://wa.me/5493873452654?text=Tengo%20una%20consulta%20que%20decir%20de%20parte%20de%20💖%20Mitsuri%20Bot%20MD%20💖\n\n*"GuardianBot-MD Oficial"*\nhttps://wa.me/19145948340?text=Tengo%20una%20consulta%20que%20decir%20de%20parte%20de%20💖%20Mitsuri%20Bot%20MD%20💖\n\n*"Asistencia Ego_Official"*\nhttps://wa.me/5493873687620?text=Tengo%20una%20consulta%20que%20decir%20de%20parte%20de%20💖%20Mitsuri%20Bot%20MD%20\n\n*"Ego_Official"*\nhttps://wa.me/19146103450?text=Tengo%20una%20consulta%20que%20decir%20de%20parte%20de%20💖%20Mitsuri%20Bot%20MD%20💖\n\nGracias por su atencion @${m.sender.split`@`[0]} 🌻`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}
