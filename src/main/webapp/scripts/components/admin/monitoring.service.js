'use strict';

angular.module('e2eApp')
    .factory('MonitoringService', function ($rootScope, $http, API_URL) {
        return {
            getMetrics: function () {
                return $http.get(API_URL + 'metrics/metrics').then(function (response) {
                    return response.data;
                });
            },

            checkHealth: function () {
                return $http.get(API_URL + 'health').then(function (response) {
                    return response.data;
                });
            },

            threadDump: function () {
                return $http.get(API_URL + 'dump').then(function (response) {
                    return response.data;
                });
            }
        };
    });
