const { Client } = require('discord.js'); // pour n'importer que Client, et non toute la bibliothèque Discord.js, app plus légère
const { TOKEN, PREFIX } = require('./config.js');
const client = new Client(); // et donc plus new Discord.Client(). On peut passer des options à client de cette manière: new Client ({ options }) (voir doc)

client.on('ready', () => {
  console.log('Connecté!');
});

client.on('message', msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) {
    msg.channel.send('Pong!');
  }
});

client.login(TOKEN);