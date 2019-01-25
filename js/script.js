function handleClick() {
    alert('This button has been clicked');
}

function doMore() {
    alert('I could process more logic here');
}

function handleClick(callback) {
    alert('This button has been clicked');
    if (callback) {
        callback();
    }
}

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}