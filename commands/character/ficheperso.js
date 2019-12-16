const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	const embed = new MessageEmbed();

	const character = await client.getCharacter(message.author);

	const {main, health, trait, skills } = character;

	embed
	  .setColor('#0099ff')
    .setTitle('Fiche de Personnage')
    .setDescription('Voici la fiche de ton personnage, tu peux y découvrir tes compétences, ton états de santé et ton états civil')
    .setThumbnail('https://cdn.discordapp.com/attachments/626829036538298380/642686720575537162/horde-2.png%27')
    .addBlankField()
    .addField('===Information générales===', '.', true)
    .addBlankField()
    .addField('Nom', main.charactername, true)
    .addField('Sexe', chracter.main.gender, true)
    .addField('Niveau', `${main.level} (${main.xp}/3600xp)`, true)
    .addField('Métier', chararcter.main.profession.name, true)
    .addField('Argent', characrter.main.credit, true)
    .addBlankField()
    .addField('===Etat de santé===', '.', true)
    .addBlankField()
    .addField('Vitalité', `${health.life}/100 pv`, true)
    .addField('Endurance', `${health.energy}/60 pe`, true)
    .addField('Maladie', health.sickness ? health.sickness : 'Pas de maladie', true)
    .addBlankField()
    .addField('===Caractéristiques===', '.', true)
    .addBlankField()
    .addField('Force', trait.strength, true)
    .addField('Dextérité', trait.dexterity, true)
    .addField('Intelligence', trait.intelligence, true)
    .addField('Constitution', trait.constitution, true)
    .addField('Marchandage', trait.haggle, true)
    .addField('Eloquence', trait.charism, true)
    .addBlankField()
    .addField('===Compétences===', '.', true)
    .addBlankField()
    .addField('Compétence 1', skills.first, true)
    .addField('Compétence 2', skills.second ? skills.second : 'Pas de compétences', true);

	message.channel.send(embed);
};

exports.help = {
	name: 'ficheperso'
};
