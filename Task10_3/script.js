angular.module("myApp", ["ui.router"])
  .config(function($stateProvider) {
      $stateProvider
        .state("table", {
            url: "/table",
            templateUrl : "table.html",
            controller: 'myTableController'
        })
        .state("update", {
            url: "/update?index",
            templateUrl : "update.html",
            controller: 'myUpdateController'
        });
  })
  .controller("myUpdateController", function ($scope, $state) {
    $scope.Name = $scope.table[$state.params.index].name;
    $scope.Count = $scope.table[$state.params.index].count;
    $scope.Fresh = $scope.table[$state.params.index].fresh;

    $scope.save = function() {
      $scope.table[$state.params.index].name = $scope.Name;
      var count = parseInt($scope.Count);
      if (Number.isInteger(count)) {
        $scope.table[$state.params.index].count = count;
      }
      if ($scope.Fresh == 'true' || $scope.Fresh == 'false') {
        $scope.table[$state.params.index].fresh = $scope.Fresh;
      }
      $state.go('table');
    };
    $scope.cancel = function() {
      $state.go('table');
    };
  })
  .controller("myTableController", function ($scope, $state) {
    $scope.update = function(idx) {
      $state.go('update' , { 'index' : idx } );
    };
    $scope.delete = function(idx) {
      $scope.table.splice(idx, 1);
    };
  })
  .controller("myController", function ($scope, $state) {
    $scope.table = [
      { name: 'Apple', count: 10, fresh: true },
      { name: 'Bannana', count: 5, fresh: false },
      { name: 'Lemon', count: 7, fresh: true },
      { name: 'Tomato', count: 20, fresh: true },
      { name: 'Parrot', count: 2, fresh: false }
    ];
    $state.go('table');
  //$scope.table.push({'name': 'Bannana', 'count': '5', 'fresh': 'false' });
});
