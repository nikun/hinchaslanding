Template.mobilefooter.events({
	"click #footer .span6": function(event,template){
		var link = $(event.target).attr("href");
		console.log(link);
		window.open(link, "_blank");
	}
});