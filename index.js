let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -31.633333, lng: -60.7 },
    zoom: 8,
  });
}
