Template.signup.events({
	'click #btnAceptar': function(event, template) {
		//todo validar mail
		Contacts.insert({email:template.find('#txtEmail').value});

		//$('#invite').fadeOut(500);
		$('#thks').fadeIn(500);
	}
});