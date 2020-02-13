const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

  message.delete();

	const text = args.join(' ');
  const paragraphs = text.split('/b');
	const embed = new MessageEmbed();


	embed
		.setTitle(`${message.author.username} dit:`)

  paragraphs.forEach(element => {
    embed.addField('', element)
  });

	message.channel.send(embed);
};

exports.help = {
	name: 'rp'
};
