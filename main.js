const { Client, Collection } = require('discord.js'); // pour n'importer que Client, et non toute la bibliothèque Discord.js, app plus légère
const { TOKEN, PREFIX } = require('./config.js');
const client = new Client(); // et donc plus new Discord.Client(). On peut passer des options à client de cette manière: new Client ({ options }) (voir doc)

client.PREFIX = PREFIX;
require('./utils/functions')(client);
client.mongoose = require('./utils/mongoose');
client.commands = new Collection();

client.commands.set('repeat', require('./commands/repeat.js'));
client.commands.set('role', require('./commands/role.js'));
client.commands.set('sinfo', require('./commands/sinfo.js'));
client.commands.set('animals', require('./commands/animals.js'));
client.commands.set('eval', require('./commands/eval.js'));
client.commands.set('config', require('./commands/config.js'));

client.on('ready', () => require('./events/ready.js')(client));
client.on('message', msg => require('./events/message.js')(client, msg));
client.on('guildMemberAdd', member => require('./events/guildMemberAdd.js')(client, member));
client.on('guildCreate', guild => require('./events/guildCreate.js')(client, guild));

// -------------------
client.mongoose.init();
client.login(TOKEN);
client.on('error', console.error);
client.on('warn', console.warn);
client.on('debug', console.debug);
