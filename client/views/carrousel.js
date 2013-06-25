Template.carousel.helpers({
	players: function() {
		return Users.find({});
	}
});

Template.carouselmobile.helpers({
	players: function() {
		return Users.find({});
	}
});


Template.carousel.rendered = function(){
	var items,width,selector;
	items=5;
	width=585;
	selector="#carousel";
	runCarousel(selector,items,width);	
};

Template.carouselmobile.rendered = function(){
	var items,width,selector;
	items=3;
	width=400;
	selector="#carouselm";
	runCarousel(selector,items,width);	
};

function runCarousel(selector,items,width){
	$(selector).carouFredSel({
		height				: "auto",
		width				: width,
		items               : items,
		direction           : "left",
		responsive			: false,
		scroll : {
			items           : 1,
			easing          : "swing",
			duration        : 500,                        
			pauseOnHover    : false
		},
		auto    : {
			onBefore: function( data ) {
				// unhighlight( data.items.old );
			},
			onAfter : function( data ) {
				// highlight( data.items.visible );
			}
		}         
	});

	// highlight( unhighlight( $("#carousel > *") ) );
}

Meteor.methods({
	runCarousel: function(selector,items,width){
		runCarousel(selector,items,width);
	}
});

function highlight( items ) {
	items.filter(":eq(2)").find("img").css({
		width: 150,
		height: 150
	});

	items.filter(":eq(2)").css({
		marginTop: "0px",
		opacity: 1
	});

	return items;
}

function unhighlight( items ) {
	items.find("img").css({
		width   : 100,
		height  : 100
	});

	items.css({
		marginTop: "30px",
		opacity: 0.3
	});

	return items;

}
