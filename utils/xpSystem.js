const { MessageEmbed } = require('discord.js');
const { XPMAX } = require('./constants.js');
const tripleBackTits = '```'

const addXp = async (client, message, xp) => {
	const character = await client.getCharacterSheet(message.author);
	let xpMessage = tripleBackTits +`CSS\nVous avez gagné ${xp.toString()} XP\n` + tripleBackTits;
	const embed = new MessageEmbed()
		.setTitle(`Vous avez gagné ${xp} XP`);

	let newXp = character.main.xp + xp;
	let newLevel = character.main.level;

	if (newXp >= XPMAX) {
		newLevel += 1;
		newXp -= XPMAX;
		character.main.xp = newXp;
		xpMessage = xpMessage + `\n` + tripleBackTits +`CS\nVous avez gagné un niveau\n` + tripleBackTits;
		embed.setDescription('Vous avez gagné un niveau');
	}

	await client.updateCharacterSheetByUser(message.author, { main: { ...character.main, xp: newXp, level: newLevel } });

	embed
		.addField('XP', `${newXp}/${XPMAX}`, true)
		.addField('Niveau', `${newLevel}`, true);

	xpMessage = xpMessage + tripleBackTits + `\nXP: ${newXp}/${XPMAX}` + `\nNiveau: ${newLevel}` + tripleBackTits;
	message.channel.send(embed);
	message.channel.send(xpMessage);
};

module.exports = {
	addXp
};
