/*Function handling the marker*/

 $("#find-button a").click( function() {
	var marker = new google.maps.Marker({
      position: initlatLng,
      map: map
	})
	
	var pos
	navigator.geolocation.getCurrentPosition(function(position) {
    pos = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	});
		
	map.setCenter(initlatLng);
	map.setZoom(15);
	
});

  














