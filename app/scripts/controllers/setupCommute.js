/**
 * Created by Brendan on 4/2/2017.
 */
'use strict';
angular.module('angularBoilerplateApp.controllers')
  .controller('SetupCommuteCtrl', function ($scope, $rootScope, navService) {
    //Gets form data and saves it globally
    $scope.updatePrefs = function(prefs) {
      $rootScope.prefs = angular.copy(prefs);
      $rootScope.setupComplete = true;

      //Temporary solution for Google CORS Issues
      //Normally this is where I would call the NavService functions that make POST requests and would get the data back here
      $rootScope.transitData = navService.getMyTransitData();
      $rootScope.drivingData = navService.getMyDrivingData();
      $rootScope.bikingData = navService.getMyBikingData();
      $rootScope.walkingData = navService.getMyWalkingData();
    };
  });
