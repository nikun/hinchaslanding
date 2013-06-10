Meteor.methods({
  sendEmail: function(to, locale) {
    if (!locale)
      locale = "en";
    check([to], [String]);    

    if (Contacts.find({email: to}).count() === 0) {

      Contacts.insert({email: to});

      Email.send({
        to: to,
        from: "welcome@hinch.as",
        headers: {
          "X-MC-Template": "register-" + locale + "-vip",
          "X-MC-MergeVars": {
            "fname": "sergio",
            "lname": "aguero"
          }
        }
      });
    }

  }
});