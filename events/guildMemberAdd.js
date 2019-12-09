module.exports = (client, member) => {
	const channel = client.channels.find(r => r.name === 'general'); // Comme il n'y a plus de paramètre msg, nous utilisons "client" pour trouver un channel
	channel.send(`${member} a survécu`);
};
