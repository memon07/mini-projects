angular.module('swabhav.spa',['ngRoute'])
.config(function ($routeProvider) {
	$routeProvider
	.when("/", {
        templateUrl : "partials/home.html",
        controller:"homectrl"
    })
    .when("/About", {
        templateUrl : "partials/about.html",
        controller:"aboutctrl"
    })
    .when("/Career", {
        templateUrl : "partials/career.html",
        controller:"careerctrl"
    })
})