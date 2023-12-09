const handler = async (m, {text}) => {
  const user = global.db.data.users[m.sender];
  user.afk = + new Date;
  user.afkReason = text;
  m.reply(`*❮💦❯➢ El/a usuario/a: ${conn.getName(m.sender)} estara inactivo/a, favor de no etiquetarlo/a*\n\n*❮💜 MOTIVO DE INACTIVIDAD 💜❯:*\n*${text ? ': ' + text : ''}*
`);
};
handler.help = ['afk [alasan]'];
handler.tags = ['main'];
handler.command = /^afk$/i;
export default handler;
