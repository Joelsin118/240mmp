function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(40.741895, -73.989308);
    var mapOptions = {
        center: myCenter,
        zoom: 13
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}
