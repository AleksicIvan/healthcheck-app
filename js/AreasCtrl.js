var app = angular.module('medApp');

app.controller('AreasCtrl', function($scope, $location, Areas, $log) {

	$scope.title = "This is the Areas partial";
	$scope.areas = Areas;

});
