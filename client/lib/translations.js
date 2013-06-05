var localeLanguage = window.navigator.userLanguage || window.navigator.language;
var language = localeLanguage.split("-");
Meteor.setLocale(language[0]);

Handlebars.registerHelper('translate', function(key) {
	if (I18n.findOne()) {
		var selectors = "";
		_.each(key.split("."), function(selector) {
			selectors += ("['" + selector + "'] ");
		});

		try {
			var currentObject = eval("I18n.findOne()" + selectors);
			return (currentObject && currentObject.i18n) ? (currentObject.i18n[Meteor.getLocale()] ? currentObject.i18n[Meteor.getLocale()] : currentObject.i18n["es"]) : "-";
		} catch (err) {
			console.log('Locale ' + key + ' not found!');
		}
	}
	return false;
});