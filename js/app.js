var app = angular.module('medApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/main');

	$stateProvider.state('main', {
		url: '/main',
		templateUrl: '../partials/main.html',
		controller: 'MainCtrl'
	});

	$stateProvider.state('login', { 
		url: '/login',
		templateUrl: '../partials/login.html',
		controller: 'LoginCtrl'
	});

	$stateProvider.state('dashboard', { 
		url: '/dashboard',
		templateUrl: '../partials/dashboard.html',
		controller: 'DashboardCtrl'
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




	