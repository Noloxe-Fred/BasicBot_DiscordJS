const { MessageEmbed } = require('discord.js');
const { professions } = require('../../datas/profession');

// const stepOne = require('../../quests/createCharacter/stepOne');
// Création finale en BDD 

const saveCharacter = (newCharacter, client) => {
	console.log('SAVE CHARACTER', newCharacter);
	// if (await client.getCharacterSheet(message.author)) return message.channel.send('Vous avez déjà un personnage');

	// const newCharacter = {
	// 	username: user.username,
	// 	main: {
	// 		charactername: user.username,
	// 		faction: 'MadMaxiens',
	// 		gender: 'Homme',
	// 		level: 1,
	// 		xp: 0,
	// 		profession: {
	// 			name: 'Medic',
	// 			grade: 'Noob'
	// 		},
	// 		credit: 500
	// 	},
	// 	skills: {
	// 		first: 'Soin',
	// 		second: null
	// 	},
	// 	health: {
	// 		life: 100,
	// 		energy: 50,
	// 		sickness: null
	// 	},
	// 	trait: {
	// 		strength: 10,
	// 		intelligence: 9,
	// 		dexterity: 8,
	// 		constitution: 8,
	// 		haggle: 7,
	// 		charism: 7
	// 	}
	// };

	// message.channel.send('Personnage créé');

// await client.createCharacter(newCharacter);
};


const stepThree = (newCharacter, messageOrigin, client) => {
	const displayEmbed = new MessageEmbed();
	displayEmbed
		.setTitle('Choix de votre faction')
		.setThumbnail('https://www.atlantyd.org/wp-content/uploads/2019/07/ob_b7d2d5_935601-gorgerous-a-song-of-ice-and-fir-1038x584.jpg')
		.addField('👍 Alliance', 'L\'Ordre, la Loi, la puissance en place qui régit le systême solaire Antonius')
		.addField('👎 Horde', 'Le contre-pouvoir, qui souhaite renverser l\'Alliance');

	messageOrigin.channel.send(displayEmbed)
		.then(async message => {
			await message.react('👍');
			await message.react('👎');
			await message.react('✅');
			newCharacter.faction = '';
			const factionMessage = message.id;
			client.on('messageReactionAdd', (reaction, user) => {
				if (reaction.message.id === factionMessage) {
					if (reaction.emoji.name === '✅' && user.username === messageOrigin.author.username) {
						const response = message.reactions.filter(reaction => reaction.users.find(user => user.username === messageOrigin.author.username));
						let countResponse = 0;
						response.forEach(r => {countResponse = countResponse + 1});

						if (countResponse < 2) {
							message.channel.send("`Vous n'avez pas choisi de faction, merci de recommencer`");
							return stepThree(newCharacter, messageOrigin, client);
						} else if (countResponse > 2) {
							message.channel.send('`Vous avez choisi plusieurs factions, merci de recommencer`');
							return stepThree(newCharacter, messageOrigin, client);
						}
						const faction = response.find(reaction => reaction.emoji.name !== '✅')

						switch (faction.emoji.name) {
							case '👍':
								newCharacter.faction = 'Alliance';
								message.channel.send('`Votre création de personnage est terminée`');
								message.channel.send(`Vous êtes un \`${newCharacter.profession.name}\`, avec pour compétence \`${newCharacter.skills}\` et vous avez rejoint la faction \`${newCharacter.faction}\``);
								return saveCharacter(newCharacter, client);
							case '👎':
								if (newCharacter.profession.name === 'Milicien') {
									message.channel.send('`Vous êtes Milicien, vous ne pouvez pas rejoindre la Horde`');
									return stepThree(newCharacter, messageOrigin, client);
								}
								newCharacter.faction = 'Horde';
								message.channel.send('`Votre création de personnage est terminée`');
								message.channel.send(`Vous êtes un \`${newCharacter.profession.name}\`, avec pour compétence \`${newCharacter.skills}\` et vous avez rejoint la faction \`${newCharacter.faction}\``);
								return saveCharacter(newCharacter, client);
							default:
								return stepThree(newCharacter, messageOrigin, client);
						}
					}
				}
			});
		});
};

