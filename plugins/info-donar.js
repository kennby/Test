/* ⚠ POR FAVOR, TAMBIEN DARLE APOYO A BRUNO SOBRINO: ⚠

PayPal: https://www.paypal.me/TheShadowBrokers133
 */

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import fs from 'fs';
const handler = async (m, {conn, usedPrefix, command}) => {
  const name = await conn.getName(m.sender);
  const donar =`
. . . . . . . . . . . . . . . ꒰ ♡ ꒱ ,, ⌲˘͈ᵕ˘͈
💞 Holis ${name}
. . . . . . . . . . . . . . . ꒰ ♡ ꒱ ,, ⌲˘͈ᵕ˘͈
﹋﹋﹋﹋﹋﹋﹋﹋﹋
😊 Gracias por donar
te lo agradezco, el bot seguira
teniendo mas actualizaciones
en el futuro, por tu apoyo
nos esforzaremos a seguir el
paso de esta creacion. ✨
﹋﹋﹋﹋﹋﹋﹋﹋﹋
*💧 Paypal 💧:*
https://www.paypal.me/ColaboracionBotOFC
﹋﹋﹋﹋﹋﹋﹋﹋﹋
*🥏 ¿Mas dudas? 🥏*
*Contacta con GuardianBot-MD:*
https://wa.me/19145948340
﹋﹋﹋﹋﹋﹋﹋﹋﹋
💞 Gracias por tu
apoyo ${name} 😊
﹋﹋﹋﹋﹋﹋﹋﹋﹋
`.trim();
  const aa = {quoted: m, userJid: conn.user.jid};
  const res = generateWAMessageFromContent(m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: donar, secuenceNumber: '0', contextInfo: {mentionedJid: conn.parseMention()}}}, aa);
  conn.relayMessage(m.chat, res.message, {});
};
handler.help = ['donasi'];
handler.tags = ['info'];
handler.command = /^dona(te|si)|donar|apoyar$/i;
export default handler;
