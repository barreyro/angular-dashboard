var schoolDashboard = angular.module('schoolDashboard', []);

schoolDashboard.controller('StudentListCtrl', function($scope, $http) {
  $scope.minAttendance = 0;
  $scope.maxAttendance = 1;
  $scope.thresholdFilter = function(student) {
    return ( student.attendanceYtd > $scope.minAttendance && student.attendanceYtd < $scope.maxAttendance);
  }
  $http.get('https://script.google.com/macros/s/AKfycbxtbtw8aL1oY3eyxjFE98kOCqdaG4T4pWvPbNcEv9PlWHPbHQF_/exec').success(function(data) {
    $scope.students = data;
  });
});
