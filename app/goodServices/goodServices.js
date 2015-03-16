'use strict';

var app = angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/goodServices', {
    templateUrl: 'goodServices.html',
    controller: 'GoodServicesController'
  });
}]);

app.controller('GoodServicesController', [function() {
//TODO: find out when the services are good if any.

}]);