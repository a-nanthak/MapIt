/*Function handling the marker*/

 $("#find-button").click( function() {
 
	if (navigator.geolocation) {
		var pos
		navigator.geolocation.getCurrentPosition(function(position) {
		
			var lat = position.coords.latitude;
			var lon = position.coords.longitude;
			
			showMap(lat,lon);
				
			function showMap(lat,lon) {
				var markLatLng = new google.maps.LatLng(lat,lon);
					
				var marker = new google.maps.Marker({
					position: markLatLng,
					map: primMap
					});
					
				primMap.setZoom(15);
				primMap.setCenter(markLatLng);
			
			}

		});
	}	

	else {
		console.log('not existing');
	}
	

});

  














