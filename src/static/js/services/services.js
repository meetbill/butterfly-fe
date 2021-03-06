angular.module('appservices', ['toaster']).factory('Request', ['$http', '$rootScope', '$location', '$timeout', 'toaster',
function ($http, $scope, $location, $timeout, toaster) {

    //---------------提示信息---------------
    $scope.toaster = {
        type: 'success',
        title: 'Title',
        text: 'Message'
    };

    $scope.pop = function (type, title, text) {
        toaster.pop(type, '', text);
    };
    //---------------提示信息---------------end
    var Request = {};

    var successFuncBinder = function (callback, quiet) {
        return function(data) {
            $scope.processing = false;
            // 如果返回 response 中含有 stat 属性, 则 stat 为非 "OK" 时，则 stat 内容为异常信息
            if (!quiet && data.hasOwnProperty('stat')) {
                if (data.stat === 'OK') {
                    $scope.pop('success', '', data.stat);
                } else {
                    $scope.pop('error', '', data.stat);
                }
            }

            // 如果返回 response 中含有 code 属性, 则 code 为非 0 时，则 message 内容为异常信息
            if (!quiet && data.hasOwnProperty('code')) {
                if (data.code === 0) {
                    $scope.pop('success', '', data.message);
                } else {
                    $scope.pop('error', '', data.message);
                }
            }

            if (callback) callback.call(null, data);
        };
    };

    var errorFuncBinder = function (callback, quiet) {
        return function(data, status) {
            $scope.processing = false;
            if (!quiet && callback) {
                if (!callback.call(null, data, status)) return;
            }

            if (status === 401) {
                $scope.pop('wait', '', '正尝试自动登录');
            } else {
                if (data.hasOwnProperty('stat')) {
                    $scope.pop('error', '', data.stat);
                }
                else if (data.hasOwnProperty('message'))
                {
                    $scope.pop('error', '', data.message);
                }
                else
                {
                    $scope.pop('error', '', '发生未知错误！');
                }
            }
        };
    };

    Request.setProcessing = function (processing) {
        $scope.processing = processing;
    };

    Request.get = function (url, callback, errcallback, quiet) {
        $scope.processing = true;
        var rurl = url;
        //if (rurl.indexOf('?') > 0)
        //    rurl += '&' + Math.random();
        //else
        //    rurl += '?' + Math.random();
        $http.get(rurl).success(successFuncBinder(callback, quiet)).error(errorFuncBinder(errcallback, quiet));
    };

    Request.post = function (url, data, callback, errcallback, quiet) {
        $scope.processing = true;
        $http.post(url, data).success(successFuncBinder(callback, quiet)).error(errorFuncBinder(errcallback, quiet));
    };

    Request.put = function (url, data, callback, errcallback, quiet) {
        $scope.processing = true;
        $http.put(url, data).success(successFuncBinder(callback, quiet)).error(errorFuncBinder(errcallback, quiet));
    };

    Request.msg = function (type, text) {
        $scope.pop(type, '', text);
    };
    return Request;
}])
