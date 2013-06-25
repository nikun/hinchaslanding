$(document).ready(function(){
	Meteor.defer(function(){
		evalSize();
		$(window).resize(function(){evalSize()});
	});
});


$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

function evalSize(){
	//alert('entro a evalSize!!!!!');
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
	userAgentDetector(false);
	runCarousel("#carousel",4,585);
	// Meteor.call("runCarousel","#carousel",5,585,function(error,result){
	// 	if(error)console.log(error);
	// });
	
}

function custom(){
	userAgentDetector(true);
	runCarousel("#carousel",4,585);
	// Meteor.call("runCarousel","#carousel",5,585,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function tablet(){
	userAgentDetector(true);
	runCarousel("#carousel",4,585);
	// Meteor.call("runCarousel","#carousel",3,400,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function landPhone(){
	userAgentDetector(true);
	runCarousel("#carouselm",3,400);
	// Meteor.call("runCarousel","#carouselm",3,400,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function phone(){
	userAgentDetector(true);
	runCarousel("#carouselm",3,400);
	// Meteor.call("runCarousel","#carouselm",3,400,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function phone2(){
	userAgentDetector(true);
	runCarousel("#carouselm",2,300);
	// Meteor.call("runCarousel","#carouselm",2,300,function(error,result){
	// 	if(error)console.log(error);
	// });
}

function userAgentDetector(isMobile){
	//console.log('divMobile: '+$('#video_background_mobile').css('display'));		
	if(isMobile){
		$('#video_background')[0].pause();
		$('#video_background').hide();

      	if (navigator.userAgent.match(/Android/i)
          || navigator.userAgent.match(/webOS/i)
          || navigator.userAgent.match(/iPhone/i)
          || navigator.userAgent.match(/iPad/i)
          || navigator.userAgent.match(/iPod/i)
          || navigator.userAgent.match(/BlackBerry/i)
          || navigator.userAgent.match(/Windows Phone/i)) {

      		$('#video_background_little_desktop').hide();
          	$('#video_background_mobile').show();
      	}else{
      		$('#video_background_little_desktop').show();
          	$('#video_background_mobile').hide();
      	}

	}else{
		$('#video_background').show();
		$('#video_background')[0].play();
		$('#video_background_mobile').hide();
		$('#video_background_little_desktop').hide();		
	}

}