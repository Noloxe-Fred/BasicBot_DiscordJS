const mongoose = require('mongoose');
const { Guild, Bestiary } = require('../models/index');

module.exports = client => {
	client.getGuild = async guild => {
		const data = await Guild.findOne({ guildID: guild.id });
		if (data) return data;
		return client.config.defaultSettings;
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

	client.getMonster = async monster => {
		const data = await Bestiary.findOne({ monsterName: monster });
		if (data) return data;
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
		const createMonster= await new Bestiary(merged);
		createMonster.save().then(m => console.log(`New Monster -> ${m.monsterName}`));
	};
};
