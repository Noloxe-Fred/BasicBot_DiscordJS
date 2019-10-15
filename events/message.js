module.exports = async (client, message) => {
	const settings = await client.getGuild(message.guild); 
	const args = message.content.slice(settings.prefix.length).trim().split(/ +/g); // split sépare la phrase, et crée une nouvelle case de tableau pour chaque espace. / +/ enlève les espaces superflus
	const command = args.shift().toLocaleLowerCase(); // ne garde que la première case du tableau, et donc ici, la commande (.fight par exemple)

	if (message.author.bot) return; // Pour contrer une boucle, où l'on demanderait au Bot de taper la commande
	if (message.content.indexOf(settings.prefix) !== 0) return; // Permet de ne pas aller plus loin si il n'y a pas de commande: optimisation

	console.log('args=', args, ' et cmd=', command);

	// Ici on vérifie que la commande existe
	if (client.commands.has(command)) {
		client.commands.get(command)(client, message, args, settings);
	}
};
