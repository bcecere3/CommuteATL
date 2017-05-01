/**
 * Created by Brendan on 4/2/2017.
 */
'use strict';
angular.module('angularBoilerplateApp.services')
  .service('trainService', function ($rootScope, $q, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this;
    
    //List of stations for dropdown
    self.stations = [
      "airport station",
      "arts center station",
      "ashby station",
      "avondale station",
      "bankhead station",
      "brookhaven station",
      "buckhead station",
      "chamblee station",
      "civic center station",
      "college park station",
      "decatur station",
      "doraville station",
      "dunwoody station",
      "east lake station",
      "edgewood candler park station",
      "five points station",
      "garnett station",
      "georgia state station",
      "hamilton e holmes station",
      "indian creek station",
      "inman park station",
      "kensington station",
      "king memorial station",
      "lakewood station",
      "lenox station",
      "lindbergh station",
      "medical center station",
      "midtown station",
      "north ave station",
      "north springs station",
      "oakland city station",
      "omni dome station",
      "peachtree center station",
      "sandy springs station",
      "vine city station",
      "west end station",
      "west lake station"
    ];

    //Ajax call to get Marta train information
    var get = function () {
      $http({
        method : 'GET',
        url : 'http://marta-api.herokuapp.com/arrivals?'
      }).then(function mySuccess(response) {
        self.data = response.data;
        console.log(self.data);
      }, function myError(response) {
        self.data = response.statusText;
      });
    };

    //Get arrival times for specified station
    var getArrivalTimes = function(s){
      self.times = [];
      for(var i=0; i<self.data.length; i++){
        if(self.data[i].station == s){
          self.times.push(self.data[i].waiting_time);
        }
      }
      self.times.sort(naturalCompare);
      return self.times;
    };

    //Natural Sort for Strings. Taken from StackOverFlow
    //The minutes are in string form and this reads them as if they were ints so I can sort arrival times least to greatest
    function naturalCompare(a, b) {
      var ax = [], bx = [];
      a.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]) });
      b.replace(/(\d+)|(\D+)/g, function(_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]) });
      while(ax.length && bx.length) {
        var an = ax.shift();
        var bn = bx.shift();
        var nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
        if(nn) return nn;
      }
      return ax.length - bx.length;
    }

    return{
      getTrainData: function(){
        get();
      },
      getStations: function () {
        return self.stations;
      },
      getArrivalTimes: function (s) {
        return getArrivalTimes(s);
      }
    };
  });
