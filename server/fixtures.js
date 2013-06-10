devStartup = function() {

	console.log('**************** LOADING MOCK DATA!!! ****************');

	//Users.remove({});
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
					"fr": "LA JOURNEE MONDIALE",
					"it": "GIORNO MONDIALE",
					"pt": "O DIA MUNDIAL"
				}
			},
			"title1b": {
				"i18n": {
					"de": "DES FUSSBALLFANS",
					"en": "FAN DAY",
					"es": "DEL HINCHA",
					"fr": "DU SUPPORTER",
					"it": "DEL TIFOSO",
					"pt": "DO TORCEDOR"
				}
			},
			"title2": {
				"i18n": {
					"de": "Weil unser Herz schneller schlägt jedes Mal wenn die Anfangspeife ertönt. Weil\nwir Gänsehaut kriegen wenn wir die Farben unseres Vereins sehen und ein Schrei\naus unserer Brust raus will wenn der Ball sich dem Tor nähert, deshalb sind\nwir es wert einen Tag zu wählen um unsere Liebe zum Fussbal zu feiern.",
					"en": "Because every time we hear the starting whistle our heart accelerates. Because\nwhen we see our team’s colors we get goose bumps and when the ball approaches\nthe goal an unstoppable scream unleashes from our chest, we deserve to\nchoose a day to celebrate our love for football.",
					"es": "Porque cada vez que suena el silbato inicial nuestro corazón se acelera. Porque\ncuando vemos los colores de nuestro equipo se nos eriza la piel y cuando la pelota\nse acerca al arco crece en nuestro pecho un grito incontenible, merecemos elegir\nun día para celebrar nuestro amor por el fútbol.",
					"fr": "Bientôt nous t’enverrons des nouveautés et un accès exclusif au réseau.Parce\nsans tes encouragements, le football n’est rien.Et sur HINCH.AS ta voix est entendue.",
					"it": "Perché ogni volta che suona il fischio iniziale, il nostro cuore accelera.\nPerché quando guardiamo i colori della nostra squadra proviamo un brivido e quando\nla palla si avvicina all´arco nel nostro petto cresce un grido incontenibile…Meritiamodi\nscegliere un giorno per celebrare il nostro amore per il calcio.",
					"pt": "Porque nosso coração dispara cada vez que apita o inicio do jogo, porque\nficamos arrepiados quando vemos as cores da nossa equipe e quando a bola se aproxima\nda goleiracresce em nosso peito um grito irreprimível, merecemos escolher um dia para\ncelebrar o nosso amor pelo futebol."
				}
			},
			"title3": {
				"i18n": {
					"de": "Sie machen schon mit:",
					"en": "They have already joined:",
					"es": "Ellos ya se sumaron:",
					"fr": "Ils se sont déjà joints:",
					"it": "Loro si sono giá incorporati:",
					"pt": "Eles já aderiram:"
				}
			},
			"signup": {
				"i18n": {
					"de": "Mach Du auch mit.",
					"en": "Join us too.",
					"es": "Súmate tú también.",
					"fr": "Toi et combien d’autres? Invite tes amis à choisir leur journée.",
					"it": "In Hinch.as, il calcio ti ascolta.",
					"pt": "Una-se você também."
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
					"es": "Idioma",
					"fr": "Langue",
					"it": "Lingua",
					"pt": "Idioma"
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