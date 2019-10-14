const { Client } = require('discord.js'); // pour n'importer que Client, et non toute la bibliothèque Discord.js, app plus légère
const { TOKEN, PREFIX } = require('./config.js');
const client = new Client(); // et donc plus new Discord.Client(). On peut passer des options à client de cette manière: new Client ({ options }) (voir doc)

client.on('message', msg => {
	if (msg.author.bot) return; // Pour contrer une boucle, où l'on demanderait au Bot de taper la commande
	const args = msg.content.split(/ +/g); // split sépare la phrase, et crée une nouvelle case de tableau pour chaque espace. / +/ enlève les espaces superflus
	const cmd = args.shift().toLocaleLowerCase(); // ne garde que la première case du tableau, et donc ici, la commande (.fight par exemple)
	if (cmd === `${PREFIX}ping`) msg.channel.send('Pong!');  // au lieu de (msg.content.startWith(PREFIXBlablabla))
	if (cmd === `${PREFIX}repeat`) {
		msg.channel.send(args.join(' '));
	}
});

client.on('guildMemberAdd', member => {
	const channel = client.channels.find(r => r.name === 'general'); // Comme il n'y a plus de paramètre msg, nous utilisons "client" pour trouver un channel
	channel.send(`${member} vient de rejoindre le serveur`);
});

client.login(TOKEN);

// -------------------

client.on('ready', () => console.log('Connecté!'));
client.on('error', console.error);
client.on('warn', console.warn);
client.on('debug', console.debug);
