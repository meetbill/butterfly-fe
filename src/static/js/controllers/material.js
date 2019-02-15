app.controller('MDAutocompleteCtrl', function ($scope, $timeout, $q) {
    var self = this;

    // list of `state` value/display objects
    self.states = loadAll();
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.simulateQuery = false;
    self.isDisabled = false;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch(query) {
        var results = query ? self.states.filter(createFilterFor(query)) : [],
            deferred;
        if (self.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
        var allStates = '马东, 何炅, 蔡康永, 高晓松, 金星, 张泉灵, 罗振宇, 马薇薇, 颜如晶, 肖骁, 范湉湉, 胡渐彪, 邱晨, 姜思达, 黄执中, 陈铭, 陈咏开, 赵正平, 柳岩, 陈汉典, 贾玲, 袁姗姗, 柳翰雅, 沈玉琳, 陶晶莹, 花希, 艾力, 包江浩, 王梅, 刘思达, 周玄毅, 魏铭, 刘烜赫, 章扬, 姜涛, 刘媛媛, 柏邦妮, 李林';

        return allStates.split(/, +/g).map(function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };

    }
});


app.controller('MDBottomSheetCtrl', function ($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';

    $scope.showListBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-list-template.html',
            controller: 'ListBottomSheetCtrl',
            targetEvent: $event
        }).then(function (clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };

    $scope.showGridBottomSheet = function ($event) {
        $scope.alert = '';
        $mdBottomSheet.show({
            templateUrl: 'bottom-sheet-grid-template.html',
            controller: 'GridBottomSheetCtrl',
            targetEvent: $event
        }).then(function (clickedItem) {
            $scope.alert = clickedItem.name + ' clicked!';
        });
    };
});

