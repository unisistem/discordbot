const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,             // Eventos relacionados a servidores
        GatewayIntentBits.GuildMessages,     // Ler mensagens nos servidores
        GatewayIntentBits.MessageContent,    // Acessar o conteúdo das mensagens
        GatewayIntentBits.GuildMembers       // Monitorar membros (precisa do privilégio ativado)
    ]
});

const TOKEN = 'BOT-DISCORD-TOKEN'; //token

client.on('ready', () => {
    console.log(`Bot online como ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.content.toLowerCase() === '!ping') {
        message.reply('Pong! 🏓');
    }
});

client.login(TOKEN);
