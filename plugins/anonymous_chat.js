async function handler(m, {usedPrefix, command}) {
  command = command.toLowerCase();
  this.anonymous = this.anonymous ? this.anonymous : {};
  switch (command) {
    case 'next':
    case 'leave': {
      const room = Object.values(this.anonymous).find((room) => room.check(m.sender));
      if (!room) return this.sendMessage(other, {text: `*𖥨ํ∘̥⃟⸽⃟💞➢ Usted no esta en un chat anónimo.*\n\n*𖥨ํ∘̥⃟⸽⃟🌿➢ ¿Quieres iniciar uno?*\n𖥨ํ∘̥⃟⸽⃟😘➢ Puedes escribir el siguiente comando: ${usedPrefix}start`}, {quoted: m});
      // this.sendButton(m.chat, '*𖥨ํ∘̥⃟⸽⃟💞➢ Usted no esta en un chat anónimo.*\n\n*𖥨ํ∘̥⃟⸽⃟🌿➢ ¿Quieres iniciar uno?*\n_😍 Puedes clickear el boto de abajo 😍_', author, null, [['🔥 Iniciar chat anónimo 🔥', `.start`]], m)
      m.reply('*「✅」EXITO/CORRECTO「✅」*\n*• Usted a salido con éxito al chat anonimo.*');
      const other = room.other(m.sender);
      if (other) await this.sendMessage(other, {text: `*𖥨ํ∘̥⃟⸽⃟🧧➢ El/la otro/a usuario/a, a abandonado el chat anónimo.*\n\n*𖥨ํ∘̥⃟⸽⃟🔮➢ ¿Quieres ir a otro chat anonimo para continuar?*\n𖥨ํ∘̥⃟⸽⃟😘➢ Puedes escribir el siguiente comando: ${usedPrefix}start`}, {quoted: m});
      // this.sendButton(other, '*𖥨ํ∘̥⃟⸽⃟🧧➢ El/la otro/a usuario/a, a abandonado el chat anónimo.*\n\n*𖥨ํ∘̥⃟⸽⃟🧧➢ El/la otro/a usuario/a, a abandonado el chat anónimo.*\n\n*𖥨ํ∘̥⃟⸽⃟🔮➢ ¿Quieres ir a otro chat anonimo para continuar?*\n_Puede dar click en el siguiente boton 😍_', author, null, [['💬 Iniciar Chat 💬', `.start`]], m)
      delete this.anonymous[room.id];
      if (command === 'leave') break;
    }
    case 'start': {
      if (Object.values(this.anonymous).find((room) => room.check(m.sender))) return this.sendMessage(m.chat, {text: `*𖥨ํ∘̥⃟⸽⃟🏆➢ Todavia estas en un chat anonimo, o esperando a que otro/a usuario/a se una al chat.*\n\n*𖥨ํ∘̥⃟⸽⃟🤔➢ ¿Quieres salir del chat anonimo?*\n𖥨ํ∘̥⃟⸽⃟😘➢ Puedes escribir el siguiente comando: ${usedPrefix}leave`}, {quoted: m});
      // this.sendButton(m.chat, '*𖥨ํ∘̥⃟⸽⃟🏆➢ Todavia estas en un chat anonimo, o esperando a que otro/a usuario/a se una al chat.*\n\n*𖥨ํ∘̥⃟⸽⃟🤔➢ ¿Quieres salir del chat anonimo?*\n_Puedes dar click en el siguiente botón 😍_', author, null, [['💞 Leave 💞', `.leave`]], m)
      const room = Object.values(this.anonymous).find((room) => room.state === 'WAITING' && !room.check(m.sender));
      if (room) {
        await this.sendMessage(room.a, {text: `*「✅」NUEVO/A - USUARIO/A「✅」*\n*• Un/a nuevo/a usuario/a se ha unido al chat anonimo, pueden iniciar a chatear!!*`}, {quoted: m});
        // this.sendButton(room.a, '*「✅」NUEVO/A - USUARIO/A「✅」*\n*• Un/a nuevo/a usuario/a se ha unido al chat anonimo, pueden iniciar a chatear!!*', author, null, [['👑 Ir a itro chat 👑', `.next`]], m)
        room.b = m.sender;
        room.state = 'CHATTING';
        await this.sendMessage(m.chat, {text: `*「✅」NUEVO/A - USUARIO/A「✅」*\n*• Un/a nuevo/a usuario/a se ha unido al chat anonimo, pueden iniciar a chatear!!*\n\n𖥨ํ∘̥⃟⸽⃟😘➢ Si quieres ir a otro chat, puedes escribir el siguiente comando: ${usedPrefix}next`}, {quoted: m});
        // this.sendButton(m.chat, '*「✅」NUEVO/A - USUARIO/A「✅」*\n*• Un/a nuevo/a usuario/a se ha unido al chat anonimo, pueden iniciar a chatear!!*', author, null, [['😍 Ir a otro chat 😍', `.next`]], m)
      } else {
        const id = + new Date;
        this.anonymous[id] = {
          id,
          a: m.sender,
          b: '',
          state: 'WAITING',
          check: function(who = '') {
            return [this.a, this.b].includes(who);
          },
          other: function(who = '') {
            return who === this.a ? this.b : who === this.b ? this.a : '';
          },
        };
        await this.sendMessage(m.chat, {text: `*𖥨ํ∘̥⃟⸽⃟🧧➢ Esperando a otro/a usuario/a que se una al chat anonimo.*\n\n*𖥨ํ∘̥⃟⸽⃟🤔➢ ¿Quieres salir del chat anónimo?*\n𖥨ํ∘̥⃟⸽⃟😘➢ Puedes usar el siguiente comando: ${usedPrefix}leave`}, {quoted: m});
        // this.sendButton(m.chat, '*𖥨ํ∘̥⃟⸽⃟🧧➢ Esperando a otro/a usuario/a que se una al chat anonimo.*\n\n*𖥨ํ∘̥⃟⸽⃟🤔➢ ¿Quieres salir del chat anónimo?*\n_Puedes dar click en el siguiente boton 😍_', author, null, [['💞 Leave 💞', `.leave`]], m)
      }
      break;
    }
  }
}
handler.help = ['start', 'leave', 'next'];
handler.tags = ['anonymous'];
handler.command = ['start', 'leave', 'next'];
handler.private = true;
export default handler;
