myApp.service('display', function(){
  this.getData = function(){
  var students = window.localStorage.getItem('students');
    if(students!==null){
      students=JSON.parse(students);
    }
};
  });
