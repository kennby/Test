// Creditos del codigo a @Gatito-kw //

/* GitHub: https://github.com/Gatito-kw */

/* Bot: https://github.com/Gatito-kw/nekobot-md */

import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `*❮💞❯➣ Un/a participantes del grupo se a sumado como admin recientemente en este grupo.*\n\n`;
    txt1 += `*◊➤ Grupo:* ${groupName}\n`;
    txt1 += `*◊➤ Nuevo admin:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*◊➤ Ejecutado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `*❮💞❯➣ Se designo a un/a participante del grupo recientemente.*\n\n`;
    txt2 += `*◊➤ Grupo:* ${groupName}\n`;
    txt2 += `*◊➤ Se quitó a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*◊➤ Ejecutado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `*❮💞❯➣ Un participante admin o el creador del grupo a añadido a un/a nuevo/a participante.*\n\n`;
    txt3 += `*◊➤ Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*◊➤ Se añadió a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*◊➤ Ejecutado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*◊➤ Se añadió:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `*❮💞❯➣ Un admin participante o el creador del grupo, a eliminado un participante recientemente.*\n\n`;
    txt4 += `*◊➤ Grupo:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*◊➤ Se eliminó a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*◊➤ Ejecutado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*◊➤ Se eliminó a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'salido';
    } else {
      ax = 'eliminado';
    }
    let txt5 = `*❮💞❯➣ Se a ${ax} un/a participante del grupo recientemente.*\n\n`;
    txt5 += `*◦  Grupo:* ${groupName}\n`;
    if (ax === 'eliminado') {
      txt5 += `*◊➤ Se eliminoó a:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*◊➤ Ejecutado por:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*◊➤ Se salió:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'cerrado';
    } else {
      accion = 'abierto';
    }
    let txt6 = `*❮💞❯➣ Se ha modificado los ajustes del grupo a ${accion} recientemente .*\n\n`;
    txt6 += `*◊➤ Grupo:* ${groupName}\n`;
    txt6 += `*◊➤ El grupo se ha:* ${'```' + accion + '```'}\n`;
    txt6 += `*◊➤ Ejecutado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `*❮💞❯➣ Un/a admin o participante ha modificado el nombre del grupo recientemente.*\n\n`;
    txt7 += `*◊➤ Nuevo nombre del grupo:* ${'```' + groupName + '```'}\n`;
    txt7 += `*◊➤ Ejecutado por:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */
