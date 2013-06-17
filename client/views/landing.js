$(document).ready(function(){
	Meteor.defer(function(){
		evalSize();	
		$(window).resize(function(){evalSize()});
	});
});

$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

function evalSize(){
	var w = $(window).width();

	if(w>=1200)bigDesktop();
	else if(w<1200 && w>=980)custom();
	else if(w<980 && w>=768)tablet();
	else if(w<=320)phone2();
	else if(w<=480)phone();
	else if(w<=767)landPhone();

}


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

function bigDesktop(){
	runCarousel("#carousel",5,585);
	// Meteor.call("runCarousel","#carousel",5,585,function(error,result){
	// 	if(error)console.log(error);
	// });
	
}

function custom(){
	runCarousel("#carousel",5,585);
	// Meteor.call("runCarousel","#carousel",5,585,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function tablet(){
	runCarousel("#carousel",5,585);
	// Meteor.call("runCarousel","#carousel",3,400,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function landPhone(){
	runCarousel("#carouselm",3,400);
	// Meteor.call("runCarousel","#carouselm",3,400,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function phone(){
	runCarousel("#carouselm",3,400);
	// Meteor.call("runCarousel","#carouselm",3,400,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function phone2(){
	runCarousel("#carouselm",2,300);
	// Meteor.call("runCarousel","#carouselm",2,300,function(error,result){
	// 	if(error)console.log(error);
	// });
}