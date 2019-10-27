exports.run = async (client, message, args) => { 
	let newMonster = {};

	if (args[0] === 'simple') {
		newMonster = {
			monsterName: args[1], // string
			type: args[0],
			life: [10, 25], // number
			damage: [2, 10], // number
			initiative: [3, 6], // number
			zone: [1, 2], // number
			channelId: ['Liste de channel'], // number
			boss: false, // bool
			escape: false, // bool = false
			competences: {
				first: ['Soin', 'Saignement', 'Poison', '', '', ''], // string || null
				second: ['Soin', 'Saignement', 'Poison', '', '', ''] // string || null
			},
			imageUrl: args[2]
		};
	}

	if (args[0] === 'hard') {
		newMonster = {
			monsterName: args[1], // string
			type: args[0],
			life: [40, 100], // number
			damage: [20, 50], // number
			initiative: [3, 8], // number
			zone: [1, 6], // number
			channelId: ['Liste de channel'], // number
			boss: [true, false], // bool
			escape: false, // bool = false
			competences: {
				first: ['Soin', 'Saignement', 'Poison', '', '', ''], // string || null
				second: ['Soin', 'Saignement', 'Poison', '', '', ''] // string || null
			},
			imageUrl: args[2]
		};
	}

	console.log('CMD createMonster', newMonster);
	await client.createMonster(newMonster);
};

exports.help = {
	name: 'createmonster'
};
