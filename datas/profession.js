module.exports = {
	professions: [
		{
			name: 'Explorateur',
			icon: '🏃‍♂️',
			desc: 'Vous avez énormément parcouru le monde, connaissez la nature et les raccourcis qu\'on y trouve.',
			skills: [
				{
					name: 'Connaisseurs des raccourcis',
					desc: 'Vos déplacements entre zone vous coûteront 1 Énergie en moins par niveau.',
				},
				{
					name: 'Observateur',
					desc: 'Votre commande !scruter aura plus de chances de réussir.',
				},
				{
					name: 'Fouineur',
					desc: 'votre commande !fouille sera plus précise et vous indiquera plus facilement les ressources/objets rare.',
				}
			]
		},
		{
			name: 'Soigneur',
			icon: '💉',
			desc: 'Tenez vous prêt à secourir les plus aguerris',
			skills: [
				{
					name: 'Premiers soins',
					desc: 'Votre utilisation des bandes rapportera 5PV par niveau en plus',
				},
				{
					name: 'Rebouteux',
					desc: 'vous serez capable de poser une attelle proprement, ou de remettre un membre en place. % de reussite qui augmentera avec le niveau.'
				},
				{
					name: 'Pharmacien',
					desc: 'Vous serez capable de soigner maladie et empoisonnement, grâce aux plantes et médicaments dénichés dans vos fouilles. Chaque niveau vous apportera des connaissances supplémentaires.'
				}
			]
		},

	]
};
