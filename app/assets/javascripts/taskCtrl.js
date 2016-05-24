(function() {
  "use strict";
  angular.module("app").controller("taskCtrl", function($scope) {
    $scope.tasks = [];

    $scope.addTask = function(task) {
      $scope.tasks.push(task);
    }

    window.$scope = $scope;
  });
}());