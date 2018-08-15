// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  


function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  })
}


$('.')


  $.ajax({
    method: 'GET',
    url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson',
    success: earthquakeSuccess,
    error: earthquakeError
  });

  function earthquakeSuccess(response) {
    let earthquakeArray = response.features;
    $.each(earthquakeArray, function() {
      let earthquakeMag = this.properties.mag;
      let earthquakePlace = this.properties.place;
      let earthquakeTime = new Date(this.properties.time);
      console.log(earthquakeTime);
      let earthquakeLongitude = this.geometry.coordinates[0]; 
      let earthquakeLatitude = this.geometry.coordinates[1];
      

      $('#info').append(`<p>M ${earthquakeMag} - ${earthquakePlace} / ${earthquakeTime}</p>`)

      // <p>M 4.2 - 1km ESE of Fontana, California / 123 hours ago </p> 
      
      
      // console.log(earthquakeMag);

    })
  }

  function earthquakeError(er1, er2, er3) {
    console.log(er1);
    console.log(er2);
    console.log(er3);
    
  }
});

// success: function(response) {
//   let gifArray = response.data;

//   $.each(gifArray, function() {
//       let gifImg = this.images.downsized.url;
//       let gifResponse = `<img src="${gifImg}">`
//       $('div .gif-gallery').append(gifResponse);
//   });

// },

// let time = json.features[0].properties.time
// undefined
// time
// 1534296266310
// new Date(time)
// Tue Aug 14 2018 18:24:26 GMT-0700 (Pacific Daylight Time)