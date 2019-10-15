const { MessageEmbed } = require('discord.js');

module.exports = (client, message, args) => {
	const embed = new MessageEmbed();
	if (args[0] === '1') {
		embed
			.setDescription(message.guild.name)
			.setThumbnail(message.guild.iconURL())
			.addField('Membres', message.guild.memberCount)
			.setFooter(message.guild.owner.user.tag, message.guild.owner.user.avatarURL())
			.setTimestamp();
	}

	if (args[0] === '2') {
		embed
			.setDescription(message.guild.name)
			.setThumbnail(message.guild.iconURL())
			.addField('Membres', message.guild.memberCount, true)
			.addField('Owner', message.guild.owner.user.tag, true)
			.setImage(message.guild.owner.user.avatarURL());
	}

	message.channel.send(embed);
};
