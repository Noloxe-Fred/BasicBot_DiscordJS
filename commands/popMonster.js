const { MessageEmbed } = require('discord.js');

module.exports = async (client, message, args) => {
	message.delete({ timeout: 3000 });

  const monster = await client.getMonster(args[0]);

  const embed = new MessageEmbed()
    embed
    .setTitle(monster.monsterName)
    .setThumbnail(monster.imageUrl)
    .addField('PV', monster.life, true)
    .addField('Dgt', monster.damage, true)
    .addField('Init.', monster.initiative, true)
    .addField('Zone', monster.zone, true);

  message.channel.send(embed);
};
