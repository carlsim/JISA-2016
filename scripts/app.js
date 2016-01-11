var jisaApp = angular.module('jisaApp',[
	'ngRoute',
	'jisaControllers'
	]);

jisaApp.config(['$routeProvider',
	function($routeProvider){
		$routeProvider
		.when('/',{
			controller: 'JisaHomeCtrl',
			templateUrl: 'views/home.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}]);