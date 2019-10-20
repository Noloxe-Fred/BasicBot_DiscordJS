const { MessageEmbed } = require('discord.js');
const popMonster = {};

module.exports = async (client, message) => {
	const settings = await client.getGuild(message.guild);
	const args = message.content.slice(settings.prefix.length).trim().split(/ +/g); // split sépare la phrase, et crée une nouvelle case de tableau pour chaque espace. / +/ enlève les espaces superflus
	const command = args.shift().toLocaleLowerCase(); // ne garde que la première case du tableau, et donc ici, la commande (.fight par exemple)

	if (message.author.bot) return; // Pour contrer une boucle, où l'on demanderait au Bot de taper la commande

	// Si je veux effectuer une action sur les messages sans commandes, c'est ici

	// End

	if (message.content.indexOf(settings.prefix) !== 0) return; // Permet de ne pas aller plus loin si il n'y a pas de commande: optimisation

	console.log('args=', args, ' et cmd=', command);

	// Ici on vérifie que la commande existe
	const cmd = client.commands.get(command);
	if (!cmd) return undefined;
	cmd.run(client, message, args, settings);

	// Ici, on vérifie le channel de la cmd, et on incrémente un compteur
	if (message.channel.name === ('fatalix-zone' || 'larius' || 'praery')) {
		popMonster[message.channel.name] = popMonster[message.channel.name] >= 0 ? (popMonster[message.channel.name] + 1) : 0;
		console.log('POPMONSTER', popMonster, message.channel.name)

		if (popMonster[message.channel.name] === 1 ) {

			message.channel.send('UN MONSTRE SAUVAGE APPARAIT');

			const listMonster = ['Antonium', 'Fredericus', 'SerpantDesSables'];

			const randomNumber = (min, max) => {
				min = Math.ceil(min);
				  max = Math.floor(max);
				  return Math.floor(Math.random() * (max - min) + min) + 1;
			};

			const popNumber = randomNumber(0, listMonster.length - 1);

			const monster = await client.getMonster(listMonster[popNumber]);
			console.log(popNumber, monster, listMonster[popNumber]);

			const monsterCard = new MessageEmbed();

			monsterCard
				.setTitle(monster.monsterName)
				.setThumbnail(monster.imageUrl)
				.addField('PV', monster.life, true)
				.addField('Dgt', monster.damage, true)
				.addField('Init.', monster.initiative, true)
				.addField('Zone', monster.zone, true);

			message.channel.send(monsterCard);

			popMonster[message.channel.name] = 0;
		}
	}
};
