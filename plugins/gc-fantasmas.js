const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*❮🥳❯➤ Este grupo es activo, no tiene fantasmas 🥳💞*`, m);
  m.reply(`*❮🔁 REVISANDO USUARIOS 🔁❯:*\n\n*😻 Grupo:* ${await conn.getName(m.chat)}\n*👥 Miembros del grupo:* ${sum}\n\n*❮💦 Lista de fantasmas 💦❯:*\n${sider.map((v) => '  ❮👻❯➤ @' + v.replace(/@.+/, '')).join('\n')}\n\n*🛡️ NOTA 🛡️:*\n_Esto no puede ser acertado al 100, ya que el bot inicia el conteo justamente al dia que agregaron el bot el grupo._`, null, {mentions: sider});
};
handler.command = /^(verfantasmas|fantasmas|sider)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
