
$(function () {

  // $("#map1").hide();
  // $("#map2").hide();

  $("button#add").click(function (ev) {

    var zipcode = $("#zip").val();
    if (!zip) return;
    $("#zip").val("");

    var latitude;
    var longitude;
    var spot;


    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBsQ0aDIzCE6C6YHgwYmWOKGK6gn1_xChU").done(function (data) {


      latitude = data.results[0].geometry.location.lat;
      longitude = data.results[0].geometry.location.lng;
      spot = { latitude, longitude };


      var mapCanvas = document.getElementById("map");
      var mapOptions = {

        center: new google.maps.LatLng(latitude, longitude),
        
        zoom: 10

      }
      var map = new google.maps.Map(mapCanvas, mapOptions);


      // var marker = new google.maps.Marker(map);


    });

    $("button#add2").click(function (ev) {

      // $("#location2").empty();
      // $("#temps2").empty();
      // $("#icon2").empty();
      // $("#min2").empty();
      // $("#max2").empty();
      // $("#rain2").empty();

      var zipcode = $("#zip2").val();
      if (!zip2) return;

      $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBsQ0aDIzCE6C6YHgwYmWOKGK6gn1_xChU").done(function (data) {

        var latitude = data.results[0].geometry.location.lat;
        var longitude = data.results[0].geometry.location.lng;
              latitude = data.results[0].geometry.location.lat;
      longitude = data.results[0].geometry.location.lng;
      spot = { latitude, longitude };


      var mapCanvas = document.getElementById("map1");
      var mapOptions = {

        center: new google.maps.LatLng(latitude, longitude),
        zoom: 10

      }
      var map = new google.maps.Map(mapCanvas, mapOptions);
      
     

    });

    $("#here").append(map);
      });

    //////// start of 3rd card submit

    $("button#add3").click(function (ev) {

      // $("#location3").empty();
      // $("#temps3").empty();
      // $("#icon3").empty();
      // $("#min3").empty();
      // $("#max3").empty();
      // $("#rain3").empty();

      var zipcode = $("#zip3").val();
      if (!zip3) return;

      $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBsQ0aDIzCE6C6YHgwYmWOKGK6gn1_xChU").done(function (data) {

        var latitude = data.results[0].geometry.location.lat;
        var longitude = data.results[0].geometry.location.lng;
      latitude = data.results[0].geometry.location.lat;
      longitude = data.results[0].geometry.location.lng;
      spot = { latitude, longitude };


      var mapCanvas = document.getElementById("map2");
      var mapOptions = {

        center: new google.maps.LatLng(latitude, longitude),
        zoom: 10    
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);

      });

    });

    $("button#another").click(function (ev) {
      $("#map1").show();
    });

    $("button#another3").click(function (ev) {
      $("#map2").show();
    });

    $("button#minus2").click(function (ev) {
      $("#map2").hide();
    });

    $("button#minus3").click(function (ev) {
      $("#map3").hide();
    });

  });
});