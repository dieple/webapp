'use strict';

angular.module('e2eApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
