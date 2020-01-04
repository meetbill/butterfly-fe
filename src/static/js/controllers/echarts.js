'use strict';

/* Controllers */

app.controller('EchartsDemoCtrl', ['$scope', function($scope) {
    // line-chart
    // ------------------------------------------------line-chart
    var pageload = {
        name: 'page.load',
        datapoints: [
            { x: 2001, y: 1012 },
            { x: 2002, y: 1023 },
            { x: 2003, y: 1045 },
            { x: 2004, y: 1062 },
            { x: 2005, y: 1032 },
            { x: 2006, y: 1040 },
            { x: 2007, y: 1023 },
            { x: 2008, y: 1090 },
            { x: 2009, y: 1012 },
            { x: 2010, y: 1012 },
        ]
    };

    var firstPaint = {
        name: 'page.firstPaint',
        datapoints: [
            { x: 2001, y: 22 },
            { x: 2002, y: 13 },
            { x: 2003, y: 35 },
            { x: 2004, y: 52 },
            { x: 2005, y: 32 },
            { x: 2006, y: 40 },
            { x: 2007, y: 63 },
            { x: 2008, y: 80 },
            { x: 2009, y: 20 },
            { x: 2010, y: 25 },
        ]
    };

    $scope.config = {
        title: 'Line Chart',
        subtitle: 'Line Chart Subtitle',
        debug: true,
        showXAxis: true,
        showYAxis: true,
        showLegend: true,
        stack: false,
    };

    $scope.data = [ pageload ];
    $scope.multiple = [pageload, firstPaint ];
    // ------------------------------------------------bar-chart
    var bar_data = {
        name: "bar data",
        datapoints: [
            { x: "衬衫",    y: 5  },
            { x: "羊毛衫",  y: 20 },
            { x: "雪纺衫",  y: 36 },
            { x: "裤子",    y: 10 },
            { x: "高跟鞋",  y: 10 },
            { x: "袜子",    y: 20 },
        ]
    };
    $scope.bar = [ bar_data ];
    // ------------------------------------------------gauge-chart 仪表盘
    var gauge_data = {
        name: "xx",
        datapoints: [
            { x: "可用性",    y: 99.93 },
        ]
    };
    $scope.gauge = [ gauge_data ];



}]);
