global.math = global.math ? global.math : {};
const handler = async (m, {conn, args, usedPrefix, command}) => {
  const mat =`
*❮👑❯➣ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙞𝙧 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙡𝙖 𝙙𝙞𝙛𝙞𝙘𝙪𝙡𝙩𝙖𝙙 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤*

*❮😍❯➣ 𝘿𝙞𝙛𝙞𝙘𝙪𝙡𝙩𝙖𝙙𝙚𝙨 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙚 𝙟𝙪𝙚𝙜𝙤: ${Object.keys(modes).join(' | ')}*

*❮✅❯➣ 𝙀𝙟𝙚𝙢𝙥𝙡𝙤 𝙙𝙚 𝙪𝙨𝙤: ${usedPrefix}mates medium*
`.trim();
  if (args.length < 1) return await conn.reply(m.chat, mat, m);
  /* conn.sendButton(m.chat, mat, wm, null, [
['💜 𝗠𝗮𝘁𝗲𝘀 𝗙𝗮𝗰𝗶𝗹 💜', `${usedPrefix + command} easy`],
['🧡 𝗠𝗮𝘁𝗲𝘀 𝗠𝗲𝗱𝗶𝗼 🧡', `${usedPrefix + command} medium`],
['❤️ 𝗠𝗮𝘁𝗲𝘀 𝗗𝗶𝗳𝗶𝗰𝗶𝗹 ❤️', `${usedPrefix + command} hard`]], m)

conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['💜 𝗠𝗮𝘁𝗲𝘀 𝗙𝗮𝗰𝗶𝗹 💜', `${usedPrefix + command} easy`],
['🧡 𝗠𝗮𝘁𝗲𝘀 𝗠𝗲𝗱𝗶𝗼 🧡', `${usedPrefix + command} medium`],
['❤️ 𝗠𝗮𝘁𝗲𝘀 𝗗𝗶𝗳𝗶𝗰𝗶𝗹 ❤️', `${usedPrefix + command} hard`]], m)*/

  const mode = args[0].toLowerCase();
  if (!(mode in modes)) return await conn.reply(m.chat, mat, m);

  /* conn.sendHydrated(m.chat, mat, author, null, null, null, null, null, [
['💜 𝗠𝗮𝘁𝗲𝘀 𝗙𝗮𝗰𝗶𝗹 💜', `${usedPrefix + command} easy`],
['🧡 𝗠𝗮𝘁𝗲𝘀 𝗠𝗲𝗱𝗶𝗼 🧡', `${usedPrefix + command} medium`],
['❤️ 𝗠𝗮𝘁𝗲𝘀 𝗗𝗶𝗳𝗶𝗰𝗶𝗹 ❤️', `${usedPrefix + command} hard`]], m)*/

  const id = m.chat;
  if (id in global.math) return conn.reply(m.chat, '*❮😍❯➣ 𝗧𝗼𝗱𝗮𝘃𝗶𝗮 𝗵𝗮𝘆 𝗽𝗿𝗲𝗴𝘂𝗻𝘁𝗮𝘀 𝘀𝗶𝗻 𝗿𝗲𝘀𝗼𝗹𝘃𝗲𝗿 𝗺𝗶𝗷𝗼/𝗮*', global.math[id][0]);
  const math = genMath(mode);
  global.math[id] = [
    await conn.reply(m.chat, `❮🤨❯➣ 𝗖𝘂𝗮𝗻𝘁𝗼 𝗲𝘀 𝗲𝗹 𝗿𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼 𝗱𝗲: *${math.str}*?\n\n*❮⏳❯➣ 𝗧𝘂 𝘁𝗶𝗲𝗺𝗽𝗼: ${(math.time / 1000).toFixed(2)} segundos*\n*❮👑❯➣ 𝙂𝙖𝙣𝙖𝙧𝙖𝙨: ${math.bonus} 𝙙𝙚 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖!! 😍*`, m),
    math, 4,
    setTimeout(() => {
      if (global.math[id]) {
        conn.reply(m.chat, `*❮❤️❯➣ 𝙎𝙚 𝙝𝙖 𝙛𝙞𝙣𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝙚𝙡 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧*\n\n*❮👑❯➣ 𝙡𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙚𝙧𝙖: ${math.result}*`, m),
        // conn.sendButton(m.chat, `**❮❤️❯➣ 𝙎𝙚 𝙝𝙖 𝙛𝙞𝙣𝙖𝙡𝙞𝙯𝙖𝙙𝙤 𝙚𝙡 𝙩𝙞𝙚𝙢𝙥𝙤 𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧*\n\n*❮👑❯➣ 𝙡𝙖 𝙧𝙚𝙨𝙥𝙪𝙚𝙨𝙩𝙖 𝙚𝙧𝙖: ${math.result}*`, author, null, [['🏙️ 𝙑𝙤𝙡𝙫𝙚𝙧 𝙖 𝙟𝙪𝙜𝙖𝙧 🏙️', `${usedPrefix + command} ${math.mode}`]], global.math[id][0])
        delete global.math[id];
      }
    }, math.time),
  ];
};
handler.help = ['math <mode>'];
handler.tags = ['game'];
handler.command = /^math|mates|matemáticas/i;
export default handler;

const modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000],
};

const operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷',
};

function genMath(mode) {
  const [a1, a2, b1, b2, ops, time, bonus] = modes[mode];
  let a = randomInt(a1, a2);
  const b = randomInt(b1, b2);
  const op = pickRandom([...ops]);
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))();
  if (op == '/') [a, result] = [result, a];
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result,
  };
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from];
  from = Math.floor(from);
  to = Math.floor(to);
  return Math.floor((to - from) * Math.random() + from);
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
