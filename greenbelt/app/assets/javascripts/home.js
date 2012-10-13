<<<<<<< HEAD
//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.

var map;
var geocoder;
var markers = [];



init = function () {	
	
	$("#enterLocationField").focus().keypress(function(event) {
	  if ( event.which == 13 ) {
	     searchMap();
	   }
	 });
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
	var clickPos = details.latLng;
	var marker = new google.maps.Marker({
		map:map,
		position: clickPos
	});
	markers.push(marker);
	map.panTo(marker.getPosition());
	var listItem = $("<li><button id='location"+(markers.length)+"' type='button'>Location "+(markers.length)+"</button></li>");
	listItem.hide().appendTo("#markerList").fadeIn();
	listItem.click(getLocationClickHandler(markers.length-1));
};

var searchMap = function () {
	request = {
		address: $('#enterLocationField').val()
	}
	geocoder.geocode(request, handleGeocodeResponse);
};

var getLocationClickHandler = function (locationIndex) {
	return function() {
		map.panTo(markers[locationIndex].getPosition());
	}
}


$(init);
