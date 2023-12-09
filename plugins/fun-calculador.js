const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `😻 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙢𝙚𝙣𝙨𝙞𝙤𝙣𝙖 𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.`;
  const percentages = (500).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'gay2':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Eso es bajo... ¡Tu eres Joto, no Gay! 😄*`;
      } else if (percentages > 100) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ ¡Incluso más gay de lo que pensábamos! 💃*`;
      } else {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los calculos han arrojado que ${text.toUpperCase()} es ${percentages}% Gay. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Lo tuyo, lo tuyo es que eres Gay. ☠*`;
      }
      break;
    case 'lesbiana':
      emoji = '🏳️‍🌈';
      if (percentages < 50) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Quizás necesites más películas románticas en tu vida. 🎬*`;
      } else if (percentages > 100) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ ¡Eso es un amor extremo por las chicas! 👩‍❤️‍👩*`;
      } else {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Mantén el amor floreciendo! 🌸*`;
      }
      break;
    case 'pajero':
    case 'pajera':
      emoji = '😏💦';
      if (percentages < 50) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Tal vez necesites más hobbies! 🎨*`;
      } else if (percentages > 100) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Eso es una resistencia admirable! 💪*`;
      } else {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Mantén el buen trabajo (en solitario). 🙌*`;
      }
      break;
    case 'puto':
    case 'puta':
      emoji = '🔥🥵';
      if (percentages < 50) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ ¡Más suerte en tu próxima conquista! 💔*`;
      } else if (percentages > 100) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ ¡Estás en llamas! 🚒*`;
      } else {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Mantén ese encanto ardiente! 🔥*`;
      }
      break;
    case 'manco':
    case 'manca':
      emoji = '💩';
      if (percentages < 50) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ ¡No eres el único en ese club! 😅*`;
      } else if (percentages > 100) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ ¡Tienes un talento muy especial! 🙈*`;
      } else {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Mantén esa actitud valiente! 🤙*`;
      }
      break;
    case 'rata':
      emoji = '🐁';
      if (percentages < 50) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Nada de malo en disfrutar del queso! 🧀*`;
      } else if (percentages > 100) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Un auténtico ratón de lujo! 🏰*`;
      } else {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Come queso con responsabilidad! 🧀*`;
      }
      break;
    case 'prostituto':
    case 'prostituta':
      emoji = '🫦👅';
      if (percentages < 50) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ El mercado está en auge! 💼*`;
      } else if (percentages > 100) {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Un/a verdadero/a profesional! 💰*`;
      } else {
        description = `*𖥨ํ∘̥⃟⸽⃟💦➤ Los cálculos han arrojado que ${text.toUpperCase()} es ${percentages}% ${command}. ${emoji}*\n*-𖥨ํ∘̥⃟⸽⃟🍀➤ Siempre es hora de negocios! 💼*`;
      }
      break;
      default:
      throw `*𖥨ํ∘̥⃟⸽⃟⛔ 𝑪𝑶𝑴𝑨𝑵𝑫𝑶 𝑵𝑶 𝑽𝑨𝑳𝑰𝑫𝑶, 𝑰𝑵𝑻𝑬𝑵𝑻𝑬 𝑪𝑶𝑵 𝑶𝑻𝑹𝑶 𝑪𝑶𝑴𝑨𝑵𝑫𝑶*`;
  }
  const responses = [
    "El universo ha hablado.",
    "Los científicos lo confirman.",
    "¡Sorpresa! 🎉"
  ];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const cal = `◊══❨❲💦 𝑪𝑨𝑳𝑪𝑼𝑳𝑨𝑫𝑶𝑹 💦❳❩══◊

𖥨ํ∘̥⃟⸽⃟🍀 ${description}

*"${response}"*

◊══❨❲💦 𝑪𝑨𝑳𝑪𝑼𝑳𝑨𝑫𝑶𝑹 💦❳❩══◊`.trim()  
  async function loading() {
var hawemod = [
"❲🔥 𝑪𝒂𝒍𝒄𝒖𝒍𝒂𝒏𝒅𝒐..❳:\n▰▱▱▱▱▱▱ ❪10%❫",
"❲🔥 𝑪𝒂𝒍𝒄𝒖𝒍𝒂𝒏𝒅𝒐..❳:\n▰▰▭▱▱▱▱ ❪30%❫",
"❲🔥 𝑪𝒂𝒍𝒄𝒖𝒍𝒂𝒏𝒅𝒐..❳:\n▰▰▰▰▱▱▱ ❪60%❫",
"❲🔥 𝑪𝒂𝒍𝒄𝒖𝒍𝒂𝒏𝒅𝒐..❳:\n▰▰▰▰▰▰▱ ❪90%❫",
"❲✅ 𝑪𝑨𝑳𝑪𝑼𝑳𝑨𝑫𝑶 ✅❳:\n▰▰▰▰▰▰▰ ❪100%❫"
]
]
   let { key } = await conn.sendMessage(m.chat, {text: `*😍 ¡Calculando Porcentaje! 😍*`, mentions: conn.parseMention(cal)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});         
 }
loading()    
};
handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^(gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto)$/i;
export default handler;
