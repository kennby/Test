const handler = async (m, { conn }) => {
  let txt = '';
try {    
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '𖥨ํ∘̥⃟⸽⃟✅➙ 𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚' : '𖥨ํ∘̥⃟⸽⃟⛔➙ 𝙀𝙭 𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚';
    const totalParticipants = participants.length;
    txt += `*𖥨ํ∘̥⃟⸽⃟🥏➙ 𝙂𝙧𝙪𝙥𝙤 ${i + 1}*
    
    *𖥨ํ∘̥⃟⸽⃟❤️➙ Nombre:*
    ➢ ${await conn.getName(jid)}
    
    *𖥨ํ∘̥⃟⸽⃟✨➙ ID:*
    ${jid}
    
    *𖥨ํ∘̥⃟⸽⃟👑➙ Admin:*
    ➢ ${isBotAdmin ? '𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣 ✅' : '𝘽𝙤𝙩 𝙣𝙤 𝘼𝙙𝙢𝙞𝙣 ⛔'}
    
    *𖥨ํ∘̥⃟⸽⃟💜➙ Estado:*
    ➢ ${participantStatus}
    
    *𖥨ํ∘̥⃟⸽⃟💝➙ Total de Participantes:*
    ➢ ${totalParticipants}
    
    *𖥨ํ∘̥⃟⸽⃟😻➙ Link:*
    ➢ ${isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(jid) || '🛡️ 𝙀𝙍𝙍𝙊𝙍 🛡️'}` : '❤️ 𝙀𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 ❤️'}\n\n`;
  }
  m.reply(`*𖥨ํ∘̥⃟⸽⃟🧡➙ 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩*\n\n*𖥨ํ∘̥⃟⸽⃟💖➙ 𝙏𝙤𝙩𝙖𝙡 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨:* ${totalGroups}\n\n${txt}`.trim());
} catch {
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats);
  const totalGroups = groups.length;
  for (let i = 0; i < groups.length; i++) {
    const [jid, chat] = groups[i];
    const groupMetadata = ((conn.chats[jid] || {}).metadata || (await conn.groupMetadata(jid).catch((_) => null))) || {};
    const participants = groupMetadata.participants || [];
    const bot = participants.find((u) => conn.decodeJid(u.id) === conn.user.jid) || {};
    const isBotAdmin = bot?.admin || false;
    const isParticipant = participants.some((u) => conn.decodeJid(u.id) === conn.user.jid);
    const participantStatus = isParticipant ? '𖥨ํ∘̥⃟⸽⃟✅➙ 𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚' : '𖥨ํ∘̥⃟⸽⃟⛔➙ 𝙀𝙭 𝙋𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚';
    const totalParticipants = participants.length;    
    txt += `*𖥨ํ∘̥⃟⸽⃟🥏➙ 𝙂𝙧𝙪𝙥𝙤 ${i + 1}*
    
    *𖥨ํ∘̥⃟⸽⃟❤️➙ Nombre:*
    ➢ ${await conn.getName(jid)}
    
    *𖥨ํ∘̥⃟⸽⃟✨➙ ID:*
    ➢ ${jid}
    
    *𖥨ํ∘̥⃟⸽⃟👑➙ Admin:*
    ➢ ${isBotAdmin ? '𝘽𝙤𝙩 𝘼𝙙𝙢𝙞𝙣 ✅' : '𝘽𝙤𝙩 𝙣𝙤 𝘼𝙙𝙢𝙞𝙣 ⛔'}
    
    *𖥨ํ∘̥⃟⸽⃟💜➙ Estado:*
    ➢ ${participantStatus}
    
    *𖥨ํ∘̥⃟⸽⃟💝➙ Total de Participantes:*
    ➢ ${totalParticipants}
    
    *𖥨ํ∘̥⃟⸽⃟😻➙ Link:*
    ➢ ${isBotAdmin ? '🛡️ 𝙀𝙍𝙍𝙊𝙍 🛡️' : '❤️ 𝙀𝙡 𝙗𝙤𝙩 𝙣𝙤 𝙚𝙨 𝙖𝙙𝙢𝙞𝙣 ❤️'}\n\n`;
  }
  m.reply(`*𖥨ํ∘̥⃟⸽⃟🧡➙ 𝙇𝙞𝙨𝙩𝙖 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩.*\n\n*𖥨ํ∘̥⃟⸽⃟💖➙ 𝙏𝙤𝙩𝙖𝙡 𝙙𝙚 𝙜𝙧𝙪𝙥𝙤𝙨:* ${totalGroups}\n\n${txt}`.trim());
 }    
};
handler.help = ['groups', 'grouplist'];
handler.tags = ['info'];
handler.command = /^(groups|grouplist|listadegrupo|gruposlista|listagrupos|listgroup)$/i;
handler.rowner = true;
handler.private = true
export default handler;
