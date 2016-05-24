angular.module('quoteBook')
    .controller('mainCtrl', function($scope, quoteData) {
    
    $scope.getQuoteArray = function () {
        $scope.quotes = quoteData.getData();
    }
   
    $scope.getQuoteArray();
    
    $scope.getAdd = function() {
            var obj = {
                text: $scope.quoteToBe,
                author: $scope.authorToBe
            };
            quoteData.addData(obj);
    }
    
    $scope.getRemove = function() {
        quoteData.removeData($scope.textToDelete);
    }
    
})