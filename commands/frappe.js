exports.run = (client, message, args) => {
	// message.author.getCharacter

	let damage = '';

	switch (args[0]) {
		case 'coupDePoing':
			damage = 4;
      break;
		case 'coupDePied':
			damage = 5;
      break;
		case 'coupDeBoule':
			damage = 5;
      break;
		default:
			damage = 0;
      break;
	}


	client.hitPersistMonster(message, damage);
};

exports.help = {
	name: 'frappe'
};
