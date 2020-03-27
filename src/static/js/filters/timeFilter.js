'use strict';

/* Filters */
// 用于将时间格式化为： 3年前、5分钟前、刚刚 这样的文字
// need load the moment.js to use this filter.
angular.module('app')
.filter('fromNow', function () {
    moment.locale("zh-cn");
    return function(date) {
        return moment(date).fromNow();
    };
})
.filter('secondsToTimeString', function() {
    return function(cur_seconds) {
        var oneSecond = 1;
        var oneMinute = oneSecond * 60;
        var oneHour = oneMinute * 60;
        var oneDay = oneHour * 24;

        var seconds = Math.floor((cur_seconds % oneMinute) / oneSecond);
        var minutes = Math.floor((cur_seconds % oneHour) / oneMinute);
        var hours = Math.floor((cur_seconds % oneDay) / oneHour);
        var days = Math.floor(cur_seconds / oneDay);

        var timeString = '';
        if (days !== 0) {
            timeString += days + '天';
        }
        if (hours !== 0) {
            timeString += hours + '时';
        }
        if (minutes !== 0) {
            timeString += minutes + '分';
        }
        if (seconds !== 0) {
            timeString += seconds + '秒';
        }

        return timeString;
    };
});
