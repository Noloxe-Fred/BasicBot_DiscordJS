const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	const embed = new MessageEmbed();

  embed.setTitle('||Titre d\'embed spoilé||')
  .addField('||💠 **Information générales**||', '---------');
  console.log(embed)
	message.channel.send(embed);
};

exports.help = {
	name: 'test'
};
