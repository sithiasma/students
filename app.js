var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
    when('/view', {
        templateUrl: 'view/view.html',
        controller: 'viewctrl'
    }).
    when('/add', {
        templateUrl: 'add/add.html',
        controller: 'addctrl'
    }).
    otherwise({
        redirectTo: '/view'
    });
});
