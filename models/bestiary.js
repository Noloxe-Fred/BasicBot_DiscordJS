const mongoose = require('mongoose');

const bestiarySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: String,
	monsterName: String,
  life: Array,
  damage: Array,
  initiative: Array,
  zone: Array,
  channelId: Array,
  boss: Boolean,
  escape: Boolean,
  competences: {
    first: Array,
    second: Array
  },
  imageUrl: String
});

module.exports = mongoose.model('Bestiary', bestiarySchema);
