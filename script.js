var myApp = angular.module("myApp",['ngRoute']);

myApp.config(function($routeProvider)  {
  $routeProvider.
           when('/home',{
             templateUrl: 'templates/home.html',
             controller: 'studentCtrl'
           }).
           when('/add',{
             templateUrl: 'templates/add.html',
             controller: 'formCtrl'
           }).
           otherwise({
             redirectTo: '/home'
           });
  });

myApp.controller('formCtrl',function(scope){
  $scope.students =[];
  $scope.student = {name:"",class:"",sex:"",mobile:"",email:""};

  $scope.add = function(){
    $scope.students.push($scope.student);
    window.localStorage.setItem("students",JSON.stringify($scope.students));
    alert(saved);
    reset();
  };

function reset(){
  $scope.student = {name:"",class:"",sex:"",mobile:"",email:""};
}

});

myApp.controller('studentCtrl',function(scope){
  var student = window.localStorage.getItem("students");
  $scope.students = JSON.parse(student);
});
