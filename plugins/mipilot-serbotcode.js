import fs from "fs"
async function handler(m, {usedPrefix}) {
    const user = m.sender.split("@")[0]
    if (fs.existsSync("./jadibts/" + user + "/creds.json")) {
        let token = Buffer.from(fs.readFileSync("./jadibts/" + user + "/creds.json"), "utf-8").toString("base64")
        await m.reply(`𖥨ํ∘̥⃟⸽⃟💜➣ 𝐌𝐈𝐓𝐒𝐔𝐑𝐈 - 𝐂𝐎𝐃𝐄𝐁𝐎𝐓: 𝚃𝚎 𝚙𝚎𝚛𝚖𝚒𝚝𝚎 𝚒𝚗𝚒𝚌𝚒𝚊𝚛 𝚜𝚎𝚜𝚒𝚘𝚗 𝚊 𝚘𝚝𝚛𝚘𝚜 𝚋𝚘𝚝𝚜 𝚛𝚎𝚌𝚘𝚖𝚎𝚗𝚍𝚊𝚍𝚘𝚜.\n\n*🧸 𝗧𝘂 𝘁𝗼𝗸𝗲𝗻:*`)
        await m.reply(token)
    } else {
        await m.reply(`*💜 𝗡𝗼 𝘁𝗶𝗲𝗻𝗲𝘀 𝘁𝗼𝗸𝗲𝗻 𝗮𝗰𝘁𝗶𝘃𝗼, 𝗽𝘂𝗲𝗱𝗲𝘀 𝘂𝘀𝗮𝗿: ${usedPrefix}jadibot 𝗽𝗮𝗿𝗮 𝗰𝗿𝗲𝗮𝗿 𝘂𝗻𝗼.*`)
    }
  }
  handler.command = handler.help = ['token', 'gettoken', 'serbottoken'];
  handler.tags = ['jadibot'];
  handler.private = true
  export default handler;
  