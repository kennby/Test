import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
╔╤═♢═♢═♢═ ≪ °👑° ≫ ═♢═♢═♢═╗
║│💞 𝐎𝐅𝐂 - 𝐌𝐈𝐓𝐒𝐔𝐑𝐈 - 𝐁𝐎𝐓 - 𝐌𝐃 💞
╠╪═════┉┉┉┉┈┈┈ • • •
║│𝐇𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨/𝐚:
║│✧➢ ${taguser}
╠╪═════┉┉┉┉┈┈┈ • • •
║│💖 𝐀𝐂𝐓𝐈𝐕𝐈𝐃𝐀𝐃 𝐁𝐎𝐓 💖
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ *Tiempo activo:*
║│ ${uptime} ⏳
║│
║│✧➢ *Usuarios regs:*
║│ ${rtotalreg} ✅
║│
║│✧➢ *Usuarios totales:*
║│ ${rtotal} 👤
╠╪═════┉┉┉┉┈┈┈ • • •
║│🌎 𝐓𝐔 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍 🌎
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ *👑 Tu nivel:* 
║│➭ ${level}
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ *💞 Tu experiencia:* 
║│➭ ${exp}
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ *🚀 Tu rango:* 
║│➭ ${role}
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ *💎 Tus diamantes:* 
║│➭ ${limit}
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ *💖 BotCoins:* 
║│➭ ${money}
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ *🪙 Tokens:* 
║│➭ ${joincount}
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ *🏆 ¿Premium?:*
║│➭ ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ ${readMore}
╠╪═════┉┉┉┉┈┈┈ • • •
║│✧➢ ${(conn.user.jid == global.conn.user.jid ? '' : `Mitsuri-Bot-MD de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || '*Este es el Bot oficial*'}
╚╧═♢═♢═♢═ ≪ °👑° ≫ ═♢═♢═♢═╝



╔╤═══❖•ೋ°ৡৢ͜͡  💎 𖥨֗°ೋ•❖═══╗
║│ 🌃 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝚁 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 🌃
╠╪═════┉┉┉┉┈┈┈ • • •
║│ Mensajes en espera
║│ _${usedPrefix}fixmsgespera_
║│ Mensajes en espera (owner)
║│ _${usedPrefix}dsowner_
╚╧═══❖•ೋ°ৡৢ͜͡  💎 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  💖 𖥨֗°ೋ•❖═══╗
║│ 💜 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙱𝙾𝚃 💜
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🌻➤ _${usedPrefix}terminosycondiciones_
║│ஓீۣ̤֟͜🌻➤ _${usedPrefix}grupos_
║│ஓீۣ̤֟͜🌻➤ _${usedPrefix}estado_
║│ஓீۣ̤֟͜🌻➤ _${usedPrefix}infobot_
║│ஓீۣ̤֟͜🌻➤ _${usedPrefix}speedtest_
║│ஓீۣ̤֟͜🌻➤ _${usedPrefix}donar_
║│ஓீۣ̤֟͜🌻➤ _${usedPrefix}owner_
║│ஓீۣ̤֟͜🌻➤ _${usedPrefix}script_
║│ஓீۣ̤֟͜🌻➤ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╚╧═══❖•ೋ°ৡৢ͜͡  💖 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🍁 𖥨֗°ೋ•❖═══╗
║│ 🍡 𝙼𝙸𝙽𝙸 𝙹𝚄𝙴𝙶𝙾𝚂 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 🍡
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}mates *❲noob │ easy │ medium │ hard │ extreme │impossible │impossible2❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}fake *❲texto1❳ ❲@tag❳ ❲texto2❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}ppt *❲papel │ tijera │piedra❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}prostituto *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}prostituta *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}gay2 *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}lesbiana *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}pajero *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}pajera *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}puto *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}puta *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}manco *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}manca *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}rata *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}love *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}doxear *❲nombre │ @tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}pregunta *❲texto❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}suitpvp *❲@tag❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}slot *❲apuesta❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}ttt *❲nombre sala❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}delttt_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}acertijo_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}simi *❲texto❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}top *❲texto❳*_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}topgays_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}topotakus_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}formarpareja_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}verdad_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}reto_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}cancion_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}pista_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}akinator_
║│ஓீۣ̤֟͜🎰➤ _${usedPrefix}wordfind_
╚╧═══❖•ೋ°ৡৢ͜͡  🍁 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🌄 𖥨֗°ೋ•❖═══╗
║│ 👑 𝚁𝙿𝙶 𝙻𝙴𝚅𝙴𝙻 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 👑
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}adventure_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}cazar_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}cofre_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}balance_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}claim_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}heal_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}lb_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}levelup_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}myns_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}perfil_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}work_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}minar_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}minar2_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}buy_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}buyall_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}verificar_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}robar *❲cantidad❳ ❲@tag❳*_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}transfer *❲tipo❳ ❲cantidad❳ ❲@tag❳*_
║│ஓீۣ̤֟͜🪙➤ _${usedPrefix}unreg *❲numero de serie❳*_
╚╧═══❖•ೋ°ৡৢ͜͡  🌄 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🌳 𖥨֗°ೋ•❖═══╗
║│🥏 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃 🥏
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}token
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}enable restrict_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}disable restrict_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}enable autoread_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}disable autoread_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}enable antispam_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}disable antispam_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}enable anticall_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}disable anticall_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}enable modoia_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}disable modoia_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}enable audios_bot_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}disable audios_bot_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}enable antiprivado_
║│ஓீۣ̤֟͜💞➤ _${usedPrefix}disable antiprivado_
╚╧═══❖•ೋ°ৡৢ͜͡  🌳 𖥨֗°ೋ•❖═══╝  



╔╤═══❖•ೋ°ৡৢ͜͡  🌻 𖥨֗°ೋ•❖═══╗
║│ 🍇 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝚈 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 🍇
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *welcome*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *welcome*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *modohorny*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *modohorny*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *antilink*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *antilink*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *antilink2*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *antilink2*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *detect*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *detect*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *audios*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *audios*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *autosticker*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *autosticker*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *antiviewonce*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *antiviewonce*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *antitoxic*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *antitoxic*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *antitraba*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *antitraba*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *antiarabes*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *antiarabes*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *modoadmin*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *modoadmin*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}enable *antidelete*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}disable *antidelete*_
╚╧═══❖•ೋ°ৡৢ͜͡  🌻 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🐋 𖥨֗°ೋ•❖═══╗
┣ 🌹 𝚁𝙴𝙿𝙾𝚁𝚃𝙰𝚁 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 🌹
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜💋➤ _${usedPrefix}reporte *❲texto❳*_
╚╧═══❖•ೋ°ৡৢ͜͡  🐋 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🌎 𖥨֗°ೋ•❖═══╗
║│ 💖 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂 💖
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}instagram *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}mediafire *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}gitclone *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}gdrive *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}tiktok *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}tiktokimg *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}xnxxdl *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}xvideosdl *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}twitter *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}fb *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}ytshort *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}ytmp3 *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}ytmp4 *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}ytmp3doc *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}ytmp4doc *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}videodoc *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}dapk2 *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}stickerpack *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}play *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}play2 *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}play.1 *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}play.2 *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}playdoc *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}playdoc2 *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}playlist *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}spotify *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}ringtone *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}soundcloud *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}imagen *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}pinterest *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}wallpaper *❲texto❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}pptiktok *❲nombre de usuario❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}igstalk *❲nombre de usuario❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}igstory *❲nombre de usuario❳*_
║│ஓீۣ̤֟͜⬇️➤ _${usedPrefix}tiktokstalk *❲username❳*_
╚╧═══❖•ೋ°ৡৢ͜͡  🌎 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🧸 𖥨֗°ೋ•❖═══╗
║│ 🚀 𝙶𝙾𝙾𝙶𝙻𝙴 𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁𝙴𝚂 🚀
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}githubsearch *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}pelisplus *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}modapk *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}stickersearch *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}stickersearch2 *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}xnxxsearch *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}animeinfo *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}google *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}letra *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}wikipedia *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}ytsearch *❲texto❳*_
║│ஓீۣ̤֟͜🔥➤ _${usedPrefix}playstore *❲texto❳*_
╚╧═══❖•ೋ°ৡৢ͜͡  🧸 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🌱 𖥨֗°ೋ•❖═══╗
║│ 💝 𝚄𝙽𝙴 𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 𝙰𝚀𝚄𝙸 💝
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🌆➤ _${usedPrefix}join *❲enlace │ link │ url❳*_
╚╧═══❖•ೋ°ৡৢ͜͡  🌱 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🔮 𖥨֗°ೋ•❖═══╗
║│💗 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙿𝙰𝚁𝙰 𝙶𝚁𝚄𝙿𝙾𝚂 💗
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}add *❲numero❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}kick *❲@tag❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}kick2 *❲@tag❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}listanum *❲texto❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}kicknum *❲texto❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}grupo *❲abrir │ cerrar❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}grouptime *❲opcion❳ ❲tiempo❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}promote *❲@tag❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}demote *❲@tag❳*_
║│ஓீۣ̤֟͜🍓➤ _admins *❲texto❳*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}demote *❲@tag❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}infogroup_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}resetlink_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}link_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}setname *❲texto❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}setdesc *❲texto❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}invocar *❲texto❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}setwelcome *❲texto❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}setbye *❲texto❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}hidetag *❲texto❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}hidetag *❲audio❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}hidetag *❲video❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}hidetag *❲imagen❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}warn *❲@tag❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}unwarn *❲@tag❳*_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}listwarn_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}fantasmas_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}destraba_
║│ஓீۣ̤֟͜🍓➤ _${usedPrefix}setpp *❲imagen❳*_
╚╧═══❖•ೋ°ৡৢ͜͡  🔮 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🏆 𖥨֗°ೋ•❖═══╗
║│💞 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙸𝙳𝙾𝚁𝙴𝚂 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 💞
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}toanime *❲imagen❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}togifaud *❲video❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}toimg *❲sticker❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}tomp3 *❲video❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}tomp3 *❲nota de voz❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}toptt *❲video │ audio❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}tovideo *❲sticker❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}tourl *❲video │ imagen │ audio❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}tts *❲idioma❳ ❲texto❳*_
║│ஓீۣ̤֟͜🍀➤ _${usedPrefix}tts *❲efecto❳ ❲texto❳*_
╚╧═══❖•ೋ°ৡৢ͜͡  🏆 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🚀 𖥨֗°ೋ•❖═══╗
║│🍃 𝙻𝙾𝙶𝙾𝚂 𝚈 𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 🦋
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}logos *❲efecto❳ ❲texto❳*_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}logochristmas *❲texto❳*_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}logocorazon *❲texto❳*_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}ytcomment *❲texto❳*_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}hornycard *❲@tag❳*_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}simpcard *❲@tag❳*_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}lolice *❲@tag❳*_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}itssostupid_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}pixelar_
║│ஓீۣ̤֟͜✨➤ _${usedPrefix}blur_
╚╧═══❖•ೋ°ৡৢ͜͡  🚀 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  💦 𖥨֗°ೋ•❖═══╗
║│🌹 𝚃𝙴𝚇𝚃𝙾𝚂 𝚈 𝙵𝚁𝙰𝚂𝙴𝚂 🌹
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🍡➤ _${usedPrefix}piropo_
║│ஓீۣ̤֟͜🍡➤ _${usedPrefix}consejo_
║│ஓீۣ̤֟͜🍡➤ _${usedPrefix}fraseromantica_
║│ஓீۣ̤֟͜🍡➤ _${usedPrefix}historiaromantica_
╚╧═══❖•ೋ°ৡৢ͜͡  💦 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🍬 𖥨֗°ೋ•❖═══╗
║│🍀 𝙰𝙽𝙸𝙼𝙴𝚂 𝚁𝙰𝙽𝙳𝙾𝙼𝚂 🍀
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜💕➤ _${usedPrefix}menuanimes_
╚╧═══❖•ೋ°ৡৢ͜͡  🍬 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🎂 𖥨֗°ೋ•❖═══╗
║│🌅 𝚁𝙰𝙽𝙳𝙾𝙼 𝙲𝙾𝙼𝙰𝙽𝙳𝚂 🌅
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}kpop *❲blackpink │ exo │ bts❳*_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}cristianoronaldo_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}messi_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}cat_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}dog_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}meme_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}itzy_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}blackpink_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}navidad_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}wpmontaña_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}pubg_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}wpgaming_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}wpaesthetic_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}wpaesthetic2_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}wprandom_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}wallhp_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}wpvehiculo_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}wpmoto_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}coffee_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}pentol_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}caricatura_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}ciberespacio_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}technology_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}doraemon_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}hacker_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}planeta_
║│ஓீۣ̤֟͜🏙️➤ _${usedPrefix}randomprofile_
╚╧═══❖•ೋ°ৡৢ͜͡  🎂 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🍎 𖥨֗°ೋ•❖═══╗
║│💜 𝙴𝙵𝙴𝙲𝚃𝙾𝚂 𝙰𝚄𝙳𝙸𝙾𝚂 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 💜
╠╪═════┉┉┉┉┈┈┈ • • •
║│*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}bass_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}blown_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}deep_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}earrape_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}fast_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}fat_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}nightcore_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}reverse_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}robot_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}slow_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}smooth_
║│ஓீۣ̤֟͜🎧➤ _${usedPrefix}tupai_
╚╧═══❖•ೋ°ৡৢ͜͡  🍎 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╗
║│💌 𝙲𝙷𝙰𝚃 𝙰𝙽𝙾𝙽𝙸𝙼𝙾 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 💌
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🍃➤ _${usedPrefix}start_
║│ஓீۣ̤֟͜🍃➤ _${usedPrefix}next_
║│ஓீۣ̤֟͜🍃➤ _${usedPrefix}leave_
╚╧═══❖•ೋ°ৡৢ͜͡  💜 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  👑 𖥨֗°ೋ•❖═══╗
║│ 🛡️ 𝙼𝙴𝙽𝚄 𝙰𝚄𝙳𝙸𝙾𝚂 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 🛡️  
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🍒➤ _${usedPrefix}menuaudios_
╚╧═══❖•ೋ°ৡৢ͜͡  👑 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🦋 𖥨֗°ೋ•❖═══╗
║│ 🎀 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 🎀
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}sticker *❲responder a imagen o video❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}sticker *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}sticker2 *❲responder a imagen o video❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}sticker2 *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}s *❲responder a imagen o video❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}s *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}emojimix *❲emoji 1❳&❲emoji 2❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}scircle *❲imagen❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}sremovebg *❲imagen❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}semoji *❲tipo❳ ❲emoji❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}qc *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}attp *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}attp2 *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}attp3 *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}ttp *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}ttp2 *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}ttp3 *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}ttp4 *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}ttp5 *❲texto❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}pat *❲@tag❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}slap *❲@tag❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}kiss *❲@tag❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}dado_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}wm *❲packname❳ ❲author❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}stickermarker *❲efecto❳ ❲imagen❳*_
║│ஓீۣ̤֟͜💦➤ _${usedPrefix}stickerfilter *❲efecto❳ ❲imagen❳*_
╚╧═══❖•ೋ°ৡৢ͜͡  🦋 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  🍃 𖥨֗°ೋ•❖═══╗
║│🥏 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙾𝙻𝙾 𝙿𝙰𝚁𝙰 𝙾𝚆𝙽𝙴𝚁𝚂 🥏
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜🧧➤ ❳ *❲funcion❳*
║│ஓீۣ̤֟͜🧧➤ =❳ *❲funcion❳*
║│ஓீۣ̤֟͜🧧➤ $ *❲funcion❳*
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}setprefix *❲prefijo❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}resetprefix_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}autoadmin_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}grouplist_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}chetar_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}leavegc_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}cajafuerte_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}blocklist_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}addowner *❲@tag │ numero❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}delowner *❲@tag │ numero❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}block *❲@tag │ numero❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}unblock *❲@tag │ numero❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *restrict*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *restrict*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *autoread*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *autoread*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *public*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *public*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *pconly*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *pconly*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *gconly*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *gconly*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *anticall*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *anticall*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *antiprivado*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *antiprivado*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *modejadibot*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *modejadibot*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *audios_bot*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *audios_bot*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}enable *antispam*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}disable *antispam*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}msg *❲texto❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}banchat_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}unbanchat_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}resetuser *❲@tag❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}banuser *❲@tag❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}unbanuser *❲@tag❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}dardiamantes *❲@tag❳ ❲cantidad❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}añadirxp *❲@tag❳ ❲cantidad❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}banuser *❲@tag❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}bc *❲texto❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}bcchats *❲texto❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}bcgc *❲texto❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}bcgc2 *❲audio❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}bcgc2 *❲video❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}bcgc2 *❲imagen❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}bcbot *❲texto❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}cleartpm_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}restart_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}update_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}banlist_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}addprem *❲@tag❳ ❲tiempo❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}addprem2 *❲@tag❳ ❲tiempo❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}addprem3 *❲@tag❳ ❲tiempo❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}addprem4 *❲@tag❳ ❲tiempo❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}delprem *❲@tag❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}listcmd_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}setppbot *❲responder a imagen❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}addcmd *❲texto❳ ❲responder a sticker│imagen❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}delcmd *❲responder a sticker│imagen con comando o texto asignado❳*_
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}saveimage
║│ஓீۣ̤֟͜🧧➤ _${usedPrefix}viewimage
╚╧═══❖•ೋ°ৡৢ͜͡  🍃 𖥨֗°ೋ•❖═══╝



╔╤═══❖•ೋ°ৡৢ͜͡  ❣️ 𖥨֗°ೋ•❖═══╗
║│ 🍡 𝙰𝙹𝚄𝚂𝚃𝙴𝚂 𝙼𝙸𝚃𝚂𝚄𝚁𝙸 𝙱𝙾𝚃 🍡
╠╪═════┉┉┉┉┈┈┈ • • •
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}inspect *❲link wa_gc❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}chatgpt *❲texto❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}delchatgpt
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}gptvoz *❲texto❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}dall-e *❲texto❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}spamwa *❲numero|texto|cantidad❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}tamaño *❲cantidad❳ ❲imagen │ video❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}readviewonce *❲imagen │ video❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}clima *❲país❳ ❲ciudad❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}encuesta *❲texto1|texto2...❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}afk *❲motivo❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}ocr *❲responde a imagen❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}hd *❲responde a imagen❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}acortar *❲enlace │ link │ url❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}calc *❲operacion math❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}del *❲mensaje❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}whatmusic *❲audio❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}readqr *❲imagen (QR)❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}qrcode *❲texto❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}readmore *❲texto1| texto2❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}styletext *❲texto❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}traducir *❲texto❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}nowa *❲numero❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}covid *❲pais❳*_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}horario_
║│ஓீۣ̤֟͜💖➤ _${usedPrefix}dropmail_
╚╧═══❖•ೋ°ৡৢ͜͡  ❣️ 𖥨֗°ೋ•❖═══╝

*para ser subbot use los comandos:*
_${usedPrefix}serbot --code_

*para eliminar sesión use:*
_${usedPrefix}deletesesion_
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*⚠️ 𝐄𝐑𝐑𝐎𝐑 ⚠️, 𝗘𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼 𝗻𝗼 𝗳𝘂𝗻𝗰𝗶𝗼𝗻𝗮 𝗮𝗹 𝗽𝗮𝗿𝗲𝗰𝗲𝗿, 𝗽𝘂𝗲𝗱𝗲 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗿𝗹𝗼 𝗮𝗹 𝗰𝗿𝗲𝗮𝗱𝗼𝗿 𝗱𝗲𝗹 𝗯𝗼𝘁.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
