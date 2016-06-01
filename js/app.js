var app = angular.module('medApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/main');

	$stateProvider.state('main', {
		url: '/main',
		templateUrl: '../partials/main.html',
		controller: 'MainCtrl'
	});

	$stateProvider.state('home', { 
		url: '/home',
		templateUrl: 'main.html',
		controller: 'HomeCtrl'
	});
});

app.service('Areas', function() {
		var areas = [
		{
			name: 'Onkology'
		},
		{
			name: 'Urology'
		},
		{
			name: 'Endocrinology'
		},
		{
			name: 'Cardiology'
		},
		{
			name: 'Internal Medicine'
		}
	];

	return areas;
}); 



	