const stepTwo = (newCharacter, messageOrigin, client) => {
	const displayEmbed = new MessageEmbed();
	displayEmbed
		.setTitle('Choix de vos compétence')
		.setThumbnail('http://www.rpgfrance.com/medias/images/elementspace_ban.png')
		.addField('👍 Soin', 'Vous permet de vous soigner, ainsi que vos coéquipiers')
		.addField('👎 Tir Précis', 'Votre sang froid vous permettra d\'augementer vos chances de toucher votre cible')
		.addField('✊ Réparation', 'VOus aurez la possibilité de réparer votre matériel, et même votre vaisseau au plus haut niveau');

	messageOrigin.channel.send(displayEmbed)
		.then(async message => {
			await message.react('👍');
			await message.react('👎');
			await message.react('✊');
			await message.react('✅');
			newCharacter.skills = '';
			const skillsMessage = message.id;
			client.on('messageReactionAdd', (reaction, user) => {
				if (reaction.message.id === skillsMessage) {
					if (reaction.emoji.name === '✅' && user.username === messageOrigin.author.username) {
						const response = message.reactions.filter(reaction => reaction.users.find(user => user.username === messageOrigin.author.username));
						let countResponse = 0;
						response.forEach(r => {countResponse = countResponse + 1});

						if (countResponse < 2) {
							message.channel.send("`Vous n'avez pas choisi de compétence, merci de recommencer`");
							return stepTwo(newCharacter, messageOrigin, client);
						} else if (countResponse > 2) {
							message.channel.send('`Vous avez choisi plusieurs compétences, merci de recommencer`');
							return stepTwo(newCharacter, messageOrigin, client);
						}
						const skill = response.find(reaction => reaction.emoji.name !== '✅');

						switch (skill.emoji.name) {
							case '👍':
								newCharacter.skills = 'Soin';
								return stepThree(newCharacter, messageOrigin, client);
							case '👎':
								newCharacter.skills = 'Tir Précis';
								return stepThree(newCharacter, messageOrigin, client);
							case '✊':
								newCharacter.skills = 'Réparation';
								return stepThree(newCharacter, messageOrigin, client);
							default:
								return stepTwo(newCharacter, messageOrigin, client);
						}
					}
				}
			});
		});
};

const stepOne = (newCharacter, messageOrigin, client) => {
	const displayEmbed = new MessageEmbed();
	displayEmbed
		.setTitle('Choix de votre métier')
		.setThumbnail('https://static.lpnt.fr/images/2019/02/04/18024426lpw-18024452-article-jpg_5936274_980x426.jpg')
		.setDescription('Si tu veux participer à la vie ici mon gars, va falloir filer un coup d\'main. Alors, dis moi tout, tu sais faire quoi?')
	professions.forEach(profession => {
		displayEmbed.addField(`${profession.icon} ${profession.name}`, profession.desc)
	});

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
						const professionSelected = response.find(reaction => reaction.emoji.name !== '✅');

						switch (professionSelected.emoji.name) {
							case '🏃‍♂️':
								newCharacter.profession.name = 'Explorateur';
								return stepTwo(newCharacter, messageOrigin, client);
							case '💉':
								newCharacter.profession.name = 'Milicien';
								return stepTwo(newCharacter, messageOrigin, client);
							default:
								newCharacter.profession.name = 'Erreur';
								return stepOne(newCharacter, messageOrigin, client);
						}
					}
				}
			});
		});
};

exports.run = (client, message, args) => {
	console.log('CreateCharatcer stepONe:', stepOne);
	let newCharacter = {
		username: message.author.username,
		main: {
			charactername: message.author.username,
			faction: 'Telluriens',
			gender: '',
			level: 1,
			xp: 0,
			reputation: 0,
			credit: ''
		},
		profession: {
			name: '',
			xp: 0,
			level: 1,
			firstSkill: {
				name: '',
				level: 1
			},
			secondSkill: {
				name: '',
				level: 1
			}
		},
		skills: {
			first: {
				name: '',
				level: 1
			},
			second: {
				name: '',
				level: 1
			}
		},
		health: {
			life: '',
			energy: '',
			sickness: ''
		},
		trait: {
			strength: 0,
			intelligence: 0,
			dexterity: 0,
			constitution: 0,
			initiative: 0,
			charism: 0
		}
	};

	message.channel.send('Bienvenue dans la création de personnage');
	message.channel.send('Vous allez choisir votre métier, votre compétence de départ et votre faction');
	message.channel.send('A chaque fois, cliquez sur le réaction de votre choix, puis validez');

	stepOne(newCharacter, message, client);
};

exports.help = {
	name: 'createcharacter'
};
