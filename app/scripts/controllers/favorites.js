/**
 * Created by Brendan on 4/3/2017.
 */
'use strict';
angular.module('angularBoilerplateApp.controllers')
  .controller('favoritesCtrl', function ($scope, $rootScope, trainService) {
    //Get list of stations
    $scope.stations = trainService.getStations();

    $scope.selectedStations = [];
    $scope.favStation = {};

    //Add a station to the selectedStation array
    $scope.addStation = function(s) {
      //Verify there are no duplicate stations going into array
      var result = $.grep($scope.selectedStations, function(e){
        if(e === s){
          return 1;
        }
        else{
          return 0;
        }
      });
      if(result == 0){
        $scope.selectedStations.push(angular.copy(s));
        //Reset dropdown selector so users can't spam "Add button"
        $scope.favStation.name = null;
      }
    };
    //When user is done adding stations, they save them to the global favorite station object
    $scope.saveStations = function(){
      //Go through selectedStations and add them to global object; making sure no duplicates get added
      for(var i=0; i < $scope.selectedStations.length; i++){
        var result = $.grep($rootScope.prefs.stations, function(e){
          if(e.station === $scope.selectedStations[i]){
            return 1;
          }
          else{
            return 0;
          }
        });
        if(result == 0){
          var tempObj = {};
          //Get arrival times for saved stations
          var tempTimes = trainService.getArrivalTimes($scope.selectedStations[i]);
          tempObj = {station: $scope.selectedStations[i], times: tempTimes};
          $rootScope.prefs.stations.push(tempObj);
        }

      }
      console.log($rootScope.prefs.stations);
      //Flip global flag so dashboard knows to hide Null State panel and show panel with stations
      if($scope.selectedStations.length >= 1){
        $rootScope.hasFav = true;
      }
      // $scope.selectedStations = null;
    };
    //Removes station from array by the index
    $scope.removeStation = function (index) {
      $scope.selectedStations.splice(index, 1);
    };
    $scope.removeRootStation = function (index) {
      if($scope.selectedStations.length > 0){
        $scope.selectedStations.splice(index, 1);
      }
      $rootScope.prefs.stations.splice(index, 1);
      if($rootScope.prefs.stations.length == 0){
        $rootScope.hasFav = false;
      }
    }
  });
