var app = angular.module('myApp', []);

app.controller('myController', ['$scope','Ascii', function($scope, Ascii) {
   
$scope.char='S'
    $scope.ascii = Ascii.fun($scope.char);
}]);

app.service('Ascii', function() {
    this.fun = function(c) {
        return c.charCodeAt(0);
    }
})