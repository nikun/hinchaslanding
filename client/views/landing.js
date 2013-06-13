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
	else if(w<=480)phone();
	else if(w<=767)landPhone();

}

function bigDesktop(){
	Meteor.call("runCarousel","#carousel",5,585,function(error,result){
		if(error)console.log(error);
	});
	
}

function custom(){
	Meteor.call("runCarousel","#carousel",5,585,function(error,result){
		if(error)console.log(error);
	});
}

function tablet(){
	Meteor.call("runCarousel","#carousel",5,585,function(error,result){
		if(error)console.log(error);
	});
}

function landPhone(){
	Meteor.call("runCarousel","#carouselm",3,400,function(error,result){
		if(error)console.log(error);
	});
}

function phone(){
	Meteor.call("runCarousel","#carouselm",3,400,function(error,result){
		if(error)console.log(error);
	});
}