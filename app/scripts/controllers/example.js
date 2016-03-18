'use strict';

/**
 * @ngdoc function
 * @name angularBoilerplateApp.controller:ExampleCtrl
 * @description
 * # ExampleCtrl
 * Controller of the angularBoilerplateApp
 */
angular.module('angularBoilerplateApp.controllers')
  .controller('ExampleCtrl', function ($scope) {
    $scope.exampleThings = [
      'these',
      'are',
      'example',
      'things'
    ];
  });
