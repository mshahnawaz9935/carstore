//   var locations = [
//       ['Dublin', 53.333, -7.49],
//       ['New Delhi', 28.613939, 77.209021],
//['Ranelaugh', 53.333, -6.249],
//['New Delhi', 28.613939, 77.209021],
//['Washington, D.C.', 38.907192, -77.036871],
//['London', 51.507351, -0.127758],
//['Bern', 46.947974, 7.447447],
//['Brasilia', -14.235004, -51.925280],
//['Sydney', -33.865143, 151.209900],
//['Paris', 48.856614, 2.352222],
//['Rome', 41.902783, 12.496366],
//['Singapore', 1.352083, 103.819836]

//   ];
var locations = [['Henry Street', 53.349369, -6.262814], ['Belfast', 54.5965727, -6.0462222], ['Rochenstown', 53.2702749, -6.1420218]];
function initMap() {
    var p = document.getElementById("abc");
    p.innerHTML = locations[0][0];
    var mapOptions = {
        center: new google.maps.LatLng(53.349369, -6.262814),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var mapCanvas = document.getElementById('map');
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(53.349369, -6.262814),
        map: map
    });

    google.maps.event.addListener(marker, (function (marker, i) {
        return function () {
            infowindow.open(map, marker);

        }
    })(marker, i));
    marker.setMap(map);


}
function change() {
    var z = document.getElementById("drop").value;
    var p = document.getElementById("abc");
    p.innerHTML=locations[z][0];
    

    var mapOptions = {
        center: new google.maps.LatLng(locations[z][1], locations[z][2]),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var mapCanvas = document.getElementById('map');
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var infowindow = new google.maps.InfoWindow();

    var marker, i;


    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[z][1], locations[z][2]),
        map: map
    });

    google.maps.event.addListener(marker, (function (marker, i) {
        return function () {
            infowindow.open(map, marker);

        }
    })(marker, i));
    marker.setMap(map);


}