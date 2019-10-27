exports.run = async (client, message, args) => {
  
	const randomNumber = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min) + 1;
	};

	const monster = await client.getMonster(message.channel.name);

	const embedData = {
		name: monster.monsterName,
		picture: monster.imageUrl,
		life: randomNumber(monster.life[0], monster.life[1]),
		damage: randomNumber(monster.damage[0], monster.damage[1]),
		initiative: randomNumber(monster.initiative[0], monster.initiative[1]),
		zone: randomNumber(monster.zone[0], monster.zone[1])
	};

	const saveMonster = {
		channelName: message.channel.name,
		monster: true,
		embedData
	};

	client.persistMonster(saveMonster).then(client.displayMonster(message));
};

exports.help = {
	name: 'popmonster'
};
