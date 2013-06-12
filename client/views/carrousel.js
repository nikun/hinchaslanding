Template.carousel.helpers({
	players: function() {
		return Users.find({});
	}
});

Template.carousel.rendered = function(){
	$("#carousel").carouFredSel({
		height				: "auto",
		width				: 585,
		items               : 5,
		direction           : "left",
		responsive			: false,
		scroll : {
			items           : 1,
			easing          : "swing",
			duration        : 500,                        
			pauseOnHover    : true
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
