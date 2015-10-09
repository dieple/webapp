'use strict';

angular.module('e2eApp')
    .factory('Register', function ($resource, API_URL) {
        return $resource(API_URL + 'api/register', {}, {
        });
    });


