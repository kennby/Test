const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌═══╍╍╍❲💖 *Nota de pago* 💖❳╍╍╍═══┐
│𖥨ํ∘̥⃟⸽⃟🍁➤ *Compra nominal:*
│• + ${count}💎 
┝━┉┉┉┉┄┄┄┄┄┄
│𖥨ํ∘̥⃟⸽⃟🔥➤ *Gastado:*
│• -${xpperlimit * count} XP
└═══╍╍╍❲🍀 *Mitsuri Bot MD*🍀❳╍╍╍═══┘`, m);
  } else conn.reply(m.chat, `◦ᮀᨘ۬․ٰ৴💦੭ Lo siento no tienes suficiente exp para comprar: *${count}* Diamantes, puedes jugar los rpg, #minar, #work, #aventura, #mates, #cofre, para ganar experiencia y comprar mas diamantes. 🎀`, m);
};
handler.help = ['Buy', 'Buyall'];
handler.tags = ['xp'];
handler.command = ['buy', 'buyall'];

handler.disabled = false;

export default handler;
