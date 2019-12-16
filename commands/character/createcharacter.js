exports.run = async (client, message, args) => {
	const user = message.author;

	const newCharacter = {
		main: {
			nickname: user.username,
			charactername: 'Nom du personnage',
			gender: 'Homme',
			level: 1,
			xp: 0,
			profession: {
				name: 'Medic',
				grade: 'Noob'
			},
			credit: 500
		},
		skills: {
			first: 'Soin',
			second: null
		},
		health: {
			life: 100,
			energy: 50,
			sickness: null
		},
		trait: {
			strength: 10,
			intelligence: 9,
			dexterity: 8,
			constitution: 8,
			haggle: 7,
			charism: 7
		}
	};
	console.log(client);

	// await client.createCharacter(newCharacter);
};

exports.help = {
	name: 'createcharacter'
};
