function sendAjax() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.sendgrid.com/v3/mail/send",
    "method": "POST",
    "headers": {
      "authorization": "Bearer YOUR_APY_KEY",
      "content-type": "application/json"
    },
    "processData": false,
    "data": "{\"personalizations\": [{\"to\":[{\"email\":\"valentin.blo@gmail.com\",\"name\":\"Valentin\"}],\"subject\":\"Hello, World!\"}],\"from\":{\"email\":\"valentin.blo@gmail.com\",\"name\":\"Valentin2\"},\"reply_to\":{\"email\":\"valentin.blo@gmail.com\",\"name\":\"Valentin3\"},\"content\":[{\"type\":\"text/plain\",\"value\":\"hello\"}]}"
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

var app = angular.module("myApp", []);
app.controller("myController", function ($scope, $http) {
    $scope.sendAngular = function () {
        var data = {
        "personalizations": [ {
            "to": [ {
                "email": "valentin.blo@gmail.com",
                "name": "Valentin"
            } ],
            "subject": "Hello, World!"
        } ],
        "from": {
          "email": "valentin.blo@gmail.com",
          "name": "Valentin2"
        },
        "content": [ {
          "type": "text/plain",
          "value": "email text"
        } ] };

        var config = {
            headers : {
              "authorization": "Bearer YOUR_APY_KEY",
              'Content-Type': "application/json;odata=verbose"
            }
        }

        $http.post('https://api.sendgrid.com/v3/mail/send', data, config).then(
          function success(data, status, headers, config) {
            $scope.PostDataResponse = "send success";
          },
          function error(data, status, header, config) {
            $scope.PostDataResponse = "send error";
            $scope.ResponseDetails = "Data: " + data +
                "<hr />status: " + status +
                "<hr />headers: " + header +
                "<hr />config: " + config;
          });
    };

});
