const { MessageEmbed } = require('discord.js');

// TEST PROMESSE

// const stepThree = (newCharacter, message, client) => {
// 	return new Promise((resolve, reject) => {
// 		console.log(newCharacter)
// 		message.channel.send('Choissisez votre faction: 👍: Alliance / 👎: Horde ')
// 			.then(async message => {
// 				await message.react('👍');
// 				await message.react('👎');
// 				await message.react('✅');
// 				let countFaction = 0;
// 				newCharacter.faction = '';
// 				const factionMessage = message.id;
// 				client.on('messageReactionAdd', (reaction, user) => {
// 					if (reaction.message.id === factionMessage) {
// 						if (reaction.emoji.name === '👍' && user.username !== 'SooD') {
// 							newCharacter.faction = 'Alliance';
// 							countFaction += 1;
// 						}
// 						if (reaction.emoji.name === '👎' && user.username !== 'SooD') {
// 							newCharacter.faction = 'Horde';
// 							countFaction += 1;
// 						}
// 						if (reaction.emoji.name === '✅' && user.username !== 'SooD') {
// 							if (countFaction === 0) {
// 								message.channel.send('Vous n\'avez pas choisi de faction');
// 								return reject(stepThree(newCharacter, message, client)
// 									.then(() => { console.log('FIN'); })
// 									.catch(newCharacter => stepThree(newCharacter, message, client)));
// 							}
// 							if (countFaction > 1) {
// 								message.channel.send('Vous avez choisi plusieurs factions');
// 								return reject(stepThree(newCharacter, message, client)
// 									.then(() => { console.log('FIN'); })
// 									.catch(newCharacter => stepThree(newCharacter, message, client)));
// 							}
// 							message.channel.send('Votre création de personnage est terminée');
// 							message.channel.send(`Vous êtes un ${newCharacter.profession.name}, avec pour compétence ${newCharacter.skills} et vous avez rejoint la faction ${newCharacter.faction}`);
// 							return resolve();
// 						}
// 					}
// 				});
// 			});
// 	});
// };

// const stepTwo = (newCharacter, message, client) => {
// 	return new Promise((resolve, reject) => {
// 		message.channel.send('Choissisez votre compétence: 👍: Soin / 👎: Tir précis / ✊: Réparation')
// 			.then(async message => {
// 				await message.react('👍');
// 				await message.react('👎');
// 				await message.react('✊');
// 				await message.react('✅');
// 				let countSkills = 0;
// 				newCharacter.skills = '';
// 				const skillsMessage = message.id;
// 				client.on('messageReactionAdd', (reaction, user) => {
// 					if (reaction.message.id === skillsMessage) {
// 						if (reaction.emoji.name === '👍' && user.username !== 'SooD') {
// 							newCharacter.skills = 'Soin';
// 							countSkills += 1;
// 						}
// 						if (reaction.emoji.name === '👎' && user.username !== 'SooD') {
// 							newCharacter.skills = 'Tir Précis';
// 							countSkills += 1;
// 						}
// 						if (reaction.emoji.name === '✊' && user.username !== 'SooD') {
// 							newCharacter.skills = 'Réparation';
// 							countSkills += 1;
// 						}
// 						if (reaction.emoji.name === '✅' && user.username !== 'SooD') {
// 							if (countSkills === 0) {
// 								message.channel.send('Vous n\'avez pas choisi de compétences');
// 								return reject(stepTwo(newCharacter, message, client)
// 									.then(newCharacter => stepThree(newCharacter, message, client)
// 										.then(() => { console.log('FIN'); })
// 										.catch(newCharacter => stepThree(newCharacter, message, client)))
// 									.catch(newCharacter => stepTwo(newCharacter, message, client)));
// 							}
// 							if (countSkills > 1) {
// 								message.channel.send('Vous avez choisi plusieurs compétences');
// 								return reject(stepTwo(newCharacter, message, client)
// 									.then(newCharacter => stepThree(newCharacter, message, client)
// 										.then(() => { console.log('FIN'); })
// 										.catch(newCharacter => stepThree(newCharacter, message, client)))
// 									.catch(newCharacter => stepTwo(newCharacter, message, client)));
// 							}
// 							message.channel.send('Etape 3');
// 							return resolve(stepThree(newCharacter, message, client)
// 								.then(() => { console.log('FIN'); })
// 								.catch(newCharacter => stepThree(newCharacter, message, client)));
// 						}
// 					}

// 				});
// 			});
// 	});
// };

