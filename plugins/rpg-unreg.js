import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*𖥨ํ∘̥⃟⸽⃟💜❯➤ Por favor ingrese su numero de serie, si no lo recuerda puede usar este comando, para ver su numero de serie: #myns*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*𖥨ํ∘̥⃟⸽⃟⚠️❯➤ Numero de serie incorrecto, compruebe que lo haya escrito bien por favor.*\n\n*𖥨ํ∘̥⃟⸽⃟💜❯➤ Si no lo recuerda puede usar este comando para ver su numero de serie: #myns*';
  user.registered = false;
  m.reply(`*𖥨ํ∘̥⃟⸽⃟✅❯➤ El numero de serie es correcto, ya ha cerrado su registro, para registrarte nuevamente, puede usar el comando: #reg Nombre.Edad*\n\n*Por ejemplo:*\n*#reg Liz.18*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^unreg(ister)?$/i;
handler.register = true;
export default handler;
