portfolioApp.directive('projects', function(){
	return{
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'scripts/directives/projects.html',
		controller: 'ProjectsDirCtrl'
	};
});