/* LOAD DATA FUNCTIONS*/
var create_marker = function(row){
    var lat=row.geometry.coordinates[1];
    var lng=row.geometry.coordinates[0];
    var name=row.properties.Name;
    var msg = row.properties.Message;
    var colors = ['#e0157c', '#f4d413', '#049c94']
    var color = colors[Math.floor(Math.random() * colors.length)];
    //var color='#049c94';
    var radius= 12;
    var pathOpts = {'radius': radius, 'fillColor': color, 'fillOpacity':0.8, 'stroke': false};
    var marker = L.circleMarker([lat, lng], pathOpts).bindPopup("<b>From: </b>"+name+"</br> <b>Message: </b>"+msg);
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
    var photo = row.properties.Photo;
    var color ='#049c94'
    //var color = 'black';
    var radius = 12;
    var pathOpts = {'radius': radius, 'fillColor': color, 'fillOpacity':0.8, 'stroke': false};
    var content = '<img id="russiaImg" src="js/images/' + photo  + '"/></div><br><center>' + msg + '</center>'
    var marker = L.circleMarker([lat, lng], pathOpts).bindPopup(content, {maxWidth: "auto"});
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



