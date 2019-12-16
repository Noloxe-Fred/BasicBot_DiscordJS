const mongoose = require('mongoose');

const characterSheetSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username: String,
	main: {
		charactername: String,
		faction: String,
		gender: String,
		level: Number,
		xp: Number,
		profession: {
			name: String,
			grade: String
		},
		credit: Number
	},
	skills: {
		first: String,
		second: String
	},
	health: {
		life: Number,
		energy: Number,
		sickness: String
	},
	trait: {
		strength: Number,
		intelligence: Number,
		dexterity: Number,
		constitution: Number,
		haggle: Number,
		charism: Number
	}
});

module.exports = mongoose.model('Character', characterSheetSchema);
