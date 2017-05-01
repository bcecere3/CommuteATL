var express = require('express');
var app = require('express')();
var bodyParser = require('body-parser');
//var http = require('http').Server(app);

//var http = require('http').Server(app);
//console.log(__dirname);
app.use(express.static(__dirname));
//app.use(express.static(__dirname+'public'));
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

// app.use(function (req, res, next) {
//   console.log(req);
//   res.header("Access-Control-Allow-Origin", "http://6310.lmc.gatech.edu:6002");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept, WWW-Authenticate");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   //next();
// });
app.get('/', function(req, res) {
  //console.log(__dirname);
  res.sendFile(__dirname + 'index.html');
});
app.listen(8080, function () {
  console.log('app listening on port 8080.')
  //console.log(http.headers.host);
});

/*http.listen(8080, function () {
 console.log('app listening on port 8080.');
 });*/
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyBu6QqMhIhGQgZrkh8azlDqROY5I3_3Uu4'
});


// app.getRoute = function (req,res) {
//   console.log(req);
//   googleMapsClient.directions({
//     origin: '75 9th Ave New York, NY',
//     destination: 'MetLife Stadium Dr East Rutherford, NJ 07073',
//     departure_time: '1541202457',
//     traffic_model: 'best_guess',
//     mode: 'driving'
//   }, function(err, response) {
//     if (!err) {
//       res.json(response.json.routes);
//       console.log(response.json.routes[0].bounds);
//     }
//     else{
//       console.log("hi");
//     }
//   });
// };

//------------------------------------------------------------------------//
//This is the main function that handles the POST requests from the client
app.post('/api/route', function (req,res) {
  //Req is the form data I send over from the client
  googleMapsClient.directions({
    origin: req.body.home,
    destination: req.body.work,
    //origin: '75 9th Ave New York, NY',
    //destination: 'MetLife Stadium Dr East Rutherford, NJ 07073',
    departure_time: 'now',
    traffic_model: 'best_guess',
    mode: req.body.mode
  }, function(err, response) {
    if (!err) {
      //res.sendfile('./public/index.html');
      res.json(response.json.routes);
      //console.log(response.json.routes[0].bounds);
    }
    else{
      //console.log("hi");
    }
  });
});

app.get('/api/route', function (req,res) {
  console.log(req);
  googleMapsClient.directions({
    //origin: req.origin,
    //destination: req.destination,
    origin: '75 9th Ave New York, NY',
    destination: 'MetLife Stadium Dr East Rutherford, NJ 07073',
    departure_time: 'now',
    traffic_model: 'best_guess',
    mode: 'driving'
  }, function(err, response) {
    if (!err) {
      //res.sendfile('./public/index.html');
      res.json(response.json.routes);
      console.log(response.json.routes[0].bounds);
    }
    else{
      console.log("hi");
    }
  });
});




