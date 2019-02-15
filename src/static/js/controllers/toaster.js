app.controller('ToasterDemoCtrl', ['$scope', 'toaster', function($scope, toaster) {
    $scope.toaster = {
        type: 'success',
        title: '这是标题',
        text: '这是消息内容'
    };
    $scope.pop = function(){
        toaster.pop($scope.toaster.type, $scope.toaster.title, $scope.toaster.text);
    };
}]);