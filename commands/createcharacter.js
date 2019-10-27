exports.run = async (client, message, args) => { 

	const newCharacter = {
		name: message.author.username,
		level: 1,
		xp: 0,
		profession: {
			name: args[0],
			grade: 'newbie'
		},
		life: 50,
		weapons: [args[1]],
		resources: [],
		skills: [args[2]],
    credit: 100,
		avatar: message.author.avatarURL()
	};

	console.log('CMD createCharacter', newCharacter);
	await client.createCharacter(newCharacter);
};

exports.help = {
	name: 'createcharacter'
};
