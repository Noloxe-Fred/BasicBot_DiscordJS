exports.run = async (client, message, args, settings) => {
  console.log(message.author.avatarURL())
	message.delete(3000);
	client.displayCharacter(message);
};

exports.help = {
	name: 'perso'
};
