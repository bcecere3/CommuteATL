'use strict';

/**
 * @ngdoc filter
 * @name angularBoilerplateApp.filter:exampleFilter
 * @function
 * @description
 * # exampleFilter
 * Filter in the angularBoilerplateApp.
 */
angular.module('angularBoilerplateApp.filters')
  .filter('exampleFilter', function () {
    return function (input) {
      return 'exampleFilter filter: ' + input;
    };
  });
