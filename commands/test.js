const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	const embed = new MessageEmbed();

	if (args[0] === 'Zombie') {
		embed
			.setTitle('Zombie')
			.setThumbnail('https://media.discordapp.net/attachments/417986951803568148/634114446993915904/The_Walking_Dead_TV_502082_3840x2400.0.jpg?width=400&height=267')
			.addField('PV', 50, true)
			.addField('Dgt', 5, true)
			.addField('Init..', 'Lent (3)', true)
			.addField('Zone', 'Mono-cible', true);
	}

	if (args[0] === 'SerpentDesSables') {
		embed
			.setTitle('Serpent des Sables')
			.setThumbnail('https://media.discordapp.net/attachments/417986951803568148/634114440211595264/65fdd4416a8e45e52df29d9f7a057309.jpg?width=300&height=300')
			.addField('PV', 150, true)
			.addField('Dgt', 5, true)
			.addField('Init..', 'Très lent (5)', true)
			.addField('Zone', 'Multi-cible (4)', true)
			.setFooter('BOSS');
	}
	if (args[0] === 'Inventaire') {
		message.channel.send({
			embed: {
				color: 'green',
				description: `Inventaire de ${message.author}`
			}
		})
		embed
			.setThumbnail('https://tr.rbxcdn.com/e7a0eb7e081ce4fe3c2483a33633acf6/420/420/Decal/Png')
			.addField('Armes CàC(Dégats)', 'Epée(12)')
			.addField('Armes Distance(Dégats)', 'Pistolet(2), fusil blaster-600-BX12(50)')
			.addField('Objets', 'Viseur Fusil, Lampe UV, Préservatif', true)
			.addField('Ressources(Quantité)', 'Nourriture (12), Carburant (567), Metal (45), Minerai de Metal (56)')
			.addField('IntergaCred', 2213); 
	}
	message.channel.send(embed);	
};

exports.help = {
	name: 'test'
};
