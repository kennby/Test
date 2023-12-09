const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const img = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
  const optionsFull = `
*🏙️╍❮💜 OPCIONES DISPONIBLES 💜❯╍🏙️*
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} welcome
╎
╎ *[✅ Descripción ✅]:*
╎Activa o desactiva la bienvenida
╎en el grupo.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 / 𝙿𝚄𝙱𝙻𝙸𝙲 𝙱𝙾𝚃🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} public
╎
╎ *[✅ Descripción ✅]:*
╎El Bot se vuelve de uso publico
╎y/o privado.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá ser
╎usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙼𝙾𝙳𝙾 𝙷𝙾𝚃 / 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} modohorny
╎
╎ *[✅ Descripción ✅]:*
╎Activa o desactiva los comandos +18
╎en el grupo.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 / 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺🍀:*
╎
╎ *[😍Comando😍]:*
╎ ${usedPrefix + command} antilink
╎
╎ *[✅Descripción✅]:*
╎Activa o desactiva el anti-enlaces
╎de WhatsApp.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Se necesita tener activo el restrict.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 2 / 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺2🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} antilink2
╎
╎ *[✅ Descripción ✅]:*
╎Activa o desactiva el anti-enlaces
╎que inician en HTTPS.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Se necesita tener activo el restrict.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙳𝙴𝚃𝙴𝙲𝚃𝙰𝚁 𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾🍀:*
╎
╎ *[ 😍Comando 😍]:*
╎ ${usedPrefix + command} detect
╎
╎ *[✅ Descripción ✅]:*
╎Activa o desacriva las notificaciones
╎de cambios en el grupo.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙳𝙴𝚃𝙴𝙲𝚃𝙰𝚁 𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 2🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} detect2
╎
╎ *[✅ Descripción ✅]:*
╎Detecta modificaciones en el
╎grupo y mantiene una mejor gestion.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} restrict
╎
╎ *[✅ Descripción ✅]:*
╎Activa o desactiva las restricciones
╎del Bot, como la de sacar o agregar
╎personas a un grupo.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá ser
╎usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚅𝙸𝚂𝚃𝙾𝚂🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} autoread
╎
╎ *[✅ Descripción ✅]:*
╎Marca como leido los mensajes
╎y los estados automáticamente.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá
╎ser usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝚄𝙳𝙸𝙾𝚂 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙾𝚂🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} audios
╎
╎ *[✅ Descripción ✅]:*
╎Activa o desactiva los comandos
╎de audios sin prefijos, en el grupo.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝚄𝚃𝙾 𝚂𝚃𝙸𝙲𝙺𝙴𝚁🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} autosticker 
╎
╎ *[✅ Descripción ✅]:*
╎Todas las imagenes o videos
╎enviados en el grupo se convierten
╎en stickers. 
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙿𝙲𝙾𝙽𝙻𝚈🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} pconly
╎
╎ *[✅ Descripción ✅]:*
╎El Bot solo responderá a los
╎comandos si es un chat privado.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá
╎ser usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙶𝙲𝙾𝙽𝙻𝚈🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} gconly
╎
╎ *[✅ Descripción ✅]:*
╎El Bot solo respondera a los
╎comandos si es un grupo. 
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá ser
╎usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝚄𝙽𝙰 𝚅𝙴𝚉🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} antiviewonce
╎
╎ *[✅ Descripción ✅]:*
╎Las imagenes enviadas para
╎ver solo una vez, son reenviadas
╎normal por el Bot. 
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙻𝙰𝙼𝙰𝙳𝙰𝚂🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} anticall
╎
╎ *[✅ Descripción ✅]:*
╎El Bot bloquerá a las personas
╎que llamen al Bot. 
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podra
╎ser usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝙿𝚁𝙸𝚅𝙰𝙳𝙾🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} antiprivado
╎
╎ *[✅ Descripción ✅]:*
╎El Bot bloquerá a las personas
╎que escriban al privado del Bot. 
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá ser
╎usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝚃𝙾𝚇𝙸𝙲𝙾/𝙰🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} antitoxic
╎
╎ *[✅ Descripción ✅]:*
╎Detecta la malas palabras y
╎advierte al participante del
╎grupo, antes de ser eliminado.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Se necesita tener activo el restrict.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝚃𝚁𝙰𝙱𝙰𝚂🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} antitraba
╎
╎ *[✅ Descripción ✅]:*
╎El Bot detecta textos largos
╎que podrian ser virus y causar
╎lag en el chat y elimina al usuario.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Se necesita tener activo el restrict.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝙰𝚁𝙰𝙱𝙴𝚂🍀:*
╎ 
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} antiarabes
╎
╎ *[✅ Descripción ✅]:*
╎Si un numero árabe se uné al
╎grupo, el Bot lo elimina
╎automaticamente.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Se necesita tener activo
╎el welcome y el restrict.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝙰𝚁𝙰𝙱𝙴𝚂 2🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} antiarabes2
╎
╎ *[✅ Descripción ✅]:*
╎Si un numero árabe escribe en
╎el grupo, el Bot lo elimina
╎automaticamente.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Se necesita tener activo el restrict.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙼𝙾𝙳𝙾 𝙹𝙰𝙳𝙸𝙱𝙾𝚃 / 𝙼𝙸𝚃𝚂𝚄𝚁𝙸🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} modejadibot
╎
╎ *[✅ Descripción ✅]:*
╎Activa o desactiva el uso del comando
╎para sub bots
╎ (${usedPrefix}serbot / ${usedPrefix}jadibot). 
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá ser
╎usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙼𝙾𝙳𝙾 𝙰𝙳𝙼𝙸𝙽🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} modoadmin
╎
╎ *[✅ Descripción ✅]:*
╎El Bot solo responderá a los
╎admins del grupo.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚂𝙸𝙼𝚂𝙸𝙼𝙸🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} simsimi
╎
╎ *[✅ Descripción ✅]:*
╎El Bot empezará a responder
╎a los mensajes usando
╎la IA de SimSimi.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝚂𝙿𝙰𝙼🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} antispam
╎
╎ *[✅ Descripción ✅]:*
╎El Bot detecta cuando un
╎usuario hace spam de comando
╎y lo banea por 5 segundos
╎y lo advierte.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá ser
╎usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁🍀:*
╎
╎ *[😍 Comando 😍]:*
╎${usedPrefix + command} antidelete
╎
╎ *[✅ Descripción ✅]:*
╎El Bot detecta cuando un usuario
╎elimina un mensaje y lo reenvía.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝚄𝙳𝙸𝙾𝚂 𝙱𝙾𝚃🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} audios_bot
╎
╎ *[✅ Descripción ✅]:*
╎Se desactivan los audios del
╎Bot del menuaudios para todos
╎los chats privados.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá
╎ser usado por owners del Bot.
🌆┅┅┅┅┅┅┅┅┄┄┄┄ • • • •
╎ *🍀𝙼𝙾𝙳𝙾 𝙸𝙰 / 𝙲𝙷𝙰𝚃𝙶𝙿𝚃🍀:*
╎
╎ *[😍 Comando 😍]:*
╎ ${usedPrefix + command} modoia
╎
╎ *[✅ Descripción ✅]:*
╎Se activa el modo "Inteligencia Artificial"
╎con GPT en todos los chats privados.
╎
╎ *[🛡️ Nota 🛡️]:*
╎Este comando solo podrá ser
╎usado por owners del Bot.
╎
*╎💜 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 💜*
*🏙️╍❮👑 OPCIONES DISPONIBLES 👑❯╍🏙️*`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {url, img}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `❲🍀❳➤ *𝙾𝙿𝙲𝙸𝙾𝙽/𝙵𝚄𝙽𝙲𝙸𝙾𝙽:*\n${type}\n❲🚀❳➤ *𝙴𝚂𝚃𝙰𝙳𝙾:*\n${isEnable ? '*✅ 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 ✅*' : '*⛔ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 ⛔*'}\n❲😍❳➤ *𝙿𝙰𝚁𝙰:*${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃 ✅' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 ✅'}`}, {quoted: m});
};
handler.help = ['en', 'dis'].map((v) => v + 'able <option>');
handler.tags = ['group', 'owner'];
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
