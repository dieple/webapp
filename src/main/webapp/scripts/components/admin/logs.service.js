'use strict';

angular.module('e2eApp')
    .factory('LogsService', function ($resource, API_URL) {
        return $resource(API_URL + 'api/logs', {}, {
            'findAll': { method: 'GET', isArray: true},
            'changeLevel': { method: 'PUT'}
        });
    });
