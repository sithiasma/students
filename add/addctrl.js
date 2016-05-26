myApp.controller('addctrl', function($scope, display) {
  reset();
  $scope.students = display.getData();
  $scope.add = function() {
    $scope.students.push($scope.student);
    window.localStorage.setItem('students', JSON.stringify($scope.students));
    alert("Save successful!");
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
});
myApp.directive('myimage', function(){
  return{
    templateUrl: 'myimage.html'
  };
});
