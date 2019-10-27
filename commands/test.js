const { MessageEmbed } = require('discord.js');

const createCharacter = message => {
	message.channel.send('Voulez vous créer un personnage?');
	message.channel.send('👍: Oui 👎: Non')
		.then(async message => {
			await message.react('👍');
			await message.react('👎');
			await message.react('✅');

			message.awaitReactions(r => ['👍', '👎', '✅'].includes(r.emoji.name), { max: 3 })
				.then(collected => {
					const userChoice = collected;
					console.log('REACTION', userChoice);

					if (userChoice.find(choice => choice.emoji.name === '✅' && choice.count === 2)) {
						if (userChoice.find(choice => choice.emoji.name === '👍')) {
							return message.channel.send('Allons-y! Etape 1: blablabla');
						}
						if (userChoice.find(choice => choice.emoji.name === '👎')) {
							return message.channel.send('Petit joueur')
						}
						message.channel.send('Vous n\'avez pas fait de choix')
					}
					message.channel.send('Vous n\'avez pas fait de choix')
					createCharacter(message);
				});
		});
}

exports.run = (client, message, args) => {

	createCharacter(message);
	// .react(':thumbsdown:')

};

exports.help = {
	name: 'test'
};
