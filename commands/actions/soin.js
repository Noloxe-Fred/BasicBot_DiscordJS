const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	const embed = new MessageEmbed();

	embed
		.setColor('red')
		.setTitle(message.author.username)
		.setDescription('Choisis l\'action que ton personnage va effectuer, puis valide')
		.setThumbnail('https://store-images.s-microsoft.com/image/apps.12468.13510798887966465.7d1db64d-e502-4431-8f30-dcf821216451.5df34879-cef6-4c4f-bd38-e5f0f453d57a?w=180&h=180&q=60')
		.addField('💊 Soin léger', 'Energie +10')
		.addField('💉 Traitement', 'Soignez une maladie, si vous avez le matériel nécéssaire')
		.addField('🔶 Compétence 1', 'Utilisez votre première compétence d\'attaque. Dégât: Voir comp.')
		.addField('🔷 Compétence 2', 'Utilisez votre seconde compétence d\'attaque. Dégât: Voir comp.');

	message.channel.send(embed)
		.then((mess => {
			mess.react('💊');
			mess.react('💉');
			mess.react('🔶');
			mess.react('🔷');
		}));
};

exports.help = {
	name: 'soin'
};
