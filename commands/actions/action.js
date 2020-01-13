const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {
	const embed = new MessageEmbed();

	embed
		.setColor('red')
		.setTitle('Effectuer une Action')
		.setDescription('Choisis l\'action que ton personnage va effectuer')
		.setThumbnail('https://store-images.s-microsoft.com/image/apps.12468.13510798887966465.7d1db64d-e502-4431-8f30-dcf821216451.5df34879-cef6-4c4f-bd38-e5f0f453d57a?w=180&h=180&q=60')
		.addBlankField()
		.addField('**Actions Communes**', '---------')
		.addField('🥔 Se nourrir', 'Energie +10', true)
		.addField('🌛 Dormir', 'Energie +20', true)
		.addField('👄 Discuter', 'Aller parler à un personnage présent ici', true)
		.addField('**Soin**', '---------')
		.addField('❤️ Soin basique', `Santé +5`, true)
		.addField('💉 Soin médical', `Santé +20 (si vous avez la compétence)`, true)
		.addField('**Combat**', '---------')
		.addField('🏹 Combattre', 'Vous sélectionnerez ensuite votre attaque', true)
		.addField('🏃‍ Fuir', 'Tentez de prendre la fuite | Vous permet d\'effectuer 3 actions sans être attaqué (sauf si vous attaquez vous même)', true)
		.addField('🏍️ S\'échapper', 'S\'enfuir vers un autre lieu', true)
		.addField('**Autre**', '---------')
		.addField('👁️ Scruter', 'Vous indiquera si il y a des ennemis à proximité', true)
		.addField('🔦 Fouiller', 'Fouillez les environs à la recherche d\'objets ou de ressources', true);

	message.channel.send(embed)
    .then((mess => {
      mess.react('🥔')
      mess.react('🌛')
      mess.react('👄')
      mess.react('❤️')
      mess.react('💉')
      mess.react('🏹')
      mess.react('🏃‍')
      mess.react('🏍️')
      mess.react('👁️')
      mess.react('🔦')
      mess.react('✅')
    }));
};

exports.help = {
	name: 'action'
};
