const mongoose = require('mongoose');

const bestiarySchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	monsterName: String,
  life: Number,
  damage: Number,
  initiative: Number,
  zone: Number,
  channelId: Number,
  boss: Boolean,
  escape: Boolean,
  competences: {
    first: String,
    second: String,
  },
  imageUrl: String
});

module.exports = mongoose.model('Bestiary', bestiarySchema);
