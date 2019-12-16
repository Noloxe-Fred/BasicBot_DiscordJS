const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	const embed = new MessageEmbed();

	const character = await client.getCharacterSheet(message.author);

	const { main, health, trait, skills } = character;

	embed
	  .setColor('#0099ff')
    .setTitle('Fiche de Personnage')
    .setDescription('Voici la fiche de ton personnage \nTu peux y découvrir tes compétences, ton état de santé et ton état civil')
    .setThumbnail('https://cdn.discordapp.com/attachments/626829036538298380/642686720575537162/horde-2.png%27')
    .addBlankField()
    .addField('💠 **Information générales**', '---------')
    .addField('Nom', main.charactername, true)
    .addField('Sexe', main.gender, true)
    .addField('Métier', main.profession.name, true)
    .addField('Niveau', `${main.level}`, true)
    .addField('XP', `${main.xp}/20xp`, true)
    .addField('Argent', main.credit, true)
    .addBlankField()
    .addField('💉 **Etat de Santé**', '---------')
    .addField('Vitalité', `${health.life}/100 pv`, true)
    .addField('Endurance', `${health.energy}/50 pe`, true)
    .addField('Maladie', health.sickness ? health.sickness : 'Pas de maladie', true)
    .addBlankField()
    .addField('🎲 **Caractéristiques**', '---------')
    .addField('Force', trait.strength, true)
    .addField('Dextérité', trait.dexterity, true)
    .addField('Intelligence', trait.intelligence, true)
    .addField('Constitution', trait.constitution, true)
    .addField('Marchandage', trait.haggle, true)
    .addField('Eloquence', trait.charism, true)
    .addBlankField()
    .addField('🔥 **Compétences**', '---------')
    .addField('Principale', skills.first, true)
    .addField('Secondaire', skills.second ? skills.second : 'Pas de compétences', true);

	message.channel.send(embed);
};

exports.help = {
	name: 'ficheperso'
};
