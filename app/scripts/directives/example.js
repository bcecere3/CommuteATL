'use strict';

/**
 * @ngdoc directive
 * @name angularBoilerplateApp.directive:example
 * @description
 * # example
 */
angular.module('angularBoilerplateApp')
  .directive('example.directives', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the example directive');
      }
    };
  });
