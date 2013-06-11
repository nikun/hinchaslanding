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
			"title0": {
				"i18n": {
					"de": "Es kommt der Tag den sich unsere Leidenschaft verdient",
					"en": "The day that our passion deserves is coming",
					"es": "Llega el día que nuestra pasión se merece",
					"fr": "Arrive le jour mérité par notre passion",
					"it": "Arriva il giorno che la nostra passione si merita",
					"pt": "Chegará o dia que a nossa paixão merece"
				}
			},
			"title1": {
				"i18n": {
					"de": "Der internationale tag",
					"en": "International",
					"es": "El día mundial",
					"fr": "La journee mondiale",
					"it": "Giorno mondiale",
					"pt": "O dia mundial"
				}
			},
			"title1b": {
				"i18n": {
					"de": "des fussballfans",
					"en": "football fan day",
					"es": "del hincha",
					"fr": "du supporter",
					"it": "del tifoso",
					"pt": "do torcedor"
				}
			},
			"title2": {
				"i18n": {
					"de": "Gänsehaut kriegen wenn wir die Farben unseres Vereins sehen und ein Schrei aus unserer Brust raus will wenn der Ball sich dem Tor nähert, deshalb sind wir es wert einen Tag zu wählen um unsere Liebe zum Fussbal zu feiern. ",
					"en": "Because every time we hear the starting whistle our heart accelerates. Because when we see our team’s colors we get goose bumps and when the ball approaches the goal an unstoppable scream unleashes from our chest, we deserve to choose a day to celebrate our love for football.",
					"es": "Porque cada vez que suena el silbato inicial nuestro corazón se acelera. Porque cuando vemos los colores de nuestro equipo se nos eriza la piel y cuando la pelota se acerca al arco crece en nuestro pecho un grito incontenible, merecemos elegir un día para celebrar nuestro amor por el fútbol.",
					"fr": "Parce que notre cœur s’accélère chaque fois que sonne le coup de sifflet du début. Parce que nous avons la chaire de poule quand nous voyons les couleurs de notre équipe et quand le ballon s’approche des buts, croît en nous un cri non contenu. Nous méritons de choisir une journée pour fêter notre amour pour le football.",
					"it": "Perché ogni volta che suona il fischio iniziale, il nostro cuore accelera. Perché quando guardiamo i colori della nostra squadra proviamo un brivido e quando la palla si avvicina all´arco nel nostro petto cresce un grido incontenibile… Meritiamodi scegliere un giorno per celebrare il nostro amore per il calcio.",
					"pt": "Porque nosso coração dispara cada vez que apita o inicio do jogo, porque ficamos arrepiados quando vemos as cores da nossa equipe e quando a bola se aproxima da goleiracresce em nosso peito um grito irreprimível, merecemos escolher um dia para celebrar o nosso amor pelo futebol."
				}
			},
			"title3": {
				"i18n": {
					"de": "SIE MACHEN SCHON MIT",
					"en": "THEY HAVE ALREADY JOINED",
					"es": "ELLOS YA SE SUMARON",
					"fr": "ILS SE SONT DÉJÀ JOINTS",
					"it": "LORO SI SONO GIÁ INCORPORATI",
					"pt": "ELES JÁ ADERIRAM"
				}
			},
			"signup": {
				"i18n": {
					"de": "Mach Du auch mit",
					"en": "Join us too",
					"es": "Súmate tú también",
					"fr": "Toi et combien d’autres? Invite tes amis à choisir leur journée",
					"it": "In Hinch.as, il calcio ti ascolta",
					"pt": "Una-se você também"
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
			},
			"footer": {
				"i18n": {
					"de": "Auf Hinch.as, hört Fussball Dich.",
					"en": "On HINCH.AS, football listens to you.",
					"es": "En Hinch.as, el fútbol te escucha.",
					"fr": "Sur Hinch.as, le football t’écoute.",
					"it": "In Hinch.as, il calcio ti ascolta.",
					"pt": "Em Hinch.as, o futebol te escuta."
				}
			}
		}
	});


};