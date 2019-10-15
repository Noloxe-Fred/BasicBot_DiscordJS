module.exports = (client, message, args) => {
	const logsChannel = message.guild.channels.find(r => r.name === 'logs');
	const joinArgs = args.join(' ');
	//	const role = message.guild.roles.find(r => r.name === args[0]);  Cette commande permettait de lire un rôle après découpage de la string, et donc pas de rôle qui contiennent d'espace.
	const role = message.guild.roles.find(r => r.name === joinArgs);

	if (!role) return message.channel.send('Ce rôle n\'existe pas');
	if (message.member.roles.find(r => r.name === joinArgs)) {
		message.member.roles.remove(role);
		logsChannel.send(`J'ai supprimé le rôle ${role} à ${message.member}`);
		message.delete({ timeout: 3000 });
	} else {
		message.member.roles.add(role);
		logsChannel.send(`J'ai ajouté le rôle ${role} à ${message.member}`);
		message.delete({ timeout: 3000 });
	}
};
