(function() {
  'use strict';

  angular.module('myApp.trackworks', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/trackworks', {
          templateUrl: 'trackworks/trackworks.html',
          controller: 'TrackworksController'
        });
      }])
  .controller("TrackworksController",function($scope,NSWTrainService){
          $scope.trackworkList = [];
          var vm = this;
          vm.title ="Trackworks";
          NSWTrainService.getTrackworks().success(function(response){
              $scope.trackworkList = response;
              console.log("success: " + $scope.trackworkList);
          });
      });

})();
