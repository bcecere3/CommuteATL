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
    'ngTouch',
    'ui.materialize'
  ])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $stateProvider
      .state('main', {
        abstract: true,
        templateUrl: 'views/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.dashboard', {
        url: '/dashboard',
        //templateUrl: 'views/main/dashboard.html',
        //controller: 'MyCommuteCtrl',
        parent: 'main',
        views:{
          'view':{
            templateUrl: 'views/main/dashboard.html',
            controller: 'MainCtrl'
          }
        }
      })
      .state('main.myCommute', {
        url: '/my-commute',
        views:{
          'view':{
            templateUrl: 'views/main/myCommute.html',
            controller: 'MyCommuteCtrl'
          }
        }
      })
      .state('main.setupCommute', {
        url: '/setup-commute',
        //templateUrl: 'views/Commute/setupCommute.html',

        views:{
          'view':{
            templateUrl: 'views/main/setupCommute.html',
            controller: 'SetupCommuteCtrl'
          }
        }
      })
      .state('main.favorites', {
        url: '/favorites',
        views:{
          'view':{
            templateUrl: 'views/main/favorites.html',
            controller: 'favoritesCtrl'
          }
        }

      })
      .state('main.schedules', {
        url: '/schedules',
        views:{
          'view':{
            templateUrl: 'views/main/schedules.html',
            controller: 'scheduleCtrl'
          }
        }
      })
      .state('main.breezecard', {
        url: '/my-breezecard',
        views:{
          'view':{
            templateUrl: 'views/main/breezecard.html',
            controller: 'breezecardCtrl'
          }
        }
      });
      $urlRouterProvider.otherwise('/dashboard');
      // $urlRouterProvider.otherwise( function($injector, $location) {
      //   var $state = $injector.get("$state");
      //   $state.go("main.opportunities");
      // });
  }])
  .run(function ($rootScope) {
    $rootScope.prefs = {};
    $rootScope.prefs.address = {};
    $rootScope.prefs.workAddress = {};
    $rootScope.prefs.days = [];
    $rootScope.prefs.transit = [];
    $rootScope.setupComplete = false;
    $rootScope.hasFav = false;
    $rootScope.prefs.stations = [];
    $rootScope.transitData = {};
    $rootScope.drivingData = {};
    $rootScope.walkingData = {};
    $rootScope.bikingData = {};
  });
