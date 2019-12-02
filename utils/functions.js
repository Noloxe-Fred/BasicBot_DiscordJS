const mongoose = require('mongoose');
const { Guild, Bestiary, PersistMonster, Character } = require('../models/index');
const { DEFAULTSETTINGS } = require('../config.js');
const { MessageEmbed } = require('discord.js');


module.exports = client => {
	client.getGuild = async guild => {
		const data = await Guild.findOne({ guildID: guild.id });
		if (data) return data;
		return DEFAULTSETTINGS;
	};

	client.updateGuild = async (guild, settings) => {
		let data = await client.getGuild(guild);
		if (typeof data !== 'object') data = {};
		for (const key in settings) {
			if (data[key] !== settings[key]) data[key] = settings[key];
		}
		console.log('DATA = ', data)
		return data.updateOne(settings);
	};

	client.createGuild = async guild => {
		const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, guild);
		const createGuild = await new Guild(merged);
		createGuild.save().then(g => console.log(`New Guild -> ${g.guildName}`));
	};


	client.getMonster = async channelName => {
		const data = await Bestiary.find({ channelId: channelName });

		const dice = (min, max) => {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min) + min) + 1;
		};
		const monster = data[dice(0, data.length - 1)];

		console.log('GETMONSTER', monster);
		if (monster) return monster;
		return undefined;
	};

	client.updateMonster = async (monster, newDatas) => {
		let data = await client.getMonster(monster);
		if (typeof data !== 'object') data = {};
		for (const key in newDatas) {
			if (data[key] !== newDatas[key]) data[key] = newDatas[key];
		}
		console.log('DATA MONSTER = ', data);
		return data.updateOne(newDatas);
	};

	client.createMonster = async monster => {
		console.log('functions createMonster', monster)
		const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, monster);
		const createMonster = await new Bestiary(merged);
		createMonster.save().then(m => console.log(`New Monster -> ${m.monsterName}`));
	};

	client.persistMonster = async monsterData => {
		console.log('function persistMonster', monsterData);
		const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, monsterData);
		const persistMonster = await new PersistMonster(merged);
		persistMonster.save().then(m => console.log(`New Monster -> ${m.channelName}`))
	};

	client.hitPersistMonster = async (message, damage) => {
		const data = await PersistMonster.findOne({ channelName: message.channel.name });

		if (data) {
			console.log('Coup porté', data)
			data.embedData.life = data.embedData.life - damage;

			if (data.embedData.life <= 0) {
				message.channel.send('VOus avez tué le monstre, vous gagnez un bisou')
				return PersistMonster.deleteOne({ channelName: message.channel.name })
			}

			message.channel.send('Touché!');
			const displayEmbed = new MessageEmbed();
			displayEmbed
				.setTitle(data.embedData.name)
				.setThumbnail(data.embedData.picture)
				.addField('PV', data.embedData.life, true)
				.addField('Dgt', data.embedData.damage, true)
				.addField('Init.', data.embedData.initiative, true)
				.addField('Zone', data.embedData.zone, true);

			message.channel.send(displayEmbed);
			return data.updateOne(data);
		}
		return message.channel.send('Vous avez raté votre coup (ou mon code ne fonctionne pas!')
	};

	client.displayMonster = async message => {
		const data = await PersistMonster.findOne({ channelName: message.channel.name });
		console.log('FUNCTION', data, message)
		
		if (data) {const displayEmbed = new MessageEmbed();
			displayEmbed
				.setTitle(data.embedData.name)
				.setThumbnail(data.embedData.picture)
				.addField('Points de Vie', data.embedData.life, true)
				.addField('Dégats', data.embedData.damage, true)
				.addField('Initiative', data.embedData.initiative, true)
				.addField('Zone de dégats', data.embedData.zone, true);

			return message.channel.send(displayEmbed);
		}

		return message.channel.send('Pas de monstre en vue')
	};

		client.createCharacter = async character => {
		console.log('functions createMonster', character)
		const merged = Object.assign({ _id: mongoose.Types.ObjectId() }, character);
		const createCharacter = await new Character(merged);
		createCharacter.save().then(m => console.log(`New CHaracter -> ${m.name}`));
	};

		client.displayCharacter = async message => {
		const data = await Character.findOne({ name: message.author.username });
		console.log('FUNCTION', data.weapons.forEach(weapon => weapon));
		
		if (data) {const displayEmbed = new MessageEmbed();
			displayEmbed
				.setTitle(data.name)
				.setThumbnail(data.avatar)
				.addField('Points de Vie', data.life)
				.addField('Level', data.level, true)
				.addField('XP', `${data.xp}/200`, true)
				.addField('Métier', data.profession.name, true)
				.addField('Grade', data.profession.grade, true)
				.addField('Armes', data.weapons.forEach(weapon => weapon))
				.addField('Ressources', data.resources.forEach(resource => resource))
				.addField('Compétences', data.skills.forEach(skill => skill))
				.addField('Crédit', data.credit);


			return message.channel.send(displayEmbed);
		}

		return message.channel.send('Pas de feuille de personnage')
	};
};
