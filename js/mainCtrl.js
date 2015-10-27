var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService){
    
    
    
    $scope.quotes = dataService.getData();
    $scope.addQ = dataService.addData;
    $scope.removeQ = dataService.removeData;
    $scope.test = "test";
    
    
});