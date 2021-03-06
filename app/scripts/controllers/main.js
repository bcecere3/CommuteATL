'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBoilerplateApp
 */

angular.module('angularBoilerplateApp.controllers')
  .controller('MainCtrl', function ($scope, trainService,$rootScope) {
    //Get the new MARTA data
    trainService.getTrainData();

    //Bools to know which transit items to show on page
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

      //Get trip duration data from Google API Object
      $scope.transitTime = $rootScope.transitData.routes[0].legs[0].duration.text;
      $scope.drivingTime = $rootScope.drivingData.routes[0].legs[0].duration.text;
      $scope.bikingTime = $rootScope.bikingData.routes[0].legs[0].duration.text;
      $scope.walkingTime = $rootScope.walkingData.routes[0].legs[0].duration.text;
    }

  });
