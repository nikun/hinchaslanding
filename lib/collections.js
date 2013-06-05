/*****************USERS: SON LOS JUGADORES******************/
//WARNING: estamos creando una collections users que es la que crea meteor cdo usas el paquete de Accounts
/*
firstname: String
lastname: String
imageurl: String
*/
Users = new Meteor.Collection('users');


/*****************CONTACTS: SON LOS MAILS DE LA GENTE QUE DEJA******************/
/*
email: String
*/
Contacts = new Meteor.Collection('contacts');


/*****************TEXTOS: TEXTOS PARA I18N******************/
/*
"key" : 
	{ "i18n" :
		{
			"de" : "Spitznamen",
          	"en" : "Nickname",
          	"es" : "Apodo",
          	"fr" : "Pseudo",
          	"it" : "Soprannome",
          	"pt" : "Apodo"
         }
    },
*/
I18n = new Meteor.Collection('i18n');