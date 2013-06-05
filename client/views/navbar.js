Template.navbar.events({
	'click .language-selector': function(event, tmpl) {
		event.preventDefault();
		var el = $(event.currentTarget);
		Meteor.setLocale(el.data("lang"));
	}
});