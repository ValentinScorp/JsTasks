var app = angular.module("myApp", []);
app.controller("myController", function ($scope, $http) {
  $scope.table = [];

  var config = {
      headers : {
        'X-Appery-Database-Id': '58226eeee4b0a696f3532f3d',
        'Content-Type': "application/json;odata=verbose"
      }
  }

  $http.get('https://api.appery.io/rest/1/db/collections/testCollection', config).then(
    function success(data, status, headers, config) {
      $scope.PostDataResponse = "send success";
      $scope.PostDataResponse = data.data;

      for (var i = 0; i < data.data.length; i++) {
        $scope.table.push({
          'name': data.data[i].name,
          'title': data.data[i].title,
          'number': data.data[i].number,
          'flag': data.data[i].flag, });
      }
    },
    function error(data, status, header, config) {
      alert("get error");
    }
  );

});
