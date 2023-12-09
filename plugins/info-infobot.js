import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
  const info = `
╭•🍄•┈┈┈••┈┈••✦🍀✦••┈┈••┈┈┈•🍄•╮
*╎   𝙍𝙀𝙋𝙊𝙍𝙏𝙀 𝘿𝙀 𝙁𝘼𝙇𝙇𝙊𝙎/𝙀𝙍𝙍𝙊𝙍𝙀𝙎*
├•🍄•┈┈┈••┈┈••✦🍀✦••┈┈••┈┈┈•🍄•╯
┠❬👑❭➜ 𝘾𝙧𝙚𝙖𝙙𝙤𝙧𝙖:
┠➮ *𝐋𝐢𝐳-𝐎𝐅𝐂*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬🥏❭➜ 𝙉𝙪𝙢𝙚𝙧𝙤:
┠➮ *+54 9 3873 45-2653*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬😻❭➜ 𝙉𝙪𝙢𝙚𝙧𝙤/𝙐𝙍𝙇:
┠➮ *https://wa.me/5493873452653*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬🛡️❭➜ 𝙂𝙪𝙖𝙧𝙙𝙞𝙖𝙣:
┠➮ *+1 (914) 594-8340*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬💜❭➜ 𝙉𝙪𝙢𝙚𝙧𝙤/𝙐𝙍𝙇:
┠➮ *https://wa.me/19145948340*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬📌❭➜ 𝙋𝙧𝙚𝙛𝙞𝙟𝙤:
┠➮ *${usedPrefix}*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬👤❭➜ 𝘾𝙝𝙖𝙩𝙨 𝙋𝙧𝙞𝙫𝙖𝙙𝙤𝙨:
┠➮ *${chats.length - groups.length}*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬👥❭➜ 𝘾𝙝𝙖𝙩𝙨 𝙂𝙧𝙪𝙥𝙖𝙡𝙚𝙨:
┠➮ *${groups.length}* 
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬📂❭➜ 𝘾𝙝𝙖𝙩𝙖 𝙏𝙤𝙩𝙖𝙡𝙚𝙨:
┠➮ *${chats.length}* 
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬⏳❭➜ 𝘼𝙘𝙩𝙞𝙫𝙞𝙙𝙖𝙙:
┠➮ *${uptime}*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬✅❭➜ 𝙐𝙨𝙪𝙖𝙧𝙞𝙤𝙨:
┠➮ *${totalreg} 𝑵𝒖𝒎𝒆𝒓𝒐𝒔*
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬⚜️❭➜ 𝘼𝙪𝙩𝙤𝙧𝙚𝙖𝙙:
┠➮ ${autoread ? "*🟢 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🟢*" : "*🔴 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🔴*"}
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬🎊❭➜ 𝙍𝙚𝙨𝙩𝙧𝙞𝙘𝙩:
┠➮ ${restrict ? "*🟢 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🟢*" : "*🔴 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🔴*"} 
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬🥇❭➜ 𝙎𝙤𝙡𝙤 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨:
┠➮ ${pconly ? "*🟢 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🟢*" : "*🔴 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🔴*"}
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬🧸❭➜ 𝙎𝙤𝙡𝙤 𝙜𝙧𝙪𝙥𝙤𝙨:
┠➮ ${gconly ? "*🟢 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🟢*" : "*🔴 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🔴*"}
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬🔮❭➜ 𝙈𝙤𝙙𝙤:
┠➮ ${self ? "*Pʀɪᴠᴀᴅᴏ 💜*" : "*Gʀᴜᴘᴀʟ 🛡️*"}
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬🔐❭➜ 𝘼𝙣𝙩𝙞𝙥𝙧𝙞𝙫𝙖𝙙𝙤:
┠➮ ${antiprivado ? "*🟢 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🟢*" : "*🔴 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🔴*"}
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬🤖❭➜ 𝙅𝙖𝙙𝙞𝘽𝙤𝙩:
┠➮ ${modejadibot ? "*🟢 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🟢*" : "*🔴 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🔴*"}
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬☎️❭➜ 𝘼𝙣𝙩𝙞𝙡𝙡𝙖𝙢𝙖𝙙𝙖𝙨:
┠➮ ${antiCall ? "*🟢 𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🟢*" : "*🔴 𝑫𝑬𝑺𝑨𝑪𝑻𝑰𝑽𝑨𝑫𝑶 🔴*"}
┠◊┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◊
┠❬⚡❭➜ 𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙: 
┠➮ *${speed} ms* 〘 𝐓𝐡𝐞 𝐌𝐲𝐬𝐭𝐢𝐜 - 𝐁𝐨𝐭 〙 ═
╰•⚜️•┈┈┈••┈┈••✦🛡️✦••┈┈••┈┈┈•⚜️•╯
`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://github.com/egobot-supreme/Mitsuri-Bot-MD` },
    mimetype: `application/${document}`,
    fileName: `💖 𝑴𝒊𝒕𝒔𝒖𝒓𝒊 - 𝑩𝒐𝒕 - 𝑴𝑫 - 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑 💖`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://github.com/egobot-supreme/Mitsuri-Bot-MD",
        mediaType: 2,
        previewType: "pdf",
        title: "Interactua con el bot, para subir de nivel y ganar mas experiencia 🥳",
        body: wm,
        thumbnail: imagen1,
        sourceUrl: "https://wa.me/19145948340",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
