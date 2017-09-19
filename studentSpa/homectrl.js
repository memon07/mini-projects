angular.module('studentapp')
.controller('homectrl',function($scope,httpService,$window,$routeParams) {
	httpService.getStudentData().then(function(response){
		
		$scope.allStudents=response.data;
		});
	$scope.deleteStudent = function (index) {
		var confirmPrompt=$window.confirm('Are you absolutely sure you want to delete?')
		if (confirmPrompt) {
			$scope.deleteStudentData = $scope.allStudents[index].rollNo;
			httpService.deleteStudentData($scope.deleteStudentData);
		}else{
			alert("the delete operation is not performed")
		}
		}
	$scope.editStudent = function (student, rollno) {
		
			$window.location.href = '#/edit/' + rollno;
		}
	$scope.addStudent = function () {
			$window.location.href = '#/add';
		}
	})

.filter('genderCase', function () {
							
	return function (isMale) {
		switch(isMale){
		case true:
		return "Male";
		case false:
		return "Female";
		}
	};
});