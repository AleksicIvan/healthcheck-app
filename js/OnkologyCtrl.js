var app = angular.module('medApp');

app.controller('OnkologyCtrl', function($scope, $location, Areas, $log) {

	$scope.title = "This is the Onkology partial";
	$scope.areas = Areas;

  $scope.allHealthChecks = [
    {
      when: 'Ph Nalaz 2010',
      report: 'public/ONKOLOGIJA/2010-02 (Feb)/scan0015.pdf'
    },
    {
      when: 'Ph Nalaz 2013',
      report: 'public/ONKOLOGIJA/kont feb 2013_1.pdf'
    },
    {
      when: 'Ph Nalaz 2015',
      report: 'public/ONKOLOGIJA/urolog-od-06.20150001.pdf'
    }
  ];

});
