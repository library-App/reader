var app=angular.module('reader',['ngRoute']);
app.config([
	'$routeProvider',
	function($routeProvider){
		$routeProvider.when('/',{
			templateUrl:'reader/login/login.html',
			controller:'loginCtrl'
		}).when('/list',{
			templateUrl:'list/list.html',
//			controller:'listCtrl'
		})
	}
])