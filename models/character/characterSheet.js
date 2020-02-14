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
		reputation: Number,
		credit: Number
	},
	profession: {
		name: String,
		xp: Number,
		level: Number,
		firstSkill: {
			name: String,
			level: Number
		},
		secondSkill: {
			name: String,
			level: Number
		}
	},
	skills: {
		first: {
			name: String,
			level: Number
		},
		second: {
			name: String,
			level: Number
		}
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
		initiative: Number,
		charism: Number
	}
});

module.exports = mongoose.model('Character', characterSheetSchema);
