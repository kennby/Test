const handler = async (m, {conn, text}) => {
  const [nomor, pesan, jumlah] = text.split('|');
  if (!nomor) throw '*❮🛡️❯➣ Por favor, ingrese el numero para mandarle un mensaje de spam.*\n*❮🍁❯➣ Uso correcto del comando:*\n*➣ #spamwa numero|texto|cantidad*\n*💞 Otro ejemplo:*\n*➣ #spamwa 5219999999999|Pero por que xuxa no lespondes :u|25*';
  if (!pesan) throw '*❮🛡️❯➣ Por favor, ingrese el mensaje para el spam que desea enviar.*\n*❮🌴❯➣ Uso correcto del comando:*\n*➣ #spamwa numero|texto|cantidad*\n*🍄 Otro ejemplo:*\n*➣ #spamwa 5219999999999|Pero por que xuxa no lespondes :u|25*';
  if (jumlah && isNaN(jumlah)) throw '*❮🛡️❯➣ La cantidad deve de ser un numero.*\n*❮💦❯➣ Uso correcto del comando:*\n*➣ #spamwa numero|texto|cantidad*\n*🍁 Otro ejemplo:*\n*➣ #spamwa 5219999999999|responde :v|25*';

  const fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net';
  const fixedJumlah = jumlah ? jumlah * 1 : 10;
  if (fixedJumlah > 50) throw '*❮⛔❯➣ Demasiado spam, el numero limite de enviar mensajes de spam es de 50.*️';
  await m.reply(`*❮✅❯➣ Se realizo el spam con el numero: ${nomor} fue realizado exitosamente.*\n*😻 CANTIDAD ENVIADA 😻*\n*➣ ${fixedJumlah} VECES!*`);
  for (let i = fixedJumlah; i > 1; i--) {
    if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m);
  }
};
handler.help = ['spamwa <number>|<mesage>|<no of messages>'];
handler.tags = ['General'];
handler.command = /^spam(wa)?$/i;
handler.group = false;
handler.premium = true;
// handler.private = true
// handler.limit = true
export default handler;
