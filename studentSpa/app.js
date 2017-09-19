angular.module('studentapp',['ngRoute','ui.bootstrap'])
.config(function($routeProvider) {
	$routeProvider
	.when("/", {
        templateUrl : "pages/home.html",
        controller:"homectrl"
    })
    .when("/add", {
        templateUrl : "pages/add.html",
        controller:"addctrl"
    })
    .when("/edit/:rollNo", {
        templateUrl : "pages/edit.html",
        controller:"editctrl"
    })
})

// .run(['$route', function($route)  {
//   $route.reload();
// }]);
// .run(['$route', angular.noop]);
// .run(['$log', '$rootScope', '$route', function ($log, $rootScope, $route) { 
 
// }

.service('httpService',function($http,$window,$route) {
	this.getStudentData = function () {
			return $http.get('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students');
		}
	this.getStudentByRollno = function (studentRollNo) {
			return $http.get('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/'+ studentRollNo);
		}
	this.putStudentData = function (studentObject) {
			$http.post('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students', studentObject);
		}
	this.updateStudentData = function (studentRollNo,studentObject) {
			$http.put('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + studentRollNo,studentObject)
		}
	this.deleteStudentData = function (studentObject) {
			$http.delete('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/' + studentObject, studentObject)
		.then(function (response) {
			$route.reload();
			})
		}
	this.returnHomePage = function () {
			$window.location.href = '#/';
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