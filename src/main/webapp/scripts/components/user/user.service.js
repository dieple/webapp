'use strict';

angular.module('e2eApp')
    .factory('User', function ($resource, API_URL) {
        return $resource(API_URL + 'api/users/:login', {}, {
                'query': {method: 'GET', isArray: true},
                'get': {
                    method: 'GET',
                    transformResponse: function (data) {
                        data = angular.fromJson(data);
                        return data;
                    }
                }
            });
        });
