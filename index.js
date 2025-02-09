const { Client, GatewayIntentBits } = require('discord.js');
const TOKEN = 'BOT_TOKEN_HERE'; // Bot token here

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ]
});

client.once('ready', () => {
    console.log(`Logged as ${client.user.tag} `);
});

client.on('guildMemberAdd', async (member) => {
    try {
        
        await member.send('You have been kicked from the server.');
        
        
        await member.kick('auto kick active.');
        
        console.log(`${member.user.tag} has been kicked.`);
    } catch (error) {
        console.error(`there was a problem: ${error}`);
    }
});

client.login(TOKEN);
