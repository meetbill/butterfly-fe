'use strict';

app.controller('navController', ['$scope', function($scope) {
    $scope.menus = [
        {
            "description":"仪表盘",
            "sort": 2,
            //柱状图小图标
            "glyphicon": "glyphicon-stats icon text-primary-dker",
            "is_have_second": true,
            "children":[
                {
                    "sref":"app.dashboard-v1",
                    "description":"主页展示"
                },
                {
                    "sref":"app.dashboard-v2",
                    "description":"主页展示2"
                },
                {
                    "sref":"app.chart",
                    "description":"chart"
                },
            ]
        },
        {
            "description":"常用页面",
            "sort": 1,
            "glyphicon": "glyphicon-cloud",
            "is_have_second": true,
            "children":[
                {
                    "sref":"app.page.profile",
                    "description":"个人主页"
                },
                {
                    "sref":"app.page.search",
                    "description":"搜索页"
                },
            ]
        },
        {
            "description":"使用文档",
            "sort": 1,
            "glyphicon": "glyphicon-cloud",
            "is_have_second": false,
            "sref": "app.docs",
            "children":[]
        },
    ];
}]);
