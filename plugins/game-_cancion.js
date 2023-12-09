import similarity from 'similarity';
const threshold = 0.72;
const handler = {
  async before(m) {
    const id = m.chat;
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/ADIVINA EL TITULO DE LA CANCION/i.test(m.quoted.text)) return !0;
    this.tebaklagu = this.tebaklagu ? this.tebaklagu : {};
    if (!(id in this.tebaklagu)) return m.reply('❮👑❯➤ 𝙀𝙡 𝙟𝙪𝙚𝙜𝙤 𝙖 𝙩𝙚𝙧𝙢𝙞𝙣𝙖𝙙𝙤...');
    if (m.quoted.id == this.tebaklagu[id][0].id) {
      const json = JSON.parse(JSON.stringify(this.tebaklagu[id][1]));
      if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        global.db.data.users[m.sender].exp += this.tebaklagu[id][2];
        m.reply(`❮😍❯➤ 𝘾𝙤𝙧𝙧𝙚𝙘𝙩𝙤!!! 𝙜𝙖𝙣𝙖𝙨:\n+${this.tebaklagu[id][2]} 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖.✨`);
        clearTimeout(this.tebaklagu[id][3]);
        delete this.tebaklagu[id];
      } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`Casii!`);
      else m.reply(`❮😂❯➤ 𝙀𝙨 𝙞𝙣𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙤`);
    }
    return !0;
  },
  exp: 0,
};
export default handler;
