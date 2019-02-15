'use strict';

/* Filters */
// 用于将时间格式化为： 3年前、5分钟前、刚刚 这样的文字
// need load the moment.js to use this filter.  
angular.module('app')
  .filter('fromNow', function () {
      moment.locale("zh-cn");
    return function(date) {
      return moment(date).fromNow();
    }
  });