import moment from 'moment-timezone';

const handler = async (m, {conn}) => {
  const fechaper = moment().tz('America/Lima').format('DD/MM HH:mm:ss');
  const fechamex = moment().tz('America/Mexico_City').format('DD/MM HH:mm:ss');
  const fechabol = moment().tz('America/La_Paz').format('DD/MM HH:mm:ss');
  const fechachi = moment().tz('America/Santiago').format('DD/MM HH:mm:ss');
  const fechaarg = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm:ss');
  const fechacol = moment().tz('America/Bogota').format('DD/MM HH:mm:ss');
  const fechaecu = moment().tz('America/Guayaquil').format('DD/MM HH:mm:ss');
  const fechacosr = moment().tz('America/Costa_Rica').format('DD/MM HH:mm:ss');
  const fechacub = moment().tz('America/Havana').format('DD/MM HH:mm:ss');
  const fechagua = moment().tz('America/Guatemala').format('DD/MM HH:mm:ss');
  const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm:ss');
  const fechanic = moment().tz('America/Managua').format('DD/MM HH:mm:ss');
  const fechapan = moment().tz('America/Panama').format('DD/MM HH:mm:ss');
  const fechauru = moment().tz('America/Montevideo').format('DD/MM HH:mm:ss');
  const fechaven = moment().tz('America/Caracas').format('DD/MM HH:mm:ss');
  const fechapar = moment().tz('America/Asuncion').format('DD/MM HH:mm:ss');
  const fechanew = moment().tz('America/New_York').format('DD/MM HH:mm:ss');
  const fechaasi = moment().tz('Asia/Jakarta').format('DD/MM HH:mm:ss');
  const fechabra = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm:ss');
  const fechaafri = moment().tz('Africa/Malabo').format('DD/MM HH:mm:ss');
  await conn.sendMessage(m.chat, {text: `\`\`\`
*💖 ZONA HORARIA BOT 💖*

🇵🇪 Peru 🇵🇪:
${fechaper}

🇲🇽 Mexico 🇲🇽:
${fechamex}

🇧🇴 Bolivia 🇧🇴:
${fechabol}

🇨🇱 Chile 🇨🇱:
${fechachi}

🇦🇷 Argentina 🇦🇷:
${fechaarg}

🇨🇴 Colombia 🇨🇴:
${fechacol}

🇪🇨 Ecuador 🇪🇨:
${fechaecu}

🇨🇷 Costa Rica 🇨🇷:
${fechacosr}

🇨🇺 Cuba 🇨🇺:
${fechacub}

🇬🇹 Guatemala 🇬🇹:
${fechagua}

🇭🇳 Honduras 🇭🇳:
${fechahon}

🇳🇮 Nicaragua 🇳🇮:
${fechanic}

🇵🇦 Panamá 🇵🇦:
${fechapan}

🇺🇾 Uruguay 🇺🇾:
${fechauru}

🇻🇪 Venezuela 🇻🇪:
${fechaven}

🇵🇾 Paraguay 🇵🇾:
${fechapar}

🇺🇸 New York 🇺🇸:
${fechanew}

🇧🇳 Asia 🇧🇳:
${fechaasi}

🇧🇷 Brazil 🇧🇷:
${fechabra}

👑 G.N.Q 👑:
${fechaafri}
\`\`\`
${String.fromCharCode(8206).repeat(850)}
🥳 Zona horaria del servidor actual:\n[ ${Intl.DateTimeFormat().resolvedOptions().timeZone} ]\n\n*Frecha y Hora:*\n${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY HH:mm:ss')}`}, {quoted: m});
};

handler.help = ['horario'];
handler.tags = ['info'];
handler.command = /^(horario)$/i;

export default handler;
