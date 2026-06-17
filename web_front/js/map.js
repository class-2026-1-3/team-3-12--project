const container =
document.getElementById("map");

const options = {

    center:
    new kakao.maps.LatLng(
        35.1796,
        129.0756
    ),

    level:3
};

const map =
new kakao.maps.Map(
    container,
    options
);

const marker =
new kakao.maps.Marker({

    position:
    map.getCenter()

});

marker.setMap(map);