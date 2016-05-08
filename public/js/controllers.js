var schoolDashboard = angular.module('schoolDashboard', []);

schoolDashboard.controller('StudentListCtrl', function($scope) {
  $scope.students = [
    {'studentName': 'Mickey Mouse',
     'guidanceCounselor': 'Mike Wazowski',
     'guidanceCounselorEmail': 'mwazowski@monstersu.com',
     'attendanceYtd': '12'
    },
    {'studentName': 'Minnie Mouse',
     'guidanceCounselor': 'Mike Wazowski',
     'guidanceCounselorEmail': 'mwazowski@monstersu.com',
     'attendanceYtd': '2'
    }
  ];
});