// const proffesionChoice = (newCharacter, messageOrigin, client) => {
// 	return new Promise((resolve, reject) => {
// 		messageOrigin.channel.send('Choissisez votre métier: 👍: Explorateur / 👎: Milicien / ✊: Medecin')
// 			.then(async message => {
// 				await message.react('👍');
// 				await message.react('👎');
// 				await message.react('✊');
// 				await message.react('✅');
// 				newCharacter.profession.name = '';
// 				let countProfession = 0;
// 				const professionMessage = message.id;
// 				client.on('messageReactionAdd', (reaction, user) => {
// 					if (reaction.message.id === professionMessage) {
// 						if (reaction.emoji.name === '👍' && user.username !== 'SooD') {
// 							newCharacter.profession.name = 'Explorateur';
// 							countProfession += 1;
// 						}
// 						if (reaction.emoji.name === '👎' && user.username !== 'SooD') {
// 							newCharacter.profession.name = 'Milicien';
// 							countProfession += 1;
// 						}
// 						if (reaction.emoji.name === '✊' && user.username !== 'SooD') {
// 							newCharacter.profession.name = 'Medecin';
// 							countProfession += 1;
// 						}
// 						if (reaction.emoji.name === '✅' && user.username !== 'SooD') {
// 							console.log(countProfession)
// 							if (countProfession === 0) {
// 								message.channel.send('Vous n\'avez pas choisi de métier');
// 								return reject(proffesionChoice(newCharacter, messageOrigin, client)
// 									.then(newCharacter =>
// 										stepTwo(newCharacter, messageOrigin, client)
// 											.then(newCharacter => stepThree(newCharacter, messageOrigin, client)
// 												.then(() => { console.log('FIN'); })
// 												.catch(newCharacter => stepThree(newCharacter, messageOrigin, client)))
// 											.catch(newCharacter => stepTwo(newCharacter, messageOrigin, client)))
// 									.catch(m => console.log(m)));
// 							}
// 							else if (countProfession > 1) {
// 								message.channel.send('Vous avez choisi plusieurs métier');
// 								console.log(message.reactions);
// 								return reject(proffesionChoice(newCharacter, messageOrigin, client)
// 									.then(newCharacter =>
// 										stepTwo(newCharacter, messageOrigin, client)
// 											.then(newCharacter => stepThree(newCharacter, messageOrigin, client)
// 												.then(() => { console.log('FIN'); })
// 												.catch(newCharacter => stepThree(newCharacter, messageOrigin, client)))
// 											.catch(newCharacter => stepTwo(newCharacter, messageOrigin, client)))
// 									.catch(m => console.log(m)));
// 							}
// 							message.channel.send('Etape 2');
// 							resolve(newCharacter, client);
// 						}
// 					}

// 				});
// 			});
// 	});
// };

// TEST SANS PROMESSE

const stepThreeAwait = (newCharacter, messageOrigin, client) => {
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
					if (reaction.emoji.name === '✅' && user.username !== 'SooD') {
						let countResponse = 0;
						message.reactions.forEach(reaction => {
							if (reaction.count === 2) {
								countResponse += 1;
							}
						});

						if (countResponse < 2) {
							message.channel.send("`Vous n'avez pas choisi de faction, merci de recommencer`");
							return stepThreeAwait(newCharacter, messageOrigin, client);
						} else if (countResponse > 2) {
							message.channel.send('`Vous avez choisi plusieurs factions, merci de recommencer`');
							return stepThreeAwait(newCharacter, messageOrigin, client);
						}
						const profession = message.reactions.find(reaction => reaction.count === 2 && reaction.emoji.name !== '✅')

						switch (profession.emoji.name) {
							case '👍':
								newCharacter.faction = 'Alliance';
								message.channel.send('`Votre création de personnage est terminée`');
								message.channel.send(`Vous êtes un \`${newCharacter.profession.name}\`, avec pour compétence \`${newCharacter.skills}\` et vous avez rejoint la faction \`${newCharacter.faction}\``);
								return newCharacter;
							case '👎':
								console.log(newCharacter.profession.name)
								if (newCharacter.profession.name === 'Milicien') {
									message.channel.send('`Vous êtes Milicien, vous ne pouvez pas rejoindre la Horde`');
									return stepThreeAwait(newCharacter, messageOrigin, client);
								}
								newCharacter.faction = 'Horde';
								message.channel.send('`Votre création de personnage est terminée`');
								message.channel.send(`Vous êtes un \`${newCharacter.profession.name}\`, avec pour compétence \`${newCharacter.skills}\` et vous avez rejoint la faction \`${newCharacter.faction}\``);
								return newCharacter;
							default:
								return stepThreeAwait(newCharacter, messageOrigin, client);
						}
					}
				}
			});
		});
};

