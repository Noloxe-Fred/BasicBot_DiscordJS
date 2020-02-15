const { MessageEmbed } = require('discord.js');

exports.run = (client, message, args) => {

	const nomDuMonstre = "Cerf de mon cul";
	const gender = "Pas Beau";
	const level = 12;
	const type = "Aggressif";
	const life = 26;
	const totalLife = 156;


	const embed = {

    

		description: `***\`\`\`fix\n              ${nomDuMonstre}\`\`\`***`,

		thumbnail: {

			url: "https://i.pinimg.com/originals/5f/8c/18/5f8c18eeb8d045a3e0e6c431da06c8b7.jpg"

		},

		fields: [

			{

				name: "`= = = = = = = = Informations = = = = = = = =`",

				value: "."

			},

			{

				name: "Genre",

				value: `***${gender}***`,

				inline: true

			},

			{

				name: "Niveau",

				value: `***${level}***`,

				inline: true

			},

			{

				name: "Type",

				value: `***${type}***   `,

				inline: true

			},

			{

				name: "`= = = = = = = = Points de vie = = = = = = = =`",

				value: `**\`\`\`diff\n-                 ${life}/${totalLife}                 -\`\`\`**\n\n`,

				inline: true

			}

		]

	};

	console.log(embed)
	message.channel.send({ embed });
};

exports.help = {
	name: 'test'
};
