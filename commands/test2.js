const { MessageEmbed } = require('discord.js');


exports.run = (client, message, args) => {
  const function1 = () => JSON.parse(args.join(' '));

  function1();
};

exports.help = {
  name: 'test2'
};
