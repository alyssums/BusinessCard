$(document).ready(function() {
	$(".card").click(function(){
		$(".card").toggleClass("flip");
		console.log("Clicked");
	});
});