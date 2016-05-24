myApp.service('display', function(){
  var students = window.localStorage.getItem('students');
  this.show = function(){
    if(students!==null){
      $scope.students=JSON.parse(students);
    }
  };
  });
