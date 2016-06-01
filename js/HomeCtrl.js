var app = angular.module('medApp');

app.controller('HomeCtrl', function($scope, $location, Areas) {

	$scope.changeAJAX = function changeAJAX (path) {
		$location.path(path);
	};

	$scope.areas = Areas;
});