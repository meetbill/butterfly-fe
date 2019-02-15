'use strict';

/* Controllers */

// bootstrap controller

//手风琴指令演示代码
app.controller('AccordionDemoCtrl', ['$scope', function ($scope) {
    $scope.oneAtATime = true;

    $scope.groups = [
      {
          title: '手风琴动态数据 - #1',
          content: '这个数据由js提供 - #1'
      },
      {
          title: '手风琴动态数据 - #2',
          content: '这个数据由js提供 - #2'
      }
    ];

    $scope.items = ['数据 1', '数据 2', '数据 3'];

    $scope.addItem = function () {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('数据 ' + newItemNo);
    };

    $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
    };
}])
;

//消息指令演示代码
app.controller('AlertDemoCtrl', ['$scope', function ($scope) {
    $scope.alerts = [
      { type: 'success', msg: '做得好!你成功地读这重要的警告信息。 ' },
      { type: 'info', msg: '哥们！这提醒需要你的关注，但它不是特别重要的。 ' },
      { type: 'warning', msg: '警告！最好的去检查一下哟，你的脸色看起来不太好… ' }
    ];

    $scope.addAlert = function () {
        $scope.alerts.push({ type: 'danger', msg: '天啦噜! 夭寿啦! 上厕所忘记带纸啦!' });
    };

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
}])
;

//单选和复选按钮演示代码
app.controller('ButtonsDemoCtrl', ['$scope', function ($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = '中';

    $scope.checkModel = {
        left: false,
        middle: true,
        right: false
    };
}])
;

//轮播指令演示代码
app.controller('CarouselDemoCtrl', ['$scope', function ($scope) {
    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function () {
        slides.push({
            image: 'static/img/c' + slides.length + '.jpg',
            text: ['我是小饼干 #0', '我是小熊熊 #1', '我是小美女 #2', '我是小草草 #3'][slides.length % 4]
        });
    };
    for (var i = 0; i < 4; i++) {
        $scope.addSlide();
    }
}])
;

//下拉框演示代码
app.controller('DropdownDemoCtrl', ['$scope', function ($scope) {
    $scope.items = [
      '吃饭饭',
      '碎叫叫',
      '小锤锤'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function (open) {
        console.log('下拉框状态: ', open);
    };

    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
}])
;

//模式对话框演示代码
app.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function ($scope, $modalInstance, items) {
    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}])
;
app.controller('ModalDemoCtrl', ['$scope', '$modal', '$log', function ($scope, $modal, $log) {
    $scope.items = ['项目1', '项目2', '项目3'];
    $scope.open = function (size) {
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
            $log.info('选择结果: ', selectedItem);
        }, function () {
            $log.info('模式对话框关闭时间: ' + new Date());
        });
    };
}])
;

//分页控件
app.controller('PaginationDemoCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function () {
        $log.info('当前页码: ' + $scope.currentPage);
    };

    $scope.maxSize = 5;
    $scope.bigTotalItems = 175;
    $scope.bigCurrentPage = 1;
}])
;

//针对提示
app.controller('PopoverDemoCtrl', ['$scope', function ($scope) {
    $scope.dynamicPopover = '你好，世界!';
    $scope.dynamicPopoverTitle = '提示';
}])
;

//进度条
app.controller('ProgressDemoCtrl', ['$scope', function ($scope) {
    $scope.max = 200;

    $scope.getTypeName = function (type) {
        return {
            "success" : "成功",
            "info" : "信息",
            "warning" : "警告",
            "danger" : "危险"
        }[type];
    };

    $scope.random = function () {
        var value = Math.floor((Math.random() * 100) + 1);
        var type;

        if (value < 25) {
            type = 'success';
        } else if (value < 50) {
            type = 'info';
        } else if (value < 75) {
            type = 'warning';
        } else {
            type = 'danger';
        }

        $scope.showWarning = (type === 'danger' || type === 'warning');

        $scope.dynamic = value;
        $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function () {
        $scope.stacked = [];
        var types = ['success', 'info', 'warning', 'danger'];

        for (var i = 0, n = Math.floor((Math.random() * 4) + 1) ; i < n; i++) {
            var index = Math.floor((Math.random() * 4));
            $scope.stacked.push({
                value: Math.floor((Math.random() * 30) + 1),
                type: types[index]
            });
        }
    };
    $scope.randomStacked();
}])
;

//选项卡
app.controller('TabsDemoCtrl', ['$scope', function ($scope) {
    $scope.tabs = [
      { title: '动态标题2', content: '动态内容2' },
      { title: '动态标题3', content: '动态内容3', disabled: true }
    ];
}])
;

//星级评分
app.controller('RatingDemoCtrl', ['$scope', function ($scope) {
    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

    $scope.hoveringOver = function (value) {
        $scope.overStar = value;
        $scope.percent = 100 * (value / $scope.max);
    };
}])
;

//工具提示
app.controller('TooltipDemoCtrl', ['$scope', function ($scope) {
    $scope.dynamicTooltip = '你好，世界!';
    $scope.dynamicTooltipText = '放上来';
    $scope.htmlTooltip = '加我 <i class="fa fa-qq"></i> 191458000，如果你不主动我们可能永远没有机会';
}])
;

//字模
app.controller('TypeaheadDemoCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.selected = undefined;
    $scope.states = ['阿娇', '阿sa', '阿里巴巴', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // 访问谷歌地图需要有网络，而且还要翻墙，比较麻烦。我就注释掉啦
    //$scope.getLocation = function (val) {
    //    return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
    //        params: {
    //            address: val,
    //            sensor: false
    //        }
    //    }).then(function (res) {
    //        var addresses = [];
    //        angular.forEach(res.data.results, function (item) {
    //            addresses.push(item.formatted_address);
    //        });
    //        console.log(addresses);
    //        return addresses;
    //    });
    //};

    // 访问本站数据
    $scope.getLocation = function (val) {
        return $http.get('static/api/typehead/' + val + '.json')
            .then(function (res) {
                return res.data;
            });
    };
}])
;

//日期标签
app.controller('DatepickerDemoCtrl', ['$scope', '$filter', function ($scope, $filter) {
    $scope.today = function () {
        $scope.dt = $filter('date')(new Date(), "yyyy-MM-dd");
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    // 禁止选择周末
    $scope.disabled = function (date, mode) {
        return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
    };

    $scope.toggleMin = function () {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        class: 'datepicker'
    };

    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[1];
}])
;
app.directive('formatDate', ['$filter', function ($filter) {
    return {
        require: 'ngModel',
        link: function (scope, elem, attr, ngModelCtrl) {
            ngModelCtrl.$formatters.push(function (modelValue) {
                if (modelValue) {
                    return $filter('date')(modelValue, 'yyyy-MM-dd');
                }
            });
            ngModelCtrl.$parsers.push(function (value) {
                if (value) {
                    return $filter('date')(value, 'yyyy-MM-dd');
                }
            });
        }
    };
}]);
;

//时间标签
app.controller('TimepickerDemoCtrl', ['$scope', function ($scope) {
    $scope.mytime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 15;

    $scope.options = {
        hstep: [1, 2, 3],
        mstep: [1, 5, 10, 15, 25, 30]
    };

    $scope.ismeridian = true;
    $scope.toggleMode = function () {
        $scope.ismeridian = !$scope.ismeridian;
    };

    $scope.update = function () {
        var d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        $scope.mytime = d;
    };

    $scope.changed = function () {
        //console.log('Time changed to: ' + $scope.mytime);
    };

    $scope.clear = function () {
        $scope.mytime = null;
    };
}]);
