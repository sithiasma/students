myApp.controller('addctrl', function($scope, display, fileReader) {
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
      email: "",
      imageSrc: ""
    };
  }
  console.log(fileReader);
 $scope.getFile = function () {
     $scope.progress = 0;
     fileReader.readAsDataUrl($scope.file, $scope)
                   .then(function(result) {
                       $scope.student.imageSrc = result;
                   });
 };

 $scope.$on("fileProgress", function(e, progress) {
     $scope.progress = progress.loaded / progress.total;
 });

});
myApp.directive("ngFileSelect",function(){

  return {
    link: function($scope,el){

      el.bind("change", function(e){

        $scope.file = (e.srcElement || e.target).files[0];
        $scope.getFile();
      });

    }

  };

});
