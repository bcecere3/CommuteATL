'use strict';

/**
 * @ngdoc overview
 * @name angularBoilerplateApp
 * @description
 * # angularBoilerplateApp
 *
 * Main module of the application.
 */
angular
  .module('angularBoilerplateApp', [
    'angularBoilerplateApp.controllers',
    'angularBoilerplateApp.services',
    'angularBoilerplateApp.factories',
    'angularBoilerplateApp.filters',
    'ngAnimate',
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.list', {
        url: 'main/list',
        templateUrl: 'views/main/main.list.html',
        controller: 'MainCtrl'
      })
      .state('example', {
        url: '/example',
        templateUrl: 'views/example/example.html',
        controller: 'ExampleCtrl'
      })
      .state('example.list', {
        url: '/list',
        templateUrl: 'views/example/example.list.html',
        controller: 'ExampleCtrl'
      });

  });
