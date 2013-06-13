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
	console.log("desktop");
}

function custom(){
	console.log("custom");
}

function tablet(){
	console.log("tablet");
}

function landPhone(){
	console.log("landphone");
}

function phone(){
	console.log("phone");
}