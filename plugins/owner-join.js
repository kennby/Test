const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '*𖥨ํ∘̥⃟⸽⃟💎➙ Enlace/Link del grupo erroneo, o faltante, por favor, ingrese un enlace valido de un grupo de WhatsApp.*\n\n*𖥨ํ∘̥⃟⸽⃟💎➙ Por ejemplo:*\n*#join https://chat.whatsapp.com/DzmG2KYxUt88jW33vRCzpy*';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '*𖥨ํ∘̥⃟⸽⃟✅➙ El bot se unio al grupo exitosamente, disfrute del bot.*\n\n\n𖥨ํ∘̥⃟⸽⃟🛡️➙ *El bot de saldra automáticamente si el grupo solo trata de mandar por o gore, etc de esas cosas, no esta admitido para este bot, lo cual si eso es lo que hay en el grupo, se saldrá en un corto tiempo.*'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '*𖥨ํ∘̥⃟⸽⃟💖➙ El link de su grupo fue enviado a mi propietario/a.*\n\n*𖥨ํ∘̥⃟⸽⃟💎➙ Su grupo estará en evaluación y el propietario/a del Bot decidirá si agrega o no al Bot.*\n\n*𖥨ํ∘̥⃟⸽⃟🍀➙ Algunas de las razones por la cual su solicitud puede ser rechazada son:*\n*𖥨ํ∘̥⃟⸽⃟1️⃣➙ El Bot está saturado.*\n*𖥨ํ∘̥⃟⸽⃟2️⃣➙ El Bot fue eliminado del grupo recientemente.*\n*𖥨ํ∘̥⃟⸽⃟3️⃣➙ El link del grupo ha sido restablecido.*\n*𖥨ํ∘̥⃟⸽⃟4️⃣➙ El Bot no se agrega a grupos por decisión del propietario/a.*\n\n*𖥨ํ∘̥⃟⸽⃟💎➙ El proceso de evaluación puede tomar algo de tiempo, incluso dias, tenga paciencia.*'}, {quoted: m});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*𖥨ํ∘̥⃟⸽⃟🍄➙ NUEVA SOLICITUD DE UN BOT PARA UN GRUPO💖💖*\n\n*𖥨ํ∘̥⃟⸽⃟🔥➙ Solicitante:* ' + '@' + m.sender.split('@')[0] + '\n*𖥨ํ∘̥⃟⸽⃟💎➙ Link del grupo:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '*𖥨ํ∘̥⃟⸽⃟⛔➙ Lo sentimos, algo salio mal por favor reportelo o vuelva a intentarlo.*';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|nuevogrupo$/i;
handler.private = true;
export default handler;
