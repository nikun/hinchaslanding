Meteor.publish('users', function() {
	return Users.find({
		country: {
			$exists: true
		},
		lat: {
			$exists: true
		},
		lon: {
			$exists: true
		}
	},{sort: { firstname: 1 }})

});


Meteor.publish('i18n', function() {
	return I18n.find({});
});