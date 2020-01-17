// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.0522, lng: -118.2437},
    zoom: 17
  });

  var destination = new google.maps.Marker({
      position: {lat: 34.0218, lng: -118.2828},
      label: "a",
      map: map
  });

  var Circ = {
    path: google.maps.SymbolPath.CIRCLE,
    fillColor: 'RoyalBlue',
    fillOpacity: 1,
    scale: 10,
    strokeWeight: 5,
    strokeColor: 'grey'
  };
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      console.log(position);
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(pos);
      // add marker
      var userLocation = new google.maps.Marker({
        position: pos,
        icon: Circ,
        map: map
      });
      //calculate distance
      var distanceInMeters = google.maps.geometry.spherical.computeDistanceBetween(
          userLocation.getPosition(),
          destination.getPosition()
      );
      console.log(distanceInMeters);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}
