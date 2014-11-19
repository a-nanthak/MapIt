/*Function handling the marker*/

<<<<<<< HEAD
 $("#find-button").click( function() {
 
	if (navigator.geolocation) {
		var pos
		navigator.geolocation.getCurrentPosition(function(position) {
=======
 $("#find-button a").click( function() {
	var marker = new google.maps.Marker({
      position: initlatLng,
      map: map
	})
	
	var pos
	navigator.geolocation.getCurrentPosition(function(position) {
    pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	});
>>>>>>> c78412e8ef1a6151bbe1d427c5c3e4bef50bcd41
		
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

  














