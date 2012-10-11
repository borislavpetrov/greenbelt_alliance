//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.

var map;
var geocoder;

init = function () {	
	// window.console.log($('#map_canvas'));	
	var myOptions = {
		zoom: 12,
		center: new google.maps.LatLng(37.38441493390598, -122.07801661318365),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
	google.maps.event.addListener(map, 'click', handleMapClick);
	
	geocoder = new google.maps.Geocoder();
}
	
var handleGeocodeResponse = function(results, status) {
	if (status == google.maps.GeocoderStatus.OK) {
		var marker = new google.maps.Marker({
			map: map,
			position: results[0].geometry.location
		});
		map.panTo(marker.getPosition());
	} else {
		window.alert('failed to geocode address: '  + status);
	}
};

var handleMapClick = function(details) {
	window.console.log(details.latLng);
};

var searchMap = function () {
	request = {
		address: $('#enterLocationField').val()
	}
	geocoder.geocode(request, handleGeocodeResponse);
};


$(init);
