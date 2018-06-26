angular.module("myApplication", ["ui.router"])
  .config(function($stateProvider) {
      $stateProvider
        .state("home", {
            url: "/home",
            templateUrl : "home.html",
            controller: 'myController'
        })
        .state("page1", {
            url: "/page1",
            templateUrl : "page1.html",
            controller: 'myPage1Controller'
        })
        .state("page2", {
            url: "/page2",
            templateUrl : "page2.html",
            controller: 'myPage2Controller'
        });
  })
  .controller("myController", function($scope, $location) {
    $scope.goPage2 = function() {
      $location.url('/page2');
    }
  })
  .controller("myMainController", function($scope) {
  })
  .controller("myPage1Controller", function($scope) {
  })
  .controller("myPage2Controller", function($scope) {
  });
