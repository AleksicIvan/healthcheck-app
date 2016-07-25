var app = angular.module('medApp');

app.controller('LoginCtrl', ['$scope', '$location', '$log', '$rootScope', function($scope, $location, $log, $rootScope) {
	$scope.heading = 'Enter your username and password: ';
	$rootScope.isUserLoggedIn = false;
	$scope.submit = function() {
		if($scope.username === 'adm' && $scope.password === 'mda') {
			$rootScope.isUserLoggedIn = true;
			$location.path('/areas');
		} else {
			$location.path('/login');
			$scope.error = 'You have entered invalid username/password!';
		}
	};
}]);
