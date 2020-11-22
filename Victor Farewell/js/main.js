// Add the Map

var map = L.map('map', {
  center: [1.344896, 103.8],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


// messages 
var myMarkers=makeMarkers(messages);

console.log(myMarkers)

plotMarkers(myMarkers)

// russia 
var outlierMarker=makeMarkers_russia(russia);

console.log(outlierMarker)

plotMarkers(outlierMarker)



