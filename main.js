$(document).ready(function() {
	// Flip card
	$(".card").click(function(){
		$(".card").toggleClass("flip");
	});

	// Prevent card flip on icon click
	$(".contact a").click(function(e){  
        e.stopPropagation();  
    });
});