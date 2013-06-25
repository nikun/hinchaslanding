Template.signup.events({
	'click #btnAceptar': function(event, template) {
		event.stopPropagation();
		var emailValue = template.find('#txtEmail').value
		if (isValidEmailAddress(emailValue)) {

			// if (Contacts.find({
			// 	email: emailValue
			// }).count() === 0) {

			//envio mail		
			Meteor.call('sendEmail', emailValue, Meteor.getLocale(), function(err, result) {

				if (err) {
					$('#invite').fadeOut(200);
					$('#invite').remove();
					$('#thksMailRepeated').fadeIn(500);
					return false;

				} else {
					$('#invite').fadeOut(200);
					$('#invite').remove();
					$('#thks').fadeIn(500);
					return false;
				}
			});
			// }
		} else {
			$('#txtEmail').popover('show');
			$('.popover-content').text($('#txtEmail').attr('data-content'));
		}
		return false;
	},
	'click #txtEmail': function(event, template) {
		$('#txtEmail').popover('hide');

	},
	'click .btnShareTW': function(event, template) {
		var text = template.find("#hiddenTranslate").value;
		var url = "http://twitter.com/share?url=HINCH.AS&text=" + text + "%0Awww.hinch.as";
		var specs = "width=550, height=350";
		window.open(url, "_blank", specs);
	},
	'click .btnShareFB': function(event, template) {
		var text = template.find("#hiddenTranslate").value;
		var url = "https://www.facebook.com/sharer/sharer.php?s=100&p[title]=HINCH.AS&p[url]=http://www.hinch.as&p[summary]=" + text + "&p[images][0]=http://btl.hinch.as.s3.amazonaws.com/img/landing/facebook_share_comment.jpg";
		var specs = "width=550, height=350";
		window.open(url, "_blank", specs);
	}
});

function isValidEmailAddress(emailAddress) {
	var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
	return pattern.test(emailAddress);
};