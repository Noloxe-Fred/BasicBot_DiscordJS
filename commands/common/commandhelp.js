const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	const embed = new MessageEmbed();
	embed
		.setColor('red')
		.setTitle('Liste des Commandes')
		.setDescription('Les commandes sont à taper précédées d\'un point d\'exclamation')
		.setThumbnail('https://www.pngfind.com/pngs/m/82-827658_lloyd-fields-needs-our-help-help-word-png.png')
		.addField('**Zone Safe**', '----')
		.addField('!interaction', 'Utilisez les pour interagir avec les PNJ, vous reposer. Utilisable en zone safe, et dans la zone de votre campement.')
		.addField('**Hors Zone Safe**', '----')		
		.addField('!combat', 'Liste des possibilités de combat, qui dépendront de vos compétences')
		.addField('!action', 'Ce sont les actions que vous pourrez effectuer lorsque vous serez hors zone safe')
		.addField('**Globale**', '----')
		.addField('!soin', 'Liste des possibilités de soin, qui dépendront de vos compétences');

	message.channel.send(embed);
};

exports.help = {
	name: 'commandhelp'
};
