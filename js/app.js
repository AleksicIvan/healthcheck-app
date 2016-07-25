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

	$stateProvider.state('areas', {
		url: '/areas',
		templateUrl: '../partials/areas.html',
		controller: 'AreasCtrl'
	});

	$stateProvider.state('onkology', {
		url: '/onkology',
		templateUrl: '../partials/onkology.html',
		controller: 'OnkologyCtrl'
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
			name: 'Onkology',
			route: '/onkology'
		},
		{
			name: 'Urology',
			route: '/urology'
		},
		{
			name: 'Endocrinology',
			route: '/endocrinology'
		},
		{
			name: 'Cardiology',
			route: '/cardiology'
		},
		{
			name: 'Internal Medicine',
			route: '/internal'
		}
	];

	return areas;
});
