const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	message.channel.send('test')
};

exports.help = {
	name: 'test'
};
