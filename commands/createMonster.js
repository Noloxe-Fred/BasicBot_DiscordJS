exports.run = async (client, message, args) => {
	const newMonster = {
    monsterName: args[0], // string
    life: args[1], // number
    damage: args[2], // number
    initiative: args[3], // number
    zone: args[4], // number
    channelId: args[5], // number
    boss: args[6], // bool
    escape: args[7], // bool = false
    competences: {
      first: args[8], // string || null
      second: args[9], // string || null
	  },
    imageUrl: args[10]
  };
  console.log('CMD createMonster', newMonster);
	await client.createMonster(newMonster);
};

exports.help = {
  name: 'createMonster'
};
