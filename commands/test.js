const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	let exampleEmbed = new MessageEmbed();
	
	const receivedEmbed = args.join(' ');
	console.log(receivedEmbed)

	exampleEmbed = JSON.parse(receivedEmbed);

	message.channel.send({embed: exampleEmbed });

	// .react(':thumbsdown:')

};

exports.help = {
	name: 'test'
};
