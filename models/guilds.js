const mongoose = require('mongoose');
const { DEFAULTSETTINGS: defaults } = require('../config.js');

const guildSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	guildID: String,
	guildName: String,
	prefix: {
		'type': String,
		'default': defaults.prefix
	},
	welcomeChannel: {
		'type': String,
		'default': defaults.welcomeChannel
	},
	welcomeMessage: {
		'type': String,
		'default': defaults.welcomeMessage
	}
});

module.exports = { Guild: mongoose.model('Guild', guildSchema) };
