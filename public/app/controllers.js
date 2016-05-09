var schoolDashboard = angular.module('schoolDashboard', []);

schoolDashboard.controller('StudentListCtrl', function($scope, $http) {
  $scope.minAttendance = 0;
  $scope.maxAttendance = 1;
  $scope.attendanceAverage = 0;

  $scope.thresholdFilter = function(student) {
    return ( student.attendanceYtd > $scope.minAttendance && student.attendanceYtd < $scope.maxAttendance);
  }

  $scope.getAverage = function(numbers, attr) {
    var total = 0;
    var size = 0;
    for (var property in numbers){
      if (Object.prototype.hasOwnProperty.call(numbers, property)){
        size++;
      }
    }

    for(var counter = 0; counter < size; counter++) {
     total += numbers[counter][attr];
    }

    return ((total / size).toFixed(4));
  }

  $scope.getMedian = function(numbers, attr) {
    var values = [];
    var size = 0;
    for (var property in numbers){
      if (Object.prototype.hasOwnProperty.call(numbers, property)){
        size++;
      }
    }

    for (var counter = 0; counter < size ; counter++){
      values.push(numbers[counter][attr]);
    };

    values.sort(function(a,b){
      return(a-b);
    });

    var midpoint = Math.floor(values.length / 2);
    if (values.length % 2)
      return (values[midpoint].toFixed(4));
    else
      return ((values[midpoint - 1] + values[midpoint]) / 2.0).toFixed(4) ;
  }

  $http.get('https://script.google.com/macros/s/AKfycbxtbtw8aL1oY3eyxjFE98kOCqdaG4T4pWvPbNcEv9PlWHPbHQF_/exec').success(function(data) {
    $scope.students = data;
  });
});