app.controller('MDListBottomSheetCtrl', function ($scope, $mdBottomSheet) {

    $scope.items = [
      { name: 'Share', icon: 'share' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' },
    ];

    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
});

app.controller('MDGridBottomSheetCtrl', function ($scope, $mdBottomSheet) {

    $scope.items = [
      { name: 'Hangout', icon: 'hangout' },
      { name: 'Mail', icon: 'mail' },
      { name: 'Message', icon: 'message' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Facebook', icon: 'facebook' },
      { name: 'Twitter', icon: 'twitter' },
    ];

    $scope.listItemClick = function ($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
});

app.controller('MDCheckboxCtrl', function ($scope) {

    $scope.data = {};
    $scope.data.cb1 = true;
    $scope.data.cb2 = '不正经';
    $scope.data.cb3 = false;
    $scope.data.cb4 = false;
    $scope.data.cb5 = false;

});

app.controller('MDRadioCtrl', function ($scope) {

    $scope.data = {
        group1: 'Banana',
        group2: '2',
        group3: 'avatar-1'
    };

    $scope.avatarData = [{
        id: "svg-1",
        title: 'avatar 1',
        value: 'avatar-1'
    }, {
        id: "svg-2",
        title: 'avatar 2',
        value: 'avatar-2'
    }, {
        id: "svg-3",
        title: 'avatar 3',
        value: 'avatar-3'
    }];

    $scope.radioData = [
      { label: '唐三藏', value: '御弟小哥哥' },
      { label: '孙悟空', value: '至尊宝小哥哥' },
      { label: '猪八戒', value: '朱逢春小哥哥' },
      { label: '沙悟净', value: '卷帘大将', isDisabled: true }
    ];


    $scope.submit = function () {
        alert('submit');
    };

    $scope.addItem = function () {
        var r = Math.ceil(Math.random() * 1000);
        $scope.radioData.push({ label: r, value: r });
    };

    $scope.removeItem = function () {
        $scope.radioData.pop();
    };

});

app.controller('MDSwitchCtrl', function ($scope) {
    $scope.data = {
        cb1: true,
        cb2: "不正经",
        cb4: true
    };

    $scope.onChange = function (cbState) {
        $scope.message = "关开的状态为: " + cbState;
    };
});

app.controller('MDDialogCtrl', function ($scope, $mdDialog) {
    $scope.alert = '';

    $scope.showAlert = function (ev) {
        $mdDialog.show(
          $mdDialog.alert()
            .title('这是一个消息对话框')
            .content('您可以在这里指定一些描述文本。')
            .ariaLabel('Password notification')
            .ok('关闭')
            .targetEvent(ev)
        );
    };

    $scope.showConfirm = function (ev) {
        var confirm = $mdDialog.confirm()
          .title('请问你幸福吗？')
          .content('记者：大爷，您在收瓶子是吧，打扰一下，我想请问一下，您幸福吗？')
          .ariaLabel('Lucky day')
          .ok('我收瓶子真的很幸福！')
          .cancel('我不姓福，我姓曾。')
          .targetEvent(ev);

        $mdDialog.show(confirm).then(function () {
            $scope.alert = '幸福到有一句MMP不知道当讲不当讲！';
        }, function () {
            $scope.alert = '我耳背，但我真的姓曾，讲假话是不可能讲的。';
        });
    };

    $scope.showAdvanced = function (ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'tpl/material/dialog.tmpl.html',
            targetEvent: ev,
        })
        .then(function (answer) {
            if (answer == "左边") {
                $scope.alert = '你回答了 "' + answer + '"，恭喜你回答正确。';
            } else {
                $scope.alert = '你回答了 "' + answer + '"，很遗憾回答错误。';
            }
        }, function () {
            $scope.alert = '你取消了对话框';
        });
    };
});

function DialogController($scope, $mdDialog) {
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
};

app.controller('MDSliderCtrl', function ($scope) {

    $scope.color = {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
    };

    $scope.rating1 = 3;
    $scope.rating2 = 2;
    $scope.rating3 = 4;

    $scope.disabled1 = 0;
    $scope.disabled2 = 70;

});



app.controller('MDSelectCtrl', function ($timeout, $scope) {

    $scope.userState = '';
    $scope.states = ('中国 美国 俄罗斯 日本 韩国 朝鲜 印度 巴基斯坦 新加坡 马来西亚 泰国 英国 德国 法国 加拿大 ' +
        '巴西 古巴 埃及 芬兰 希腊 葡萄牙 西班牙 越南 荷兰 澳大利亚 智利 阿根廷 丹麦 挪威 新西兰 蒙古国' +
        '哈萨克斯坦').split(' ').map(function (state) { return { abbrev: state }; });

    $scope.neighborhoods = ['艾泽拉斯-暴风城', '羊村', '长沙', '马尔代夫', '火之国-木叶村'];

    $scope.toppings = [
      { category: '肉', name: '辣香肠' },
      { category: '肉', name: '腊肠' },
      { category: '肉', name: '细牛肉' },
      { category: '肉', name: '培根' },
      { category: '蔬菜', name: '蘑菇' },
      { category: '蔬菜', name: '洋葱' },
      { category: '蔬菜', name: '青椒' },
      { category: '蔬菜', name: '绿橄榄' },
    ];

    $scope.loadUsers = function () {
        // Use timeout to simulate a 650ms request.
        $scope.users = [];
        return $timeout(function () {
            $scope.users = [
              { id: 1, name: '周瑜' },
              { id: 2, name: '鲁肃' },
              { id: 3, name: '吕蒙' },
              { id: 4, name: '陆逊' },
              { id: 5, name: '黄盖' },
            ];
        }, 650);
    };
});

app.controller('MDInputCtrl', function ($scope) {
    $scope.user = {
        title: '黄执中',
        email: 'huang@163.com',
        firstName: '',
        lastName: '',
        company: '奇葩说',
        address: '中华人民共和国台湾省台北市',
        city: '台北市',
        state: '中国',
        biography: '黄执中是历史上唯一连续两届拿下国际华语辩论最高赛事“国际大专辩论赛”的最佳辩手，也是唯一未晋级决赛，却可以拿到“国际大专辩论赛”最佳辩手的传奇人物；是辩论学派“新剑宗”的创始人，也是亚洲有系统性的建构辩论学理的第一人。2016年拿下《奇葩说》第三季奇葩之王。',
        postalCode: '123456'
    };
    $scope.project = {
        description: '一个喜欢搞事不正经的老师，哦对了，这个UI框架就是他翻译的',
        clientName: 'meetbill',
        rate: 500
    };
});

app.controller('MDProgressCtrl', ['$scope', '$interval', function ($scope, $interval) {
    $scope.mode = 'query';
    $scope.determinateValue = 30;
    $scope.determinateValue2 = 30;

    $interval(function () {
        $scope.determinateValue += 1;
        $scope.determinateValue2 += 1.5;
        if ($scope.determinateValue > 100) {
            $scope.determinateValue = 30;
            $scope.determinateValue2 = 30;
        }
    }, 100, 0, true);

    $interval(function () {
        $scope.mode = ($scope.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);
}]);

app.controller('MDSidenavCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = function () {
        $mdSidenav('left').toggle()
                          .then(function () {
                              $log.debug("toggle left is done");
                          });
    };
    $scope.toggleRight = function () {
        $mdSidenav('right').toggle()
                            .then(function () {
                                $log.debug("toggle RIGHT is done");
                            });
    };
    $scope.closeLeft = function () {
        $mdSidenav('left').close()
                          .then(function () {
                              $log.debug("close LEFT is done");
                          });

    };
    $scope.closeRight = function () {
        $mdSidenav('right').close()
                            .then(function () {
                                $log.debug("close RIGHT is done");
                            });
    };
});

app.controller('MDSubheaderCtrl', function ($scope) {
    $scope.messages = [
      {
          face: 'static/img/a0.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a1.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a2.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a3.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a4.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a5.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a6.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a7.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a8.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a9.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
      {
          face: 'static/img/a0.jpg',
          what: '我们的目标：向钱看，向厚赚。 ',
          who: '钱小样',
          when: '3:08PM',
          notes: "挤公交是包含散打、瑜珈、柔道、平衡木等多种体育和健身项目于一体的综合性运动。 "
      },
    ];
});

app.controller('MDTabCtrl', function ($scope) {

    $scope.data = {
        selectedIndex: 0,
        secondLocked: true,
        secondLabel: "第二项"
    };

    $scope.next = function () {
        $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
    };

    $scope.previous = function () {
        $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };

    var tabs = [
      { title: '幺', content: "当没有的空间显示所有选项卡标签时，会出现左右箭头滚动显示选项卡标签。" },
      { title: '两', content: "你可以在手机上使用手指左右滑动来改变当前选项页。" },
      { title: '三', content: "您可以通过 <md-tabs> 标签上 md-selected 属性来设置当前选项页下标。" },
      { title: '四', content: "如果你将当前选项页下标设置为 -1，将不会选中任何选项页。(译者注：实测好像并不是这样)" },
      { title: '五', content: "如果你移除一页，它将尝试选择一个新的选项页。" },
      { title: '六', content: "当你点击一个选项卡标签时，会有一个水墨效果。当然，你也可以关闭此效果。" },
      { title: '拐', content: "如果你对一个选项页设置 ng-disabled 则此页将不能被选择，如果当前选项页被禁用则会尝试选择下一页。" },
      { title: '八', content: "官方英文原版的这一页只是一个段子，我猜大家 get 不到他的点，所以就不翻译了，免得冷场!" },
      { title: '勾', content: "如果在 <md-tabs> 上设置 md-theme=\"green\" ，你将得到一个宝强色的选项卡。" },
      { title: '洞', content: "如果你还在读这篇文章，你应该去看看选项卡的API文档！" }
    ];

    $scope.tabs = tabs;
    $scope.selectedIndex = -1;

    $scope.addTab = function (title, view) {
        view = view || title + " 的内容页";
        tabs.push({ title: title, content: view, disabled: false });
    };

    $scope.removeTab = function (tab) {
        for (var j = 0; j < tabs.length; j++) {
            if (tab.title == tabs[j].title) {
                $scope.tabs.splice(j, 1);
                break;
            }
        }
    };

});

app.controller('MDToastCtrl', function ($scope, $mdToast, $animate) {

    $scope.toastPositionText = {
        bottom: "下",
        top: "上",
        left: "左",
        right: "右"
    };
    $scope.toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    $scope.getToastPosition = function () {
        return Object.keys($scope.toastPosition)
          .filter(function (pos) { return $scope.toastPosition[pos]; })
          .join(' ');
    };
    $scope.getToastPositionText = function () {
        return Object.keys($scope.toastPosition)
          .map(function (key, index) {
              return $scope.toastPosition[key] ? $scope.toastPositionText[key] : null;
          }).join(' ');
    };


    $scope.showSimpleToast = function () {
        $mdToast.show(
          $mdToast.simple()
            .content('简单的消息！')
            .position($scope.getToastPosition())
            .hideDelay(3000)
        );
    };

    $scope.showActionToast = function () {
        var toast = $mdToast.simple()
              .content('带操作的消息！')
              .action('确定')
              .highlightAction(false)
              .position($scope.getToastPosition());

        $mdToast.show(toast).then(function () {
            alert('你点击了 \'确定\'.');
        });
    };


    $scope.showCustomToast = function () {
        $mdToast.show({
            controller: 'ToastCtrl',
            templateUrl: 'tpl/material/toast.tmpl.html',
            hideDelay: 6000,
            parent: '#toast',
            position: $scope.getToastPosition()
        });
    };

})

app.controller('ToastCtrl', function ($scope, $mdToast) {
    $scope.closeToast = function () {
        $mdToast.hide();
    };
});

app.controller('MDTooltipCtrl', function ($scope) {
    $scope.demo = {};
});
