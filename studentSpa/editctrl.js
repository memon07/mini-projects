angular.module('studentapp')
.controller('editctrl',function($scope,httpService,$window,$routeParams) {
	console.log($routeParams.rollNo);

	httpService.getStudentByRollno($routeParams.rollNo)
	 .then(function(response){
	 	$scope.student=response.data;
	 })
	$scope.saveEdit = function () {
		console.log($scope.student);
				//$scope.student=	httpService.editStudentData;
		httpService.updateStudentData($routeParams.rollNo,$scope.student);
	}
	$scope.goBack=function() {
		httpService.returnHomePage();
	}
})