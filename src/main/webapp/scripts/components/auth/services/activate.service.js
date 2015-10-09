'use strict';

angular.module('e2eApp')
    .factory('Activate', function ($resource, API_URL) {
        return $resource(API_URL + 'api/activate', {}, {
            'get': { method: 'GET', params: {}, isArray: false}
        });
    });


