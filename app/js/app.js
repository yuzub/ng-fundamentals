'use strict';

var eventsApp = angular.module('eventsApp', ['ngRoute']);

eventsApp

    .controller('MainController', function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })

    .controller('CreateEventController', function ($scope) {
        $scope.name = 'CreateEventController';
    })

    .controller('EventsController', function ($scope) {
        $scope.name = 'EventsController';
    })

    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/newEvent', {
                templateUrl: 'templates/NewEvent.html',
                controller: 'CreateEventController'
            })
            .when('/events', {
                templateUrl: 'templates/EventsList.html',
                controller: 'EventsController'
            })
            .otherwise('/events');

        $locationProvider.html5Mode(true);
    });
