module.exports = (client, messageReaction) => {
  console.log('REACTION', client, 'USER', messageReaction)
  console.log(messageReaction.message.embeds)
};
