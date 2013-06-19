Template.mvideo.rendered = function() {
	//console.log('render mvideo');
	//$('#video_background').hide();

	if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
		$('#video_background_little_desktop').hide();
		$('#video_background_mobile').show();
	} else {
		$('#video_background_little_desktop').show();
		$('#video_background_mobile').hide();
	}
};