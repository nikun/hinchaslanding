devStartup = function() {

	console.log('**************** LOADING MOCK DATA!!! ****************');

	// Users.remove({});
	// if (Users.find({}).count() === 0) {

	// 	Users.insert({
	// 		firstname: 'Rolfi',
	// 		lastname: 'Montengero',
	// 		imageurl: 'http://deportes.publimetro.com.mx/wp-content/uploads/2012/12/rolfi-montenegro.jpg',
	// 		lon: 1,
	// 		lat: 4,
	// 		country:'AR'
	// 	});
	// 	Users.insert({
	// 		firstname: 'Diego Armando',
	// 		lastname: 'Maradona',
	// 		imageurl: 'http://4.bp.blogspot.com/-T0IVTBGQv7w/TuIPUGsk66I/AAAAAAAACvM/727phZ7tJpU/s1600/Diego+Maradona+-+The+Legend+of+Football+Player+-+The+Greatest+Player+in+the+World+goal.jpg',
	// 		lon: 11,
	// 		lat: 22,
	// 		country:'AR'
	// 	});

	// 	for (i = 0; i < 2; i++) {
	// 		Users.insert({
	// 			firstname: 'Sergio',
	// 			lastname: 'Aguero',
	// 			imageurl: 'http://us.cdn003.fansshare.com/photos/sergioaguero/manchester-city-sergio-kun-aguero-548833883.jpg',
	// 			lon: 1,
	// 			lat: -84,
	// 			country:'AR'
	// 		});
	// 	}
	// }


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
					"de": "Der Internationale Tag",
					"en": "International",
					"es": "El Día Mundial",
					"fr": "La Journee Mondiale",
					"it": "Giorno Mondiale",
					"pt": "O Dia Mundial"
				}
			},
			"title1b": {
				"i18n": {
					"de": "des Fussballfans",
					"en": "Football Fan Day",
					"es": "del Hincha",
					"fr": "du Supporter",
					"it": "del Tifoso",
					"pt": "do Torcedor"
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
					"de": "ANNEHMEN",
					"en": "ACCEPT",
					"es": "ACEPTAR",
					"fr": "ACCEPTER",
					"it": "ACCEDI",
					"pt": "ENTRAR"
				}
			},
			"mailplaceholder": {
				"i18n": {
					"de": "Deine E-mail",
					"en": "Enter your Email",
					"es": "Ingresar Email",
					"fr": "Votre adresse électronique",
					"it": "Inserici l’e-mail",
					"pt": "Insira o e-mail"
				}
			},
			"language": {
				"i18n": {
					"de": "Sprache",
					"en": "Language",
					"es": "Idioma",
					"fr": "Langue",
					"it": "Lingua",
					"pt": "Idioma"
				}
			},
			"btnshare": {
				"i18n": {
					"de": "Teilen!",
					"en": "Share",
					"es": "Compartir",
					"fr": "Partager",
					"it": "Condividere",
					"pt": "Partilhar"
				}
			},
			"sharetitle": {
				"i18n": {
					"de": "Wilkommen!",
					"en": "Welcome!",
					"es": "¡Bienvenido!",
					"fr": "Bienvenu-vous!",
					"it": "Benvenuto!",
					"pt": "Bem-vindo!"
				}
			},
			"sharetext": {
				"i18n": {
					"de": "Du und wieviele mehr? Lade Deine Freunde ein ihren Tag zu wählen",
					"en": "Invite your friends to this match!",
					"es": "¿Tú y cuantos más? Invita a tus amigos a elegir su día",
					"fr": "Toi et combien d’autres? Invite tes amis à choisir leur journée",
					"it": "Tu e quanti in piú? Invita i tuoiamici a sceglierela loro giornata",
					"pt": "Você e mais quantos? Convide seus amigos para escolher o seu dia"
				}
			},
			"sharetextsocialnet": {
				"i18n": {
					"de": "Ich werde den internationalen Tag des Fussballfans wählen",
					"en": "I'm going to choose the International Football Fan Day",
					"es": "Yo voy a elegir El Día Mundial del Hincha",
					"fr": "Je vais choisir la Journée Mondiale du Supporter",
					"it": "Io sceglieró il Giorno Mondiale del Tifoso",
					"pt": "Eu vou escolher o DIA MUNDIAL DO TORCEDOR"
				}
			},
			"mailerrorreq": {
				"i18n": {
					"de": "Geben Sie bitte eine gültige E-mail Adresse ein, um mehr Neuigkeiten überHINCH.AS zu erhalten",
					"en": "Please enter a valid email address to have access to more HINCH.AS news",
					"es": "Por favor, ingrese una dirección de correo electrónico válida para tener más noticias de HINCH.AS",
					"fr": "S’il vous plaît, veuillez entrer une adresse e-mail valide pour recevoir plus de nouvelles d’HINCH.AS",
					"it": "Per favore, indicare un indirizzo di email valido per ricevere altre notizie di HINCH.AS",
					"pt": "Por favor, cadastre um endereço eletrônico válido para receber mais noticias de HINCH.AS"
				}
			},
			"mailerrorrepeated": {
				"i18n": {
					"de": "Diese E-Mail Adresse ist bereits registriert",
					"en": "The email address you entered has already been registered",
					"es": "La dirección de correo que ingresó ya está registrada",
					"fr": "Cette adresse email est déjà utilisée",
					"it": "Questo indirizzo email è già stato utilizzato",
					"pt": "Esse e-mail já está registrado"
				}
			},
			"footer": {
				"i18n": {
					"de": "Auf HINCH.AS, hört Fussball Dich.",
					"en": "On HINCH.AS, football listens to you.",
					"es": "En HINCH.AS, el fútbol te escucha.",
					"fr": "Sur HINCH.AS, le football t’écoute.",
					"it": "In HINCH.AS, il calcio ti ascolta.",
					"pt": "Em HINCH.AS, o futebol te escuta."
				}
			}
		}
	});


};