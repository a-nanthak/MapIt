/*Google Maps API Configuration*/

var map
var initlatLng

function initialize() {

  initlatLng = new google.maps.LatLng(43.46519,-80.52237);
  
  var mapOptions = {
    zoom: 9,
    center: initlatLng,
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	streetViewControl: false,
	mapTypeControl: false
  }
  
  primMap = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

 }
 
google.maps.event.addDomListener(window, 'load', initialize);
 


  











