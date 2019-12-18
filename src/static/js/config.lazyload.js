// lazyload config

angular.module('app')
    /**
   * jQuery plugin config use ui-jq directive , config the js and css files that required
   * key: function name of the jQuery plugin
   * value: array of the css js file located
   */
  .constant('JQ_CONFIG', {
      easyPieChart:   [   'static/vendor/jquery/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js'],
      sparkline:      [   'static/vendor/jquery/jquery.sparkline/dist/jquery.sparkline.retina.js'],
      plot:           [   'static/vendor/jquery/flot/jquery.flot.js',
                          'static/vendor/jquery/flot/jquery.flot.pie.js', 
                          'static/vendor/jquery/flot/jquery.flot.resize.js',
                          'static/vendor/jquery/flot.tooltip/js/jquery.flot.tooltip.min.js',
                          'static/vendor/jquery/flot.orderbars/js/jquery.flot.orderBars.js',
                          'static/vendor/jquery/flot-spline/js/jquery.flot.spline.min.js'],
      moment:         [   'static/vendor/jquery/moment/moment.js',
                          'static/vendor/jquery/moment/moment-with-locales.js',
                          'static/vendor/jquery/moment/moment-use-zhcn.js'],
      slimScroll:     [   'static/vendor/jquery/slimscroll/jquery.slimscroll.min.js'],
      sortable:       [   'static/vendor/jquery/html5sortable/jquery.sortable.js'],
      nestable:       [   'static/vendor/jquery/nestable/jquery.nestable.js',
                          'static/vendor/jquery/nestable/jquery.nestable.css'],
      filestyle:      [   'static/vendor/jquery/bootstrap-filestyle/src/bootstrap-filestyle.js'],
      slider:         [   'static/vendor/jquery/bootstrap-slider/bootstrap-slider.js',
                          'static/vendor/jquery/bootstrap-slider/bootstrap-slider.css'],
      chosen:         [   'static/vendor/jquery/chosen/chosen.jquery.min.js',
                          'static/vendor/jquery/chosen/bootstrap-chosen.css'],
      TouchSpin:      [   'static/vendor/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js',
                          'static/vendor/jquery/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css'],
      wysiwyg:        [   'static/vendor/jquery/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                          'static/vendor/jquery/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
      dataTable:      [   'static/vendor/jquery/datatables/media/js/jquery.dataTables.min.js',
                          'static/vendor/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.js',
                          'static/vendor/jquery/plugins/integration/bootstrap/3/dataTables.bootstrap.css'],
      vectorMap:      [   'static/vendor/jquery/bower-jvectormap/jquery-jvectormap-1.2.2.min.js', 
                          'static/vendor/jquery/bower-jvectormap/jquery-jvectormap-world-mill-en.js',
                          'static/vendor/jquery/bower-jvectormap/jquery-jvectormap-cn-mill-en.js',
                          'static/vendor/jquery/bower-jvectormap/jquery-jvectormap-us-aea-en.js',
                          'static/vendor/jquery/bower-jvectormap/jquery-jvectormap.css'],
      footable:       [   'static/vendor/jquery/footable/v3/js/footable.js',
                          'static/vendor/jquery/footable/v3/css/footable.bootstrap.min.css'],
      fullcalendar:   [   'static/vendor/jquery/moment/moment.js',
                          'static/vendor/jquery/fullcalendar/dist/fullcalendar.min.js',
                          'static/vendor/jquery/fullcalendar/dist/fullcalendar.css',
                          'static/vendor/jquery/fullcalendar/dist/fullcalendar.theme.css'],
      daterangepicker:[   'static/vendor/jquery/moment/moment.js',
                          'static/vendor/jquery/moment/moment-with-locales.js',
                          'static/vendor/jquery/bootstrap-daterangepicker/daterangepicker.js',
                          'static/vendor/jquery/bootstrap-daterangepicker/daterangepicker-bs3.css'],
      tagsinput:      [   'static/vendor/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
                          'static/vendor/jquery/bootstrap-tagsinput/dist/bootstrap-tagsinput.css']

    }
  )
  .constant('MODULE_CONFIG', [
      {
          name: 'ngGrid',
          files: [
              'static/vendor/angular/ng-grid/build/ng-grid.js',
              'static/vendor/angular/ng-grid/ng-grid.min.css',
              'static/vendor/angular/ng-grid/ng-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.grid',
          files: [
              'static/vendor/angular/angular-ui-grid/ui-grid.min.js',
              'static/vendor/angular/angular-ui-grid/ui-grid.min.css',
              'static/vendor/angular/angular-ui-grid/ui-grid.bootstrap.css'
          ]
      },
      {
          name: 'ui.grid.resizeColumns',
          files: [
              'static/vendor/angular/angular-ui-grid/ui-grid.min.js',
          ]
      },
      {
          name: 'ui.grid.pagination',
          files: [
              'static/vendor/angular/angular-ui-grid/ui-grid.min.js',
          ]
      },
      {
          name: 'ui.select',
          files: [
              'static/vendor/angular/angular-ui-select/dist/select.min.js',
              'static/vendor/angular/angular-ui-select/dist/select.min.css'
          ]
      },
      {
          name:'angularFileUpload',
          files: [
            'static/vendor/angular/angular-file-upload/angular-file-upload.js'
          ]
      },
      {
          name:'ui.calendar',
          files: ['static/vendor/angular/angular-ui-calendar/src/calendar.js']
      },
      {
          name: 'ngImgCrop',
          files: [
              'static/vendor/angular/ngImgCrop/compile/minified/ng-img-crop.js',
              'static/vendor/angular/ngImgCrop/compile/minified/ng-img-crop.css'
          ]
      },
      {
          name: 'angularBootstrapNavTree',
          files: [
              'static/vendor/angular/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
              'static/vendor/angular/angular-bootstrap-nav-tree/dist/abn_tree.css'
          ]
      },
      {
          name: 'toaster',
          files: [
              'static/vendor/angular/angularjs-toaster/toaster.js',
              'static/vendor/angular/angularjs-toaster/toaster.css'
          ]
      },
      {
          name: 'textAngular',
          files: [
              'static/vendor/angular/textAngular/dist/textAngular-sanitize.min.js',
              'static/vendor/angular/textAngular/dist/textAngular.min.js'
          ]
      },
      {
          name: 'vr.directives.slider',
          files: [
              'static/vendor/angular/venturocket-angular-slider/build/angular-slider.js',
              'static/vendor/angular/venturocket-angular-slider/build/angular-slider.css'
          ]
      },
      {
          name: 'com.2fdevs.videogular',
          files: [
              'static/vendor/angular/videogular/videogular.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.controls',
          files: [
              'static/vendor/angular/videogular-controls/controls.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.buffering',
          files: [
              'static/vendor/angular/videogular-buffering/buffering.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.overlayplay',
          files: [
              'static/vendor/angular/videogular-overlay-play/overlay-play.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.poster',
          files: [
              'static/vendor/angular/videogular-poster/poster.min.js'
          ]
      },
      {
          name: 'com.2fdevs.videogular.plugins.imaads',
          files: [
              'static/vendor/angular/videogular-ima-ads/ima-ads.min.js'
          ]
      },
      {
          name: 'xeditable',
          files: [
              'static/vendor/angular/angular-xeditable/dist/js/xeditable.min.js',
              'static/vendor/angular/angular-xeditable/dist/css/xeditable.css'
          ]
      },
      {
          name: 'smart-table',
          files: [
              'static/vendor/angular/angular-smart-table/dist/smart-table.min.js'
          ]
      },
      {
          name: 'angular-skycons',
          files: [
              'static/vendor/angular/angular-skycons/angular-skycons.js'
          ]
      }
    ]
  )
  // oclazyload config
  .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function($ocLazyLoadProvider, MODULE_CONFIG) {
      // We configure ocLazyLoad to use the lib script.js as the async loader
      $ocLazyLoadProvider.config({
          debug:  false,
          events: true,
          modules: MODULE_CONFIG
      });
  }])
;
