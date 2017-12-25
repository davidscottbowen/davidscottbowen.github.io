$(function () {

  time(); 
  $("#two").hide();
  $("#three").hide();
  
  $("button#add").click(function (ev) {

    $("#location").empty();
    $("#temps").empty();
    $("#icon").empty();
    $("#min").empty();
    $("#max").empty();
    $("#rain").empty();

    var zipcode = $("#zip").val();
    if (!zip) return;

    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBsQ0aDIzCE6C6YHgwYmWOKGK6gn1_xChU").done(function (data) {
      var latitude = data.results[0].geometry.location.lat;
      var longitude = data.results[0].geometry.location.lng;

      $("#location").append(data.results[0].address_components[1].long_name + ',  ');
      $("#location").append(data.results[0].address_components[3].short_name + '<br />');
      //  pull darkskies data   works
      var darkSkyKey = "7e9f8f5bd991958121863a390874566c";

      $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude, { dataType: "jsonp" }).done(function (data) {
        var temp = Math.round(data.currently.temperature);
        var icons = data.currently.icon;
        var min = Math.round(data.daily.data[0].temperatureMin);
        var max = Math.round(data.daily.data[0].temperatureMax);
        var rain = data.currently.precipProbability;
        $("#temps").append(temp + '<sup>o</sup> F');
        $("#icon").append('<img src="icons/' + icons + '.png" height="64px" width="64px"><br>' + icons + '</br>')
        $("#min").append(min + '<sup>o</sup> F min');
        $("#rain").append(rain + '% ' + 'rain');
        $("#max").append(max + '<sup>o</sup> F max');

      });
   
    });
  
  });
 
  //// start of second card submit  

  $("button#add2").click(function (ev) {

    $("#location2").empty();
    $("#temps2").empty();
    $("#icon2").empty();
    $("#min2").empty();
    $("#max2").empty();
    $("#rain2").empty();

    var zipcode = $("#zip2").val();
    if (!zip2) return;

    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBsQ0aDIzCE6C6YHgwYmWOKGK6gn1_xChU").done(function (data) {

      var latitude = data.results[0].geometry.location.lat;
      var longitude = data.results[0].geometry.location.lng;

      $("#location2").append(data.results[0].address_components[1].long_name + ',  ');
      $("#location2").append(data.results[0].address_components[3].short_name + '<br />');
      //  pull darkskies data   works
      var darkSkyKey = "7e9f8f5bd991958121863a390874566c";

      $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude, { dataType: "jsonp" }).done(function (data) {

        var temp = Math.round(data.currently.temperature);
        var icons = data.currently.icon;
        var min = Math.round(data.daily.data[0].temperatureMin);
        var max = Math.round(data.daily.data[0].temperatureMax);
        var rain = data.currently.precipProbability;

        $("#temps2").append(temp + '<sup>o</sup> F');
        $("#icon2").append('<img src="icons/' + icons + '.png" height="64px" width="64px"><br>' + icons + '</br>')
        $("#min2").append(min + '<sup>o</sup> F min');
        $("#rain2").append(rain + '% ' + 'rain');
        $("#max2").append(max + '<sup>o</sup> F max');
      });
       
    });

  });

  //////// start of 3rd card submit

  $("button#add3").click(function (ev) {

    $("#location3").empty();
    $("#temps3").empty();
    $("#icon3").empty();
    $("#min3").empty();
    $("#max3").empty();
    $("#rain3").empty();

    var zipcode = $("#zip3").val();
    if (!zip3) return;

    $.ajax("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyBsQ0aDIzCE6C6YHgwYmWOKGK6gn1_xChU").done(function (data) {

      var latitude = data.results[0].geometry.location.lat;
      var longitude = data.results[0].geometry.location.lng;

      $("#location3").append(data.results[0].address_components[1].long_name + ',  ');
      $("#location3").append(data.results[0].address_components[3].short_name + '<br />');
      //  pull darkskies data   works
      var darkSkyKey = "7e9f8f5bd991958121863a390874566c";

      $.ajax("https://api.darksky.net/forecast/" + darkSkyKey + "/" + latitude + "," + longitude, { dataType: "jsonp" }).done(function (data) {
        
        var temp = Math.round(data.currently.temperature);
        var icons = data.currently.icon;
        var min = Math.round(data.daily.data[0].temperatureMin);
        var max = Math.round(data.daily.data[0].temperatureMax);
        var rain = data.currently.precipProbability
        $("#temps3").append(temp + '<sup>o</sup> F');
        $("#icon3").append('<img src="icons/' + icons + '.png" height="64px" width="64px"><br>' + icons + '</br>')
        $("#min3").append(min + '<sup>o</sup> F min');
        $("#rain3").append(rain + '% ' + 'rain');
        $("#max3").append(max + '<sup>o</sup> F max');

      });
      
    });

  });

  $("button#another").click(function (ev) {
    $("#two").show();
  });

  $("button#another3").click(function (ev) {
    $("#three").show();
  });

  $("button#minus2").click(function (ev) {
    $("#two").hide();
  });

  $("button#minus3").click(function (ev) {
    $("#three").hide();
  });

  




  function time() {
    var amPm;
    var date = new Date();
    var hour = date.getHours();
    if (hour < 12) {
      amPm = "AM";
    } else if (hour == 12) {
      hour = 12;
      amPm = "PM";
    } else if (hour > 12) {
      hour = hour - 12;
      amPm = "PM"
    };
    var min = date.getMinutes();
    if (min < 10) {
      min = "0" + min;
    };
  var time = hour + ":" + min + " " + amPm;
  $("#time").append(time);
  $("#time2").append(time);
  $("#time3").append(time);
  }


});