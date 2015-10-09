'use strict';

angular.module('e2eApp')
    .factory('Tracker', function ($rootScope, API_URL) {
        var stompClient = null;
        function sendActivity() {
            stompClient
                .send(API_URL + '/websocket/activity',
                {},
                JSON.stringify({'page': $rootScope.toState.name}));

        }
        return {
            connect: function () {
                var socket = new SockJS(API_URL + '/websocket/activity');
                stompClient = Stomp.over(socket);
                stompClient.connect({}, function(frame) {
                    sendActivity();
                    $rootScope.$on('$stateChangeStart', function (event) {
                        sendActivity();
                    });
                });
            },
            sendActivity: function () {
                if (stompClient != null) {
                    sendActivity();
                }
            },
            disconnect: function() {
                if (stompClient != null) {
                    stompClient.disconnect();
                    stompClient == null;
                }
            }
        };
    });
