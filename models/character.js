const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	level: Number,
	xp: Number,
	profession: {
		name: String,
		grade: String
	},
	life: Number,
	weapons: Array,
	resources: Array,
	skills: Array,
	credit: Number,
	avatar: String
});

module.exports = mongoose.model('Character', characterSchema);
