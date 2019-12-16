exports.run = async (client, message, args) => {
	message.channel.send('Vous avez tué le streumon, vous gagnez 8 XP!');

	const character = await client.getCharacterSheet(message.author);

	let newXp = character.main.xp + 8;
	let newLevel = character.main.level;
  
	if (newXp >= 20) {
		newLevel += 1;
		newXp -= 20;
		character.main.xp = newXp;
		message.channel.send('Vous avez gagné un niveau')
	}

	await client.updateCharacterSheetByUser(message.author, { main: { ...character.main, xp: newXp, level: newLevel } });
	message.channel.send(`XP: ${newXp} || Niveau: ${newLevel}`);
};

exports.help = {
	name: 'frappe'
};
