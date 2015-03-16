/**
 * Created by Feroz on 16/03/2015.
 */

(function(){

    'user strict';
    var injectParams = ['$http'];

    angular
        .module('myApp.dataservice')
        .factory('dataservice',['$http',function($http){

            var urlBase = 'http://localhost:7689/api/TrainTracker/get/get?callback=JSON_CALLBACK';

            var dataFactory = {};

            dataFactory.getTrackworks = function () {
                return $http.get(urlBase);
            };

            return dataFactory;

        }]);
    dataFactory.$inject = injectParams;


})();