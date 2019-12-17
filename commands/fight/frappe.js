const { addXp } = require('../../utils/xpSystem.js');

exports.run = async (client, message, args) => {
	message.channel.send('Vous avez tué le streumon, vous gagnez 8 XP!');
	console.log('FRAPPE', addXp)
	addXp(client, message, 8);
};

exports.help = {
	name: 'frappe'
};
