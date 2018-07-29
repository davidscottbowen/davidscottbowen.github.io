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
                    title: 'My Home Town'
                  });
              } else {
                  alert("Request failed.")
              }
          });
  }