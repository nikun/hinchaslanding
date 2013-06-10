devStartup = function() {

	console.log('**************** LOADING MOCK DATA!!! ****************');

	Users.remove({});
	if (Users.find({}).count() === 0) {

		Users.insert({
			firstname: 'Rolfi',
			lastname: 'Montengero',
			imageurl: 'http://deportes.publimetro.com.mx/wp-content/uploads/2012/12/rolfi-montenegro.jpg'
		});
		Users.insert({
			firstname: 'Diego Armando',
			lastname: 'Maradona',
			imageurl: 'http://4.bp.blogspot.com/-T0IVTBGQv7w/TuIPUGsk66I/AAAAAAAACvM/727phZ7tJpU/s1600/Diego+Maradona+-+The+Legend+of+Football+Player+-+The+Greatest+Player+in+the+World+goal.jpg'
		});

		for (i = 0; i < 10; i++) {
			Users.insert({
				firstname: 'Sergio',
				lastname: 'Aguero',
				imageurl: 'http://us.cdn003.fansshare.com/photos/sergioaguero/manchester-city-sergio-kun-aguero-548833883.jpg'
			});
		}
	}


	I18n.remove({});
	I18n.insert({
		"landing": {
			"title1": {
				"i18n": {
					"de": "DER INTERNATIONALE TAG",
					"en": "INTERNATIONAL FOOTBALL",
					"es": "EL DIA MUNDIAL",
					"fr": "compFR",
					"it": "compIT",
					"pt": "compPT"
				}
			},
			"title1b": {
				"i18n": {
					"de": "DES FUSSBALLFANS",
					"en": "FAN DAY",
					"es": "DEL HINCHA",
					"fr": "compFR",
					"it": "compIT",
					"pt": "compPT"
				}
			},
			"title2": {
				"i18n": {
					"de": "compDE",
					"en": "Because every time we hear the starting whistle our heart accelerates. Because\nwhen we see our team’s colors we get goose bumps and when the ball approaches\nthe goal an unstoppable scream unleashes from our chest, we deserve to\nchoose a day to celebrate our love for football.",
					"es": "Porque cada vez que suena el silbato inicial nuestro corazón se acelera. Porque\ncuando vemos los colores de nuestro equipo se nos eriza la piel y cuando la pelota\nse acerca al arco crece en nuestro pecho un grito incontenible, merecemos elegir\nun día para celebrar nuestro amor por el fútbol.",
					"fr": "compFR",
					"it": "compIT",
					"pt": "compPT"
				}
			},
			"title3": {
				"i18n": {
					"de": "aceptarDE",
					"en": "They have already joined.",
					"es": "Ellos ya se sumaron.",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			},
			"signup": {
				"i18n": {
					"de": "aceptarDE",
					"en": "Join us too.",
					"es": "Súmate tú también.",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			},
			"btnaccept": {
				"i18n": {
					"de": "aceptarDE",
					"en": "ACCEPT",
					"es": "ACEPTAR",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			},
			"mailplaceholder": {
				"i18n": {
					"de": "aceptarDE",
					"en": "Type your email",
					"es": "Ingresa tu correo electrónico",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			},
			"language": {
				"i18n": {
					"de": "langDE",
					"en": "Language",
					"es": "Lenguaje",
					"fr": "langFR",
					"it": "langIT",
					"pt": "langPT"
				}
			},
			"sharetitle": {
				"i18n": {
					"de": "aceptarDE",
					"en": "Welcome!",
					"es": "Bienvenido!",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			},
			"btnshare": {
				"i18n": {
					"de": "aceptarDE",
					"en": "Share",
					"es": "Compartir",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			},
			"sharetext": {
				"i18n": {
					"de": "aceptarDE",
					"en": "You're part of the international football fan day, invite your friends to join the party.",
					"es": "Ya sos parte del dia mundial del Hincha, invita a tus amigos a formar parte de la fiesta.",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			},
			"mailerror": {
				"i18n": {
					"de": "aceptarDE",
					"en": "Please enter a valid email address.",
					"es": "Por favor ingresa una dirección de email valida.",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			}
		}
	});


};