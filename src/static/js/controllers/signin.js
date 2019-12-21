'use strict';

/* Controllers */
// signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function ($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;
    $scope.login = function () {
        $scope.authError = null;
        // Try to login
        //$http.post('static/api/login', {email: $scope.user.email, password: $scope.user.password})
        //.then(function(response) {
        //  if ( !response.data.user ) {
        //    $scope.authError = '邮箱或密码错误，请重试';
        //  }else{
        //    $state.go('app.dashboard-v1');
        //  }
        //}, function(x) {
        //  $scope.authError = '服务器错误';
        //});

        $state.go('app.dashboard-v1');
    };
}])
;
