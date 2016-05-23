myApp.controller('addctrl', function($scope){
  $scope.students = [];
  reset();
  $scope.add = function(){
    $scope.student.push($scope.students);
    window.localStorage.setItem('students',JSON.stringify($scope.students));
    alert(saved);
    reset();
  };
  function reset(){
    $scope.student = {
      name:"",
      class:"",
      sex:"",
      mobile:"",
      email:""
    };
  }
});
