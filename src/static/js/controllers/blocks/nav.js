'use strict';

app.controller('navController', ['$scope', function($scope) {
    $scope.menus = [
        {
            "description":"仪表盘",
            "sort": 2,
            //柱状图小图标
            "glyphicon": "glyphicon-stats icon text-primary-dker",
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
            "children":[
                {
                    "sref":"app.page.profile",
                    "description":"个人主页"
                },
                {
                    "sref":"app.page.search",
                    "description":"搜索页"
                },
                {
                    "sref":"app.docs",
                    "description":"Angulr 文档"
                },
            ]
        },
    ];
}]);
