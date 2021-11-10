var express = require('express');

var app = express();

app.get('/temperature/:location_code', function(request, result) {
  var location = request.params.location_code;
  // weather.current(location, function(error, temp_f) {
  console.log(location);
  // });
});

const port = 8080;
var server = app.listen(port, function() {
  console.log(`listening on port http:/localhost/${port}`);
});

// This works but I don't know how to call "weather".
// TODO: figure it out. I remember seeing it somewhere.