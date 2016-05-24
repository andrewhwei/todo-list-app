(function() {
  "use strict";
  angular.module("app").controller("taskCtrl", function($scope) {
    $scope.tasks = [];

    $scope.addTask = function(task) {
      if ($scope.newTask) {
        $scope.tasks.push(task);
        $scope.newTask = null;
      }
    }

    $scope.deleteTask = function(index) {
      $scope.tasks.splice(index, 1);
    }

    $scope.isPositive = function(task) {
      return task.indexOf("stupid") == -1;
    }

    window.$scope = $scope;
  });
}());