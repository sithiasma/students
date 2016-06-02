myApp.controller('viewctrl', function($scope, display) {
  $scope.students = display.getData();
  var imgData = window.localStorage.getItem("photo") || "";

  $scope.image = JSON.parse(imgData);
});
