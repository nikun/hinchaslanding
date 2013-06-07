Template.carousel.helpers({
	players: function() {
		return Users.find({});
	}
});

Template.carousel.rendered = function(){
	 $("#carousel").carouFredSel({
        items               : 5,
        direction           : "left",
        scroll : {
            items           : 1,
            easing          : "elastic",
            duration        : 1000,                        
           pauseOnHover    : true
        }                  
    });

}