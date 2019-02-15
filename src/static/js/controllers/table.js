
//Smart Table 示例

app.controller('TableCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    //=================================================================================
    // 1.基础演示 
    //=================================================================================

    //基础演示
    $scope.rowCollectionBasic = [
      { firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com' },
      { firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com' },
      { firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com' }
    ];

    //=================================================================================
    // 2.随机数据 & 添加 & 删除 & 排序 演示
    //=================================================================================

    //排序字段
    $scope.predicates = [
        { "text": "姓氏", "value": "firstName" },
        { "text": "名字", "value": "lastName" },
        { "text": "生日", "value": "birthDate" },
        { "text": "存款", "value": "balance" },
        { "text": "邮箱", "value": "email" },
    ];

    //添加随机数据 - 数据仓库
    var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
    var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
    var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
    
    //产生随机数据
    function generateRandomItem(id) {
        var firstname = firstnames[Math.floor(Math.random() * 3)];
        var lastname = lastnames[Math.floor(Math.random() * 3)];
        var birthdate = dates[Math.floor(Math.random() * 3)];
        var balance = Math.floor(Math.random() * 2000);
        return {
            id: id,
            firstName: firstname,
            lastName: lastname,
            birthDate: new Date(birthdate),
            balance: balance
        }
    }

    //产生5条初始随机数据
    $scope.rowCollection = [];
    var id = 1;
    for (id; id < 5; id++) {
        $scope.rowCollection.push(generateRandomItem(id));
    }

    //克隆数据 (数据被克隆出来之后，对数据进行增删改排序过滤等操作都不会影响原数据) (你也可以使用 angular.copy ，不过貌似效率没 [].concat 高)
    $scope.displayedCollection = [].concat($scope.rowCollection);

    //添加随机数据
    $scope.addRandomItem = function addRandomItem() {
        $scope.rowCollection.push(generateRandomItem(id));
        id++;
    };

    //删除数据
    $scope.removeItem = function (row) {
        var index = $scope.rowCollection.indexOf(row);
        if (index !== -1) {
            $scope.rowCollection.splice(index, 1);
        }
    }

    //=================================================================================
    // 3.格式化数据 & 单元格模板
    //=================================================================================

    //删除数据 -- 这删除的不是克隆的数据，而是原数据，注意观察
    $scope.removeRow = function (row) {
        var index = $scope.rowCollectionBasic.indexOf(row);
        if (index !== -1) {
            $scope.rowCollectionBasic.splice(index, 1);
        }
    };

    //=================================================================================
    // 4.搜索/过滤数据
    //=================================================================================

    //下拉框的初始选择项
    $scope.selectedPredicate = $scope.predicates[0];

    //=================================================================================
    // 5.客户端分页
    //=================================================================================

    //页大小
    $scope.itemsByPage = 10;

    //产生分页示例原始数据
    $scope.rowCollectionPage = [];
    for (var j = 0; j < 200; j++) {
        $scope.rowCollectionPage.push(generateRandomItem(j));
    }

    //=================================================================================
    // 6.数据管道/Ajax请求数据
    //=================================================================================

    //模拟ajax请求数据
    var promise = null;
    $scope.isLoading = false;
    $scope.rowCollectionPip = [];
    $scope.getPage = function () {
        $scope.rowCollectionPip = [];
        for (var j = 0; j < 10; j++) {
            $scope.rowCollectionPip.push(generateRandomItem(j));
        }
    }

    //数据管道 (你可以在此管道里做ajax请求)
    $scope.callServer = function getData(tableState) {

        //你可以在这里编写ajax请求的代码 ...

        $scope.isLoading = true;

        $timeout(function () {
            $scope.getPage();
            $scope.isLoading = false;
        }, 2000);
    };

    //初次数据请求
    $scope.getPage();

}]);