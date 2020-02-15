const { MessageEmbed } = require('discord.js');
const { professions } = require('../../datas/profession');

module.exports = (newCharacter, messageOrigin, client) => {
	const displayEmbed = new MessageEmbed();
	displayEmbed
		.setTitle('Choix de votre métier')
		.setThumbnail('https://static.lpnt.fr/images/2019/02/04/18024426lpw-18024452-article-jpg_5936274_980x426.jpg')
		.setDescription('Si tu veux participer à la vie ici mon gars, va falloir filer un coup d\'main. Alors, dis moi tout, tu sais faire quoi?')
	professions.forEach(profession => {
		displayEmbed.addField(`${profession.icon} ${profession.name}`, profession.desc)
	})

	// .addField(':man_running: Explorateur', 'Vous avez énormément parcouru le monde, connaissez la nature et les raccourcis qu\'on y trouve. ')
	// .addField(':syringe: Soigneur', 'Tenez vous prêt à secourir les plus aguerris')
	// .addField(':wrench: Ferrailleur', 'Chercheur et manipulateur de métal, orienté objet et mécanisme. ')
	// .addField(':hammer: Armurier', 'Chercheur et manipulateur de métal, orienté armes. ')
	// .addField(':pick: Collecteur', 'Maître des ressources, vous savez dénicher n\'importe quoi. ')
	// .addField(':crossed_swords: Garde', 'Vous protégez les Telluriens, en ville comme en dehors. Vous serez garants de la loi et aurez la possibilité de procéder à des arrestations. ');

	messageOrigin.channel.send(displayEmbed)
		.then(async message => {
			professions.forEach(async profession => {
				console.log('EMOJI IN STEONE', profession.icon)
				return await message.react(profession.icon);
			})
			// await message.react('🏃‍♂️');
			// await message.react('💉');
			// await message.react('🔧');
			// await message.react('🔨');
			// await message.react('⛏️');
			// await message.react('⚔️');
			await message.react('✅');
			newCharacter.profession.name = '';
			// let countProfession = 0;
			const professionMessage = message.id;
			client.on('messageReactionAdd', (reaction, user) => {
				if (reaction.message.id === professionMessage) {

					if (reaction.emoji.name === '✅' && user.username === messageOrigin.author.username) {
						const response = message.reactions.filter(reaction => reaction.users.find(user => user.username === messageOrigin.author.username));
						let countResponse = 0;
						response.forEach(r => {countResponse = countResponse + 1});

						if (countResponse < 2) {
							message.channel.send("`Vous n'avez pas choisi de métier, merci de recommencer`");
							return stepOne(newCharacter, messageOrigin, client);
						} else if (countResponse > 2) {
							message.channel.send('`Vous avez choisi plusieurs métiers, merci de recommencer`');
							return stepOne(newCharacter, messageOrigin, client);
						}
						return response.find(reaction => reaction.emoji.name !== '✅');
					}
				}
			});
		});
};