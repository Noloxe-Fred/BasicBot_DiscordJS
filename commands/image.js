const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {
	message.delete({ timeout: 3000 });

	if (args[0] === 'chien') {
		const dog = await fetch('https://dog.ceo/api/breeds/image/random')
			.then(res => res.json())
			.then(json => json.message);

		const embed = new MessageEmbed()
			.setImage(dog)
			.setFooter('Source: https://dog.ceo/api/breeds/image/random');
		message.channel.send(embed);
	}
};

exports.help = {
	name: 'image'
};
