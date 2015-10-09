'use strict';

angular.module('e2eApp')
    .factory('ConfigurationService', function ($rootScope, $filter, $http, API_URL) {
        return {
            get: function() {
                return $http.get(API_URL + 'configprops').then(function (response) {
                    var properties = [];
                    angular.forEach(response.data, function (data) {
                        properties.push(data);
                    });
                    var orderBy = $filter('orderBy');
                    return orderBy(properties, 'prefix');
                });
            }
        };
    });
