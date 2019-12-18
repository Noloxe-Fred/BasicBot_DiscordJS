const { MessageEmbed } = require('discord.js');
const { XPMAX } = require('./constants.js');

const addXp = async (client, message, xp) => {
	const character = await client.getCharacterSheet(message.author);
	const embed = new MessageEmbed()
		.setTitle(`Vous avez gagné ${xp} XP`);

	let newXp = character.main.xp + xp;
	let newLevel = character.main.level;

	if (newXp >= XPMAX) {
		newLevel += 1;
		newXp -= XPMAX;
		character.main.xp = newXp;
		embed.setDescription('Vous avez gagné un niveau');
	}

	await client.updateCharacterSheetByUser(message.author, { main: { ...character.main, xp: newXp, level: newLevel } });

	embed
		.addField('XP', `${newXp}/${XPMAX}`, true)
		.addField('Niveau', `${newLevel}`, true);

	message.channel.send(embed);
};

module.exports = {
	addXp
};
