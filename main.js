const { Client, Collection } = require('discord.js'); // pour n'importer que Client, et non toute la bibliothèque Discord.js, app plus légère
const { TOKEN } = require('./config.js');
const client = new Client(); // et donc plus new Discord.Client(). On peut passer des options à client de cette manière: new Client ({ options }) (voir doc)
const fs = require('fs');

// Ajout des fonctions de communications mongodb
fs.readdir('./functionsDB/', (err, files) => {
	if (err) return console.error;

	files.forEach(file => {
		if (!file.endsWith('.js')) return undefined;

		require(`./functionsDB/${file}`)(client);
	});
});

client.mongoose = require('./utils/mongoose');
client.commands = new Collection();

// client.commands.set('repeat', require('./commands/repeat.js'));
// client.commands.set('role', require('./commands/role.js'));
// client.commands.set('sinfo', require('./commands/sinfo.js'));
// client.commands.set('image', require('./commands/image.js'));
// client.commands.set('eval', require('./commands/eval.js'));
// client.commands.set('config', require('./commands/config.js'));
// Désormais on boucle

fs.readdir('./commands/', (err, dirs) => {
	if (err) return console.error;

	dirs.forEach(dir => {
		fs.readdir(`./commands/${dir}`, (err, files) => {
			if (err) return console.error;

			files.forEach(file => {
				if (!file.endsWith('.js')) return undefined;

				const props = require(`./commands/${dir}/${file}`);
				const cmdName = file.split('.')[0];
				client.commands.set(cmdName, props);
			});
		});
	});
});


// client.on('ready', () => require('./events/ready.js')(client));
// client.on('message', msg => require('./events/message.js')(client, msg));
// client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));
// client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));
// Désormais:

fs.readdir('./events/', (err, files) => {
	if (err) return console.error;

	files.forEach(file => {
		if (!file.endsWith('.js')) return undefined;

		const event = require(`./events/${file}`);
		const evtName = file.split('.')[0];

		client.on(evtName, event.bind(null, client)); // message   client.on('mesage', client, message)
	});
});

// -------------------
client.mongoose.init();
client.login(TOKEN);
client.on('error', console.error);
client.on('warn', console.warn);
// client.on('debug', console.debug);
