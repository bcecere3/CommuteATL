'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp.controllers')
  .controller('MainCtrl', function ($scope) {
    $scope.mainThings = [
      'this',
      'is',
      '...awesome?'
    ];
  });
