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

		for (i = 0; i < 3; i++) {
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
			"btncompartir": {
				"i18n": {
					"de": "compDE",
					"en": "Share",
					"es": "Compartir",
					"fr": "compFR",
					"it": "compIT",
					"pt": "compPT"
				}
			},
			"btnaceptar": {
				"i18n": {
					"de": "aceptarDE",
					"en": "Ok",
					"es": "ACEPTAR",
					"fr": "aceptarFR",
					"it": "aceptarIT",
					"pt": "aceptarPT"
				}
			}
		}
	});


};