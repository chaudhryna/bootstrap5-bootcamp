// Initialize and add the map
function initMap() {
  // The location of Boston
  const boston = { lat: 42.361145, lng: -71.057083 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: boston,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: boston,
    map: map,
  });
}

window.initMap = initMap;