/**
 * Created by Feroz on 16/03/2015.
 */
(function(){
    'use strict';

    angular.module('myApp.services',[])
        .factory('NSWTrainService',function($http){
            var trackworksAPI = {};
            trackworksAPI.getTrackworks = function(){
                //var urlBase = 'http://localhost:7689/api/TrainTracker/get/get?callback=JSON_CALLBACK';
                return $http({
                    method: 'JSONP',
                    url:'http://localhost:7689/api/TrainTracker/get/get?callback=JSON_CALLBACK'
                });
            }
            return trackworksAPI;
        });
})();