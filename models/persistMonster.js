const mongoose = require('mongoose');

const persistMonsterSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  channelName: String,
  monster: Boolean,
  embedData: Object
});

module.exports = mongoose.model('PersistMontser', persistMonsterSchema);
