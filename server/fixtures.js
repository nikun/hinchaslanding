devStartup = function() {

	console.log('**************** LOADING MOCK DATA!!! ****************');

	
	// if (Users.find({}).count() === 0) {

	// 	Users.insert({
	// 		firstname: 'Rolfi',
	// 		lastname: 'Montengero',
	// 		imgurl: 'http://deportes.publimetro.com.mx/wp-content/uploads/2012/12/rolfi-montenegro.jpg',
	// 		lon: 1,
	// 		lat: 4,
	// 		country: 'AR'
	// 	});
	// 	Users.insert({
	// 		firstname: 'Hernán Rodrigo',
	// 		lastname: 'López',
	// 		imgurl: 'http://www.velezsarsfield.com.ar/img/noticias/10/rct/lopez10.jpg',
	// 		lon: 1,
	// 		lat: 4,
	// 		country: 'AR'
	// 	});

	// 	Users.insert({
	// 		firstname: 'Alejandro Darío',
	// 		lastname: 'Gomez',
	// 		imgurl: 'http://www.europacalcio.it/redattore/uploads/9567-1366616655/Alejandro-Gomez.jpg',
	// 		lon: 11,
	// 		lat: 22,
	// 		country: 'AR'
	// 	});

	// 	Users.insert({
	// 		firstname: 'Diego Armando',
	// 		lastname: 'Maradona',
	// 		imgurl: 'http://4.bp.blogspot.com/-T0IVTBGQv7w/TuIPUGsk66I/AAAAAAAACvM/727phZ7tJpU/s1600/Diego+Maradona+-+The+Legend+of+Football+Player+-+The+Greatest+Player+in+the+World+goal.jpg',
	// 		lon: 11,
	// 		lat: 22,
	// 		country: 'AR'
	// 	});

	// 	Users.insert({
	// 		firstname: 'Gabriel Iván',
	// 		lastname: 'Heinze',
	// 		imgurl: 'http://p2.trrsf.com/image/fget/cf/619/464/images.terra.com/2013/06/16/defensor-gabriel-heinze-newells-sarsfieldlrzima2013051500963.jpg',
	// 		lon: 11,
	// 		lat: 22,
	// 		country: 'AR'
	// 	});

	// 	Users.insert({
	// 		firstname: 'Diego',
	// 		lastname: 'Mateo Alustiza',
	// 		imgurl: 'http://img.futbolparatodos.com.ar/wp-content/uploads/Diego-Mateo.jpg',
	// 		lon: 11,
	// 		lat: 22,
	// 		country: 'AR'
	// 	});

	// 	Users.insert({
	// 		firstname: 'Pablo Cesar',
	// 		lastname: 'Barrientos',
	// 		imgurl: 'http://img.skysports.com/12/03/218x298/Barrientos_2733204.jpg',
	// 		lon: 11,
	// 		lat: 22,
	// 		country: 'AR'
	// 	});

	// 	Users.insert({
	// 		firstname: 'Edgar Junior',
	// 		lastname: 'Çani',
	// 		imgurl: 'http://maschile.football.it/dyn//images/squadre/rosa_foto/image-92984.jpg',
	// 		lon: 11,
	// 		lat: 22,
	// 		country: 'AR'
	// 	});

	// 	for (i = 0; i < 2; i++) {
	// 		Users.insert({
	// 			firstname: 'Sergio',
	// 			lastname: 'Aguero',
	// 			imgurl: 'http://us.cdn003.fansshare.com/photos/sergioaguero/manchester-city-sergio-kun-aguero-548833883.jpg',
	// 			lon: 1,
	// 			lat: -84,
	// 			country: 'AR'
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
					"fr": "Le jour mérité par notre passion arrive",
					"it": "Arriva il giorno che la nostra passione si merita",
					"pt": "Chegará o dia que a nossa paixão merece"
				}
			},
			"title1": {
				"i18n": {
					"de": "Der Internationale Tag",
					"en": "International",
					"es": "El Día Mundial",
					"fr": "La Journée Mondiale",
					"it": "Il Giorno Mondiale",
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
					"de": "Weil wir gänsehaut kriegen wenn wir die Farben unseres Vereins sehen und ein Schrei aus unserer Brust raus will wenn der Ball sich dem Tor nähert, deshalb sind wir es wert einen Tag zu wählen um unsere Liebe zum Fussbal zu feiern. ",
					"en": "Because every time we hear the starting whistle our heart accelerates. Because when we see our team’s colors we get goose bumps and when the ball approaches the goal an unstoppable scream unleashes from our chest, we deserve to choose a day to celebrate our love for football.",
					"es": "Porque cada vez que suena el silbato inicial nuestro corazón se acelera. Porque cuando vemos los colores de nuestro equipo se nos eriza la piel y cuando la pelota se acerca al arco crece en nuestro pecho un grito incontenible, merecemos elegir un día para celebrar nuestro amor por el fútbol.",
					"fr": "Parce que chaque fois que le coup de sifflet retentit notre cœur s’accélère. Parce que nous avons la chair de poule quand nous voyons les couleurs de notre équipe et quand le ballon s’approche des buts, un cri non contenu monte en nous. Nous méritons de choisir une journée pour fêter notre amour pour le football.",
					"it": "Perché ogni volta che suona il fischio iniziale, il nostro cuore accelera. Perché quando guardiamo i colori della nostra squadra proviamo un brivido e quando la palla si avvicina all´arco nel nostro petto cresce un grido incontenibile… Meritiamo di scegliere un giorno per celebrare il nostro amore per il calcio.",
					"pt": "Porque nosso coração dispara cada vez que apita o inicio do jogo, porque ficamos arrepiados quando vemos as cores da nossa equipe e quando a bola se aproxima da goleira, cresce em nosso peito um grito irreprimível, merecemos escolher um dia para celebrar o nosso amor pelo futebol."
				}
			},
			"title3": {
				"i18n": {
					"de": "SIE MACHEN SCHON MIT",
					"en": "THEY HAVE ALREADY JOINED",
					"es": "ELLOS YA SE SUMARON",
					"fr": "ILS SE SONT DÉJÀ JOINTS À NOUS",								 
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
					"de": "AKZEPTIEREN",
					"en": "ACCEPT",
					"es": "ACEPTAR",
					"fr": "ACCEPTER",
					"it": "ACCEDI",
					"pt": "ENTRAR"
				}
			},
			"mailplaceholder": {
				"i18n": {
					"de": "Dein E-mail",
					"en": "Enter your Email",
					"es": "Ingresar Email",
					"fr": "Votre adresse électronique",
					"it": "Inserisci l´ e-mail", 
					"pt": "Insira seu e-mail"
				}
			},
			"language": {
				"i18n": {
					"de": "Sprache",
					"en": "Language",
					"es": "Idioma",
					"fr": "Français",
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
					"de": "Willkommen!",
					"en": "Welcome!",
					"es": "¡Bienvenido!",
					"fr": "Bienvenue à vous!",
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
					"it": "Tu sei parte del giorno mondiale del tifoso, invita i tuoi amici a far parte della festa",
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
					"de": "Geben Sie bitte eine gültige E-mail Adresse ein, um mehr Neuigkeiten über HINCH.AS zu erhalten",
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
					"it": "Questo indirizzo e-mail è già registrato",
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