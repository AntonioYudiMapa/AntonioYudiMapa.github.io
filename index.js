var map;
var marker;

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJPyYZVZZrVjx1XzY5DruLV_f2mOiK0OU&&v=3"></script>
<script>
  function initMap() {
    50 lines (44 sloc)  1014 Bytes
 

    
<html>
<head>
	<meta charset="utf-8">
	<title>Mapa em tempo real</title>
	<style>
		#map {
			height: 400px;
			width: 100%;
		}
	</style>
</head>
<body>
	<div id="map"></div>

	<script>
		var map;
		var marker;

		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				center: {lat: -23.5505, lng: -46.6333}, // São Paulo, Brasil
				zoom: 14
			});

			marker = new google.maps.Marker({
				map: map,
				animation: google.maps.Animation.DROP
			});

			if (navigator.geolocation) {
				navigator.geolocation.watchPosition(function(position) {
					var pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};
					marker.setPosition(pos);
					map.setCenter(pos);
				});
			} else {
				alert("Seu navegador não suporta geolocalização!");
			}
		}

		initMap();
	</script>

	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDJPyYZVZZrVjx1XzY5DruLV_f2mOiK0OU&v=3"></script>async defer></script>
</body>
</html>
  }

  window.initMap = initMap;
</script>




Regenerate response

    });

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP
    });

    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            marker.setPosition(pos);
            map.setCenter(pos);
        });
    } else {
        alert("Seu navegador não suporta geolocalização!");
    }
}
