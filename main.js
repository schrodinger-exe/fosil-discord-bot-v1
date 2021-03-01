const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '.'; 

const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () =>
{
    console.log('Fosil Bot şu an çevrimiçi.');
});

client.on('message', message =>
{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping')
    {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'youtube')
    {
        client.commands.get('youtube').execute(message, args);
    } else if (command === 'nasılsın')
    {
        client.commands.get('nasılsın').execute(message, args);
    } else if (command === 'cern')
    {
        client.commands.get('cern').execute(message, args);
    } else if (command === 'fosilneydenoluşur')
    {
        client.commands.get('fosilneydenoluşur').execute(message, args);
    } else if (command === 'muradiye')
    {
        client.commands.get('muradiye').execute(message, args);
    } else if (command === 'napıyorsun')
    {
       client.commands.get('napıyorsun').execute(message, args);
    } else if (command === 'tekbir')
    {
        client.commands.get('tekbir').execute(message, args);
    } else if (command === 'günaydın')
    {
        client.commands.get('günaydın').execute(message, args);
    } else if (command === 'günaydınamk')
    {
        client.commands.get('günaydınamk').execute(message, args);
    } else if (command === 'iyigeceler')
    {
        client.commands.get('iyigeceler').execute(message, args);
    } else if (command === 'play')
    {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave')
    {
        client.commands.get('leave').execute(message, args);
    } else if (command == 'yardım')
    {
        client.commands.get('yardım').execute(message, args);
    } else if (command === 'kuti')
    {
        client.commands.get('kuti').execute(message, args);
    } else if (command === 'burak')
    {
        client.commands.get('burak').execute(message, args);
    }
});

client.login(process.env.token);