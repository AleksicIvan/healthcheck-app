var app = angular.module('medApp');

app.controller('DashboardCtrl', ['$scope', function($scope) {
	$scope.message = 'Hello from the Dashboard!';
}]);