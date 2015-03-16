'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.trackworks',
    'myApp.services',
  'myApp.version'
]);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/goodServices'});

    $routeProvider.when('/', {
        templateUrl: 'landing_page.html',
        controller: 'LandingPageController'
    });
}])

.controller('LandingPageController', [
    function() {}
]);
//TODO: Majjor delays....