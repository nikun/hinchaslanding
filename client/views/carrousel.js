Template.carousel.helpers({
	players: function() {
		return Users.find({});
	}
});

Template.carousel.rendered = function(){
	$("#carousel").carouFredSel({
		items               : 5,
		direction           : "left",
		responsive			: false,
		scroll : {
			items           : 1,
			easing          : "elastic",
			duration        : 1000,                        
			pauseOnHover    : true
		},
		auto    : {
			onBefore: function( data ) {
				unhighlight( data.items.old );
			},
			onAfter : function( data ) {
				highlight( data.items.visible );
			}
		}         
	});

	highlight( unhighlight( $("#carousel > *") ) );


}

function highlight( items ) {
	items.filter(":eq(2)").css({
		backgroundColor: "#ff9",
		width   : 140,
		height  : 140
	});
	return items;
}

function unhighlight( items ) {
	items.css({
		backgroundColor: "#fff",
		width   : 100,
		height  : 100
	});

	return items;

}
