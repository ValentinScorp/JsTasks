angular.module("myApplication", ["ngRoute"])
  .config(function($routeProvider) {
      $routeProvider
        .when("/home", {
            templateUrl : "home.html",
            controller: 'myController'
        })
        .when("/page1", {
            templateUrl : "page1.html",
            controller: 'myPage1Controller'
        })
        .when("/page2", {
            templateUrl : "page2.html",
            controller: 'myPage2Controller'
        });
  })
  .controller("myController", function($scope, $location) {
    $scope.myButtonClick = function () {
      alert('Button clicked!');
    }
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
