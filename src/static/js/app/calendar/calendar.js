/**
 * calendarDemoApp - 0.1.3
 */

app.controller('FullcalendarCtrl', ['$scope', '$filter', function ($scope, $filter) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    /* event source that pulls from google.com */
    $scope.eventSource = {
            url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
            className: 'gcal-event',           // an option!
            currentTimezone: 'America/Chicago' // an option!
    };

    /* event source that contains custom events on the scope */
    $scope.events = [
      {title:'全天事件', start: new Date(y, m, 1), className: ['b-l b-2x b-info'], location:'纽约', info:'这一天的活动都将从上午9:00至下午9:00，有乐趣！'},
      {title:'舞蹈班', start: new Date(y, m, 3), end: new Date(y, m, 4, 9, 30), allDay: false, className: ['b-l b-2x b-danger'], location:'伦敦', info:'两天舞蹈训练班。'},
      {title:'比赛', start: new Date(y, m, 6, 16, 0), className: ['b-l b-2x b-info'], location:'香港', info:'今年最重要的一场赛车。'},
      {title:'足球', start: new Date(y, m, 8, 15, 0), className: ['b-l b-2x b-info'], location:'里约', info:'别忘了看。'},
      {title:'家庭', start: new Date(y, m, 9, 19, 30), end: new Date(y, m, 9, 20, 30), className: ['b-l b-2x b-success'], info:'家庭聚会'},
      {title:'较长的事件', start: new Date(y, m, d - 5), end: new Date(y, m, d - 2), className: ['bg-success bg'], location:'高清市', info:'这是一个很长很长的事件'},
      {title:'玩游戏', start: new Date(y, m, d - 1, 16, 0), className: ['b-l b-2x b-info'], location:'东京', info:'东京游戏展'},
      {title:'生日聚会', start: new Date(y, m, d + 1, 19, 0), end: new Date(y, m, d + 1, 22, 30), allDay: false, className: ['b-l b-2x b-primary'], location:'纽约', info:'全天嗨'},
      {title:'重复事件', start: new Date(y, m, d + 4, 16, 0), alDay: false, className: ['b-l b-2x b-warning'], location:'家里蹲', info:'每天都重复'},      
      {title:'上个网', start: new Date(y, m, 28), end: new Date(y, m, 29), url: 'http://www.baidu.com/', className: ['b-l b-2x b-primary']},
      {title:'喂猫', start: new Date(y, m+1, 6, 18, 0), className: ['b-l b-2x b-info']}
    ];

    /* alert on dayClick */
    $scope.precision = 400;
    $scope.lastClickTime = 0;
    $scope.alertOnEventClick = function( date, jsEvent, view ){
      var time = new Date().getTime();
      if(time - $scope.lastClickTime <= $scope.precision){
          $scope.events.push({
            title: '新事件',
            start: date,
            className: ['b-l b-2x b-info']
          });
      }
      $scope.lastClickTime = time;
    };
    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view){
       $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };

    $scope.overlay = $('.fc-overlay');
    $scope.alertOnMouseOver = function( event, jsEvent, view ){
      $scope.event = event;
      $scope.overlay.removeClass('left right top').find('.arrow').removeClass('left right top pull-up');
      var wrap = $(jsEvent.target).closest('.fc-event');
      var cal = wrap.closest('.calendar');
      var left = wrap.offset().left - cal.offset().left;
      var right = cal.width() - (wrap.offset().left - cal.offset().left + wrap.width());
      var top = cal.height() - (wrap.offset().top - cal.offset().top + wrap.height());
      if( right > $scope.overlay.width() ) { 
        $scope.overlay.addClass('left').find('.arrow').addClass('left pull-up')
      }else if ( left > $scope.overlay.width() ) {
        $scope.overlay.addClass('right').find('.arrow').addClass('right pull-up');
      }else{
        $scope.overlay.find('.arrow').addClass('top');
      }
      if( top < $scope.overlay.height() ) { 
        $scope.overlay.addClass('top').find('.arrow').removeClass('pull-up').addClass('pull-down')
      }
      (wrap.find('.fc-overlay').length == 0) && wrap.append( $scope.overlay );
    }

    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        dayClick: $scope.alertOnEventClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventMouseover: $scope.alertOnMouseOver
      }
    };
    
    /* add custom event*/
    $scope.addEvent = function() {
      $scope.events.push({
        title: '新事件',
        start: new Date(y, m, d),
        className: ['b-l b-2x b-info']
      });
    };

    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };

    /* Change View */
    $scope.changeView = function(view, calendar) {
      $('.calendar').fullCalendar('changeView', view);
    };

    $scope.today = function(calendar) {
      $('.calendar').fullCalendar('today');
    };

    /* event sources array*/
    $scope.eventSources = [$scope.events];
}]);
/* EOF */
