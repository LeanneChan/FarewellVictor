/* LOAD DATA FUNCTIONS*/
var create_marker = function(row){
    var lat=row.geometry.coordinates[1];
    var lng=row.geometry.coordinates[0];
    var name=row.properties.Name;
    var msg = row.properties.Message;
    var color='#049c94';
    var radius= 12;
    var pathOpts = {'radius': radius, 'fillColor': color, 'fillOpacity':0.8, 'stroke': false};
    var marker = L.circleMarker([lat, lng], pathOpts).bindPopup("<b>Name: </b>"+name+"</br> <b>Message: </b>"+msg);
    return marker;
}

var makeMarkers = function(cleanedData) {
  var markers = _.map(cleanedData, create_marker);
  return(markers)
}

// make russia marker
var create_marker_russia = function(row){
    var lat=row.geometry.coordinates[1];
    var lng=row.geometry.coordinates[0];
    var msg = row.properties.Message;
    var color = '#e0157c';
    var radius = 12;
    var pathOpts = {'radius': radius, 'fillColor': color, 'fillOpacity':0.8, 'stroke': false};
    var content = '<img src="js/images/oneservice-logo.png"/></div><br><center>All the best Victor!</center>'
    var marker = L.circleMarker([lat, lng], pathOpts).bindPopup(content);
    return marker;
}

var makeMarkers_russia = function(cleanedData) {
  var markers = _.map(cleanedData, create_marker_russia);
  return(markers)
}

// Plot markers

var plotMarkers = function(markers){
	for (var i = 0; i < markers.length; i++) {
		markers[i].addTo(map)
	}
}

// var removeMarkers = function(markers) {
//   _.each(markers, function(m){map.removeLayer(m)})
// };



