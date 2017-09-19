angular.module('studentapp')
.controller('addctrl',function($scope,httpService,$window) {
	$scope.add=function(){
		httpService.putStudentData($scope.student);
	};
	$scope.goBack=function() {
		httpService.returnHomePage();
	}
})