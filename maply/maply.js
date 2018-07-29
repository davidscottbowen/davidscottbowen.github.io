function locate() {
  var zipcode = document.getElementById("zipcode").value;
  var geocoder = new google.maps.Geocoder();
          var address = zipcode;
          geocoder.geocode({ 'address': address }, function (results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                  var latitude = results[0].geometry.location.lat();
                  var longitude = results[0].geometry.location.lng();
                  var myLatLng = {lat: latitude, lng: longitude};

                  var map = new google.maps.Map(document.getElementById('map'), {
                    zoom: 10,
                    center: myLatLng
                  });

                  var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: map,
                    title: ''
                  });

                  var worldMap = new google.maps.Map(document.getElementById('world'), {
                    zoom: 1,
                    center: myLatLng
                  });
          
                  var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: worldMap,
                    title: ''
                  });

                  var stateMap = new google.maps.Map(document.getElementById('state'), {
                    zoom: 3,
                    center: myLatLng
                  });
            
                  var marker = new google.maps.Marker({
                    position: myLatLng,
                    map: stateMap,
                    title: ''
                  });
              } else {
                  alert("Request failed.")
              }
          });
  }