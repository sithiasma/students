var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'home.html',
        controller: 'studentCtrl'
    }).
    when('/add', {
        templateUrl: 'add.html',
        controller: 'studentCtrl'
    }).
    otherwise({
        redirectTo: '/home'
    });
});

myApp.controller('studentCtrl', function($scope) {
    $scope.students = [];
    reset();

    $scope.add = function() {
        $scope.students.push($scope.student);
        window.localStorage.setItem("students", JSON.stringify($scope.students));
        alert('saved');
        reset();
    };

    function reset() {
        $scope.student = {
            name: "",
            class: "",
            sex: "",
            mobile: "",
            email: ""
        };
				    }

            var students = window.localStorage.getItem("students");
          	if ( students !== null ) {
          		$scope.students = JSON.parse(students);
          	}
  console.log("End of contorller");
});
