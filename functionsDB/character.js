const mongoose = require('mongoose');
const { CharacterSheet } = require('../models/index');

module.exports = client => {
	client.getCharacterSheet = async user => {
		const data = await CharacterSheet.findOne({ username: user.username });
		if (data) return data;
		console.log('Erreur getCharacterSheet');
		return undefined;
	};

	client.updateCharacterSheetByUser = async (user, settings) => {
		let data = await client.getCharacterSheet(user);
		if (typeof data !== 'object') data = {};
		for (const key in settings) {
			if (data[key] !== settings[key]) data[key] = settings[key];
		}
		console.log('DATA = ', data);
		return data.updateOne(settings);
	};

	client.createCharacter = async characterSheet => {
		const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, characterSheet);
		const createCharacter = await new CharacterSheet(merged);
		createCharacter.save().then(c => console.log(`New Character -> ${c.main.charactername}`));
	};
};
