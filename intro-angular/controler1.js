var app = angular.module("myApp", []);

app.controller('testCtrl1', function($scope) {
  $scope.what = [];
  $scope.func = function() {
  	$scope.what.push($scope.txt);
  }

});