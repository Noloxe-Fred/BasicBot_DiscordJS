const { XPMAX } = require('./constants.js');

const addXp = async (client, message, xp) => {
	const character = await client.getCharacterSheet(message.author);

	let newXp = character.main.xp + xp;
	let newLevel = character.main.level;

	if (newXp >= XPMAX) {
		newLevel += 1;
		newXp -= XPMAX;
		character.main.xp = newXp;
		message.channel.send('Vous avez gagné un niveau')
	}

	await client.updateCharacterSheetByUser(message.author, { main: { ...character.main, xp: newXp, level: newLevel } });
	message.channel.send(`XP: ${newXp} || Niveau: ${newLevel}`);
};

module.exports = {
	addXp
};
