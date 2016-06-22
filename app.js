var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
    when('/view1', {
        templateUrl: 'view/view1.html',
        controller: 'viewctrl'
    }).
    when('/add', {
        templateUrl: 'add/add.html',
        controller: 'addctrl'
    }).
    when('/view2',{
        templateUrl: 'view/view2.html',
        controller: 'viewctrl'
    }).
    when('/show',{
        templateUrl: 'show.html'
    }).
    when('/edit/:id',{
        templateUrl: 'add/add.html',
        controller: 'addctrl'
    }).
    otherwise({
        redirectTo: '/view1'
    });
});