const stepTwoAwait = (newCharacter, messageOrigin, client) => {
	const displayEmbed = new MessageEmbed();
	displayEmbed
		.setTitle('Choix de votre compétence')
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
					if (reaction.emoji.name === '✅' && user.username !== 'SooD') {
						let countResponse = 0;
						message.reactions.forEach(reaction => {
							if (reaction.count === 2) {
								countResponse += 1;
							}
						});

						if (countResponse < 2) {
							message.channel.send("`Vous n'avez pas choisi de compétence, merci de recommencer`");
							return stepTwoAwait(newCharacter, messageOrigin, client);
						} else if (countResponse > 2) {
							message.channel.send('`Vous avez choisi plusieurs compétences, merci de recommencer`');
							return stepTwoAwait(newCharacter, messageOrigin, client);
						}
						const profession = message.reactions.find(reaction => reaction.count === 2 && reaction.emoji.name !== '✅')

						switch (profession.emoji.name) {
							case '👍':
								newCharacter.skills = 'Soin';
								return stepThreeAwait(newCharacter, messageOrigin, client);
							case '👎':
								newCharacter.skills = 'Tir Précis';
								return stepThreeAwait(newCharacter, messageOrigin, client);
							case '✊':
								newCharacter.skills = 'Réparation';
								return stepThreeAwait(newCharacter, messageOrigin, client);
							default:
								return stepTwoAwait(newCharacter, messageOrigin, client);
						}
					}
				}
			});
		});
};


const professionChoiceAwait = (newCharacter, messageOrigin, client) => {
	const displayEmbed = new MessageEmbed();
	displayEmbed
		.setTitle('Choix de votre métier')
		.setThumbnail('https://static.lpnt.fr/images/2019/02/04/18024426lpw-18024452-article-jpg_5936274_980x426.jpg')
		.addField('👍 Explorateur', 'Vos missions vous emmèneront aux quatre coins de l\'univers')
		.addField('👎 Milicien', 'Vous devrez "protéger" la population, en répondant à l\'Ordre')
		.addField('✊ Medic', 'Tenez vous prêt à secourir les plus aguerris');

	messageOrigin.channel.send(displayEmbed)
		.then(async message => {
			await message.react('👍');
			await message.react('👎');
			await message.react('✊');
			await message.react('✅');
			newCharacter.profession.name = '';
			// let countProfession = 0;
			const professionMessage = message.id;
			client.on('messageReactionAdd', (reaction, user) => {
				if (reaction.message.id === professionMessage) {

					if (reaction.emoji.name === '✅' && user.username !== 'SooD') {
						let countResponse = 0;
						message.reactions.forEach(reaction => {
							if (reaction.count === 2) {
								countResponse += 1;
							}
						});

						if (countResponse < 2) {
							message.channel.send("`Vous n'avez pas choisi de métier, merci de recommencer`");
							return professionChoiceAwait(newCharacter, messageOrigin, client);
						} else if (countResponse > 2) {
							message.channel.send('`Vous avez choisi plusieurs métiers, merci de recommencer`');
							return professionChoiceAwait(newCharacter, messageOrigin, client);
						}
						const profession = message.reactions.find(reaction => reaction.count === 2 && reaction.emoji.name !== '✅')
						console.log(profession.emoji.name)
						switch (profession.emoji.name) {
							case '👍':
								console.log('choix')
								newCharacter.profession.name = 'Explorateur';
								return stepTwoAwait(newCharacter, messageOrigin, client);
							case '👎':
								newCharacter.profession.name = 'Milicien';
								return stepTwoAwait(newCharacter, messageOrigin, client);
							case '✊':
								newCharacter.profession.name = 'Medic';
								return stepTwoAwait(newCharacter, messageOrigin, client);
							default:
								newCharacter.profession.name = 'Erreur';
								return professionChoiceAwait(newCharacter, messageOrigin, client);
						}
					}
				}
			});
		});
};

exports.run = async (client, message, args) => {

	let newCharacter = {
		name: message.author.username,
		level: 1,
		xp: 0,
		profession: {
			name: '',
			grade: 'newbie'
		},
		faction: '',
		life: 50,
		weapons: '',
		resources: [],
		skills: '',
		credit: 100,
		avatar: message.author.avatarURL()
	};

	message.channel.send('Bienvenue dans la création de personnage');
	message.channel.send('Vous allez choisir votre métier, votre compétence de départ et votre faction');
	message.channel.send('A chaque fois, cliquez sur le réaction de votre choix, puis validez');

	newCharacter = professionChoiceAwait(newCharacter, message, client);

	// console.log('CMD createCharacter', newCharacter);
	// await client.createCharacter(newCharacter);
};

exports.help = {
	name: 'createcharacter'
};
