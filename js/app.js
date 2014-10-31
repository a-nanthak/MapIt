/*toggles nav if menu button is clicked and animates the menu button*/

$("#title-section #menu-button, #main-menu li").click( function() {
	$("#main-nav").stop(true).delay(150).slideToggle("slow");
	
	$("#main-content").toggleClass( "space" )
	
	if ($("#main-content").hasClass("space")) {
		$("#main-content").stop(true).animate({
			'margin-top' : "150px"
		});
	}
	
	else {
		$("#main-content").delay(200).animate({
			'margin-top' : "0px"
		});
	
	}

	
	});

/*Send button only appears when Find Button is clicked*/

$("#find-button a").click( function() {
	$("#send-button").fadeIn(1000);
	
	});


