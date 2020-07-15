//编辑引擎 & 编辑表格
app.controller('XeditableCtrl', ['$scope', '$filter', '$http', 'editableOptions', 'editableThemes',
function ($scope, $filter, $http, editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';

    $scope.html5 = {
        email: 'email@example.com',
        tel: '13012345678',
        number: 29,
        range: 10,
        url: 'http://example.com',
        search: 'blabla',
        color: '#6a4415',
        date: null,
        time: '12:30',
        datetime: null,
        month: null,
        week: null
    };

    $scope.user = {
        name: '尼古拉斯·赵四',
        desc: '令人窒息的\n神之操作！ !',
        status: 2,
        agenda: 1,
        remember: false
    };

    $scope.statuses = [{
        value: 1,
        text: '吃饭'
    },
    {
        value: 2,
        text: '睡觉'
    },
    {
        value: 3,
        text: '打代码'
    }];

    $scope.agenda = [{
        value: 1,
        text: '帅哥'
    },
    {
        value: 2,
        text: '美女'
    }];

    $scope.showStatus = function () {
        var selected = $filter('filter')($scope.statuses, {
            value: $scope.user.status
        });
        return ($scope.user.status && selected.length) ? selected[0].text: '没有可用的选择';
    };

    $scope.showAgenda = function () {
        var selected = $filter('filter')($scope.agenda, {
            value: $scope.user.agenda
        });
        return ($scope.user.agenda && selected.length) ? selected[0].text: '没有可用的选择';
    };

    // editable table
    $scope.users = [{
        id: 1,
        name: '张小三',
        status: 2,
        group: 4,
        groupName: '管理员'
    },
    {
        id: 2,
        name: '李四',
        status: undefined,
        group: 3,
        groupName: '高级会员'
    },
    {
        id: 3,
        name: '王老五',
        status: 2,
        group: null
    }];

    $scope.groups = [];
    $scope.loadGroups = function () {
        return $scope.groups.length ? null: $http.get('static/api/groups.json').success(function (data) {
            $scope.groups = data;
        });
    };

    $scope.showGroup = function (user) {
        if (user.group && $scope.groups.length) {
            var selected = $filter('filter')($scope.groups, {
                id: user.group
            });
            return selected.length ? selected[0].text: '空';
        } else {
            return user.groupName || '空';
        }
    };

    $scope.showStatus = function (user) {
        var selected = [];
        if (user && user.status) {
            selected = $filter('filter')($scope.statuses, {
                value: user.status
            });
        }
        return selected.length ? selected[0].text: '空';
    };

    $scope.checkName = function (data, id) {
        if (id === 2 && data !== '李四') {
            return "第2个人必须是 `李四`";
        }
    };

    $scope.saveUser = function (data, id) {
        //$scope.user not updated yet
        angular.extend(data, {
            id: id
        });
        // return $http.post('static/api/saveUser', data);
    };

    // remove user
    $scope.removeUser = function (index) {
        $scope.users.splice(index, 1);
    };

    // add user
    $scope.addUser = function () {
        $scope.inserted = {
            id: $scope.users.length + 1,
            name: '',
            status: null,
            group: null
        };
        $scope.users.push($scope.inserted);
    };

}]);
