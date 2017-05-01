/**
 * Created by Brendan on 4/2/2017.
 */
'use strict';
angular.module('angularBoilerplateApp.controllers')
  .controller('MyCommuteCtrl', function ($scope,$rootScope) {

    //Bools to check which transportation items to list on page
    $scope.hasTrain = false;
    $scope.hasCar = false;
    $scope.hasWalk = false;
    $scope.hasBike = false;
    $scope.hasBus = false;
    if($rootScope.prefs.transit.length > 0){
      for(var i=0; i < $rootScope.prefs.transit.length; i++){
        if($rootScope.prefs.transit[i] === "Train"){
          $scope.hasTrain = true;
        }
        else if($rootScope.prefs.transit[i] === "Car"){
        $scope.hasCar = true;
        }
        else if($rootScope.prefs.transit[i] === "Bike"){
          $scope.hasBike = true;
        }
        else if($rootScope.prefs.transit[i] === "Walk"){
          $scope.hasWalk = true;
        }
        else if($rootScope.prefs.transit[i] === "Bus"){
          $scope.hasBus = true;
        }
      }

      //Get duration for each travel method from the Google API objects
      $scope.transitTime = $rootScope.transitData.routes[0].legs[0].duration.text;
      $scope.drivingTime = $rootScope.drivingData.routes[0].legs[0].duration.text;
      $scope.bikingTime = $rootScope.bikingData.routes[0].legs[0].duration.text;
      $scope.walkingTime = $rootScope.walkingData.routes[0].legs[0].duration.text;

      //Set arrival times from API data
      //Google only gives arrival time in Transit object. Had to blackbox the rest
      //$scope.transitArrTime = $rootScope.transitData.routes[0].legs[0].arrival_time.text;
      $scope.transitArrTime = "9:55am";
      $scope.drivingArrTime = "10:15am";
      $scope.bikingArrTime = "8:56am";
      $scope.walkingArrTime = "10:06am";

    }
  });
