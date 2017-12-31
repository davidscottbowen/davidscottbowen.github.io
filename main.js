var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dates = new Array(42);
var d = new Date();
var weekday = d.getDay();
var month = d.getMonth();
var date = d.getDate();
var year = d.getFullYear();
var currentMonth = month;
var dt = new Date(monthNames[month] + '/' + 01 + '/' + year);
var todayMonth = month + 1;
var todayDate = todayMonth.toString() + '/' + date.toString() + '/' + year.toString();

$(function () {
    var totalMonthDays = daysInMonth(month, year);
    var previousMonthDays = daysInMonth(month - 1, year);
    emptyArray();
    dayofweekswitch();
    $("#month").empty();
    $("#month").append(monthNames[month] + ' ' + year);

    for (i = 0; i < 42; i++) {
        $('#day' + i).empty();
        if (dates[i] >= 1 && dates[i] <= totalMonthDays) {
            var eventmonth = month + 1;
            var wholeDate = eventmonth.toString() + '/' + dates[i].toString() + '/' + year.toString();
            if (wholeDate == todayDate) {
                $('#day' + i).addClass('today');
            }
            $('#day' + i).append(dates[i])
        }
    }

    $("button#nextmonth").click(function (ev) {
        emptyArray();
        month = month + 1;
        if (month > 11) {
            month = 0
            year = year + 1
        };
        dt = new Date(monthNames[month] + '/' + 01 + '/' + year);
        var totalMonthDays = daysInMonth(month, year);

        dayofweekswitch();

        for (i = 0; i < 42; i++) {
            $('#day' + i).empty();
            if (dates[i] >= 1 && dates[i] <= totalMonthDays) {
                var eventmonth = month + 1;
                var wholeDate = eventmonth.toString() + '/' + dates[i].toString() + '/' + year.toString();
                $('#day' + i).append(dates[i])
            }
        }
        $("#month").empty();
        $("#month").append(monthNames[month] + ' ' + year);
    });

    $("button#previousmonth").click(function (ev) {
        emptyArray();
        month = month - 1;
        if (month < 0) {
            month = 11
            year = year - 1
        };

        dt = new Date(monthNames[month] + '/' + 01 + '/' + year);

        var totalMonthDays = daysInMonth(month, year);
        dayofweekswitch();
        for (i = 0; i < 42; i++) {
            $('#day' + i).empty();
            if (dates[i] >= 1 && dates[i] <= totalMonthDays) {
                var eventmonth = month + 1;
                var wholeDate = eventmonth.toString() + '/' + dates[i].toString() + '/' + year.toString();
                $('#day' + i).append(dates[i])
            }
        }
        $("#month").empty();
        $("#month").append(monthNames[month] + ' ' + year);
    });

    function daysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    };

    function emptyArray() {
        for (i = 0; i < dates.length; i++) {
            dates[i] = 0
        }
    };

    function dayofweekswitch() {
        switch (dt.getDay()) {
            case 0:
                day = "Sunday";
                dates[0] = 1
                x = 2;
                for (i = 1; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x += 1;
                }
                break;
            case 1:
                day = "Monday";
                dates[1] = 1
                x = 2;
                for (i = 2; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x += 1;
                }
                break;
            case 2:
                day = "Tuesday";
                dates[2] = 1
                x = 2;
                for (i = 3; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x += 1;
                }
                break;
            case 3:
                day = "Wednesday";
                dates[3] = 1
                x = 2;
                for (i = 4; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x += 1;
                }
                break;
            case 4:
                day = "Thursday";
                dates[4] = 1
                x = 2;
                for (i = 5; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x += 1;
                }
                break;
            case 5:
                day = "Friday";
                dates[5] = 1
                x = 2;
                for (i = 6; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x += 1;
                }
                break;
            case 6:
                day = "Saturday";
                dates[6] = 1
                x = 2
                for (i = 7; i < dates.length; i++) {
                    if (x > 31) {
                        dates[i] = 0
                    } else {
                        dates[i] = x
                    }
                    x += 1;
                }
        }
    }

    //Calendar End

    //Weatherly Start

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
                $("#min").append(min + '<sup>o</sup>  F min');
                $("#rain").append(rain + '% ' + 'rain');
                $("#max").append(max + '<sup>o</sup>  F max');

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
});