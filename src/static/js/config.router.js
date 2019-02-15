'use strict';

/**
 * Config for the router
 */
angular.module('app')
  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;        
      }
    ]
  )
  .config(
    [          '$stateProvider', '$urlRouterProvider', 'JQ_CONFIG', 'MODULE_CONFIG', 
      function ($stateProvider,   $urlRouterProvider, JQ_CONFIG, MODULE_CONFIG) {
          var layout = "static/tpl/app.html";
          if(window.location.href.indexOf("material") > 0){
            layout = "static/tpl/blocks/material.layout.html";
            $urlRouterProvider
              .otherwise('/app/dashboard-v3');
          }else{
            $urlRouterProvider
              .otherwise('/app/dashboard-v1');
          }
          
          $stateProvider
              .state('app', {
                  abstract: true,
                  url: '/app',
                  templateUrl: layout
              })
              .state('app.dashboard-v1', {
                  url: '/dashboard-v1',
                  templateUrl: 'static/tpl/app_dashboard_v1.html',
                  resolve: load(['static/js/controllers/chart.js'])
              })
              .state('app.dashboard-v2', {
                  url: '/dashboard-v2',
                  templateUrl: 'static/tpl/app_dashboard_v2.html',
                  resolve: load(['static/js/controllers/chart.js'])
              })
              .state('app.dashboard-v3', {
                  url: '/dashboard-v3',
                  templateUrl: 'static/tpl/app_dashboard_v3.html',
                  resolve: load(['static/js/controllers/chart.js'])
              })
              .state('app.ui', {
                  url: '/ui',
                  template: '<div ui-view class="fade-in-up"></div>'
              })
              .state('app.ui.buttons', {
                  url: '/buttons',
                  templateUrl: 'static/tpl/ui_buttons.html'
              })
              .state('app.ui.icons', {
                  url: '/icons',
                  templateUrl: 'static/tpl/ui_icons.html'
              })
              .state('app.ui.grid', {
                  url: '/grid',
                  templateUrl: 'static/tpl/ui_grid.html'
              })
              .state('app.ui.widgets', {
                  url: '/widgets',
                  templateUrl: 'static/tpl/ui_widgets.html'
              })          
              .state('app.ui.bootstrap', {
                  url: '/bootstrap',
                  templateUrl: 'static/tpl/ui_bootstrap.html'
              })
              .state('app.ui.sortable', {
                  url: '/sortable',
                  templateUrl: 'static/tpl/ui_sortable.html'
              })
              .state('app.ui.scroll', {
                  url: '/scroll',
                  templateUrl: 'static/tpl/ui_scroll.html',
                  resolve: load('static/js/controllers/scroll.js')
              })
              .state('app.ui.portlet', {
                  url: '/portlet',
                  templateUrl: 'static/tpl/ui_portlet.html'
              })
              .state('app.ui.timeline', {
                  url: '/timeline',
                  templateUrl: 'static/tpl/ui_timeline.html'
              })
              .state('app.ui.tree', {
                  url: '/tree',
                  templateUrl: 'static/tpl/ui_tree.html',
                  resolve: load(['angularBootstrapNavTree', 'static/js/controllers/tree.js'])
              })
              .state('app.ui.toaster', {
                  url: '/toaster',
                  templateUrl: 'static/tpl/ui_toaster.html',
                  resolve: load(['toaster', 'static/js/controllers/toaster.js'])
              })
              .state('app.ui.jvectormap', {
                  url: '/jvectormap',
                  templateUrl: 'static/tpl/ui_jvectormap.html',
                  resolve: load('static/js/controllers/vectormap.js')
              })
              .state('app.ui.googlemap', {
                  url: '/googlemap',
                  templateUrl: 'static/tpl/ui_googlemap.html',
                  resolve: load([
                      //'static/js/app/map/load-google-maps.js',
                      //'static/js/app/map/ui-map.js',
                      'static/js/app/map/map.js'
                  ], function () {
                          //return loadGoogleMaps();
                  })
              })
              .state('app.chart', {
                  url: '/chart',
                  templateUrl: 'static/tpl/ui_chart.html',
                  resolve: load('static/js/controllers/chart.js')
              })
              // table
              .state('app.table', {
                  url: '/table',
                  template: '<div ui-view></div>'
              })
              .state('app.table.static', {
                  url: '/static',
                  templateUrl: 'static/tpl/table_static.html'
              })
              .state('app.table.datatable', {
                  url: '/datatable',
                  templateUrl: 'static/tpl/table_datatable.html'
              })
              .state('app.table.footable', {
                  url: '/footable',
                  templateUrl: 'static/tpl/table_footable.html'
              })
              .state('app.table.grid', {
                  url: '/grid',
                  templateUrl: 'static/tpl/table_grid.html',
                  resolve: load(['ngGrid','static/js/controllers/grid.js'])
              })
              .state('app.table.uigrid', {
                  url: '/uigrid',
                  templateUrl: 'static/tpl/table_uigrid.html',
                  resolve: load(['ui.grid','static/js/controllers/uigrid.js'])
              })
              .state('app.table.editable', {
                  url: '/editable',
                  templateUrl: 'static/tpl/table_editable.html',
                  controller: 'XeditableCtrl',
                  resolve: load(['xeditable','static/js/controllers/xeditable.js'])
              })
              .state('app.table.smart', {
                  url: '/smart',
                  templateUrl: 'static/tpl/table_smart.html',
                  resolve: load(['smart-table','static/js/controllers/table.js'])
              })
              // form
              .state('app.form', {
                  url: '/form',
                  template: '<div ui-view class="fade-in"></div>',
                  resolve: load('static/js/controllers/form.js')
              })
              .state('app.form.components', {
                  url: '/components',
                  templateUrl: 'static/tpl/form_components.html',
                  resolve: load(['ngBootstrap','daterangepicker','static/js/controllers/form.components.js'])
              })
              .state('app.form.elements', {
                  url: '/elements',
                  templateUrl: 'static/tpl/form_elements.html'
              })
              .state('app.form.validation', {
                  url: '/validation',
                  templateUrl: 'static/tpl/form_validation.html'
              })
              .state('app.form.wizard', {
                  url: '/wizard',
                  templateUrl: 'static/tpl/form_wizard.html'
              })
              .state('app.form.fileupload', {
                  url: '/fileupload',
                  templateUrl: 'static/tpl/form_fileupload.html',
                  resolve: load(['angularFileUpload','static/js/controllers/file-upload.js'])
              })
              .state('app.form.imagecrop', {
                  url: '/imagecrop',
                  templateUrl: 'static/tpl/form_imagecrop.html',
                  resolve: load(['ngImgCrop','static/js/controllers/imgcrop.js'])
              })
              .state('app.form.select', {
                  url: '/select',
                  templateUrl: 'static/tpl/form_select.html',
                  controller: 'SelectCtrl',
                  resolve: load(['ui.select','static/js/controllers/select.js'])
              })
              .state('app.form.slider', {
                  url: '/slider',
                  templateUrl: 'static/tpl/form_slider.html',
                  controller: 'SliderCtrl',
                  resolve: load(['vr.directives.slider','static/js/controllers/slider.js'])
              })
              .state('app.form.editor', {
                  url: '/editor',
                  templateUrl: 'static/tpl/form_editor.html',
                  controller: 'EditorCtrl',
                  resolve: load(['textAngular','static/js/controllers/editor.js'])
              })
              .state('app.form.xeditable', {
                  url: '/xeditable',
                  templateUrl: 'static/tpl/form_xeditable.html',
                  controller: 'XeditableCtrl',
                  resolve: load(['xeditable','static/js/controllers/xeditable.js'])
              })
              // pages
              .state('app.page', {
                  url: '/page',
                  template: '<div ui-view class="fade-in-down"></div>'
              })
              .state('app.page.profile', {
                  url: '/profile',
                  templateUrl: 'static/tpl/page_profile.html'
              })
              .state('app.page.post', {
                  url: '/post',
                  templateUrl: 'static/tpl/page_post.html'
              })
              .state('app.page.search', {
                  url: '/search',
                  templateUrl: 'static/tpl/page_search.html'
              })
              .state('app.page.invoice', {
                  url: '/invoice',
                  templateUrl: 'static/tpl/page_invoice.html'
              })
              .state('app.page.price', {
                  url: '/price',
                  templateUrl: 'static/tpl/page_price.html'
              })
              .state('app.docs', {
                  url: '/docs',
                  templateUrl: 'static/tpl/docs.html'
              })
              // others
              .state('lockme', {
                  url: '/lockme',
                  templateUrl: 'static/tpl/page_lockme.html'
              })
              .state('access', {
                  url: '/access',
                  template: '<div ui-view class="fade-in-right-big smooth"></div>'
              })
              .state('access.signin', {
                  url: '/signin',
                  templateUrl: 'static/tpl/page_signin.html',
                  resolve: load( ['static/js/controllers/signin.js'] )
              })
              .state('access.signup', {
                  url: '/signup',
                  templateUrl: 'static/tpl/page_signup.html',
                  resolve: load( ['static/js/controllers/signup.js'] )
              })
              .state('access.forgotpwd', {
                  url: '/forgotpwd',
                  templateUrl: 'static/tpl/page_forgotpwd.html'
              })
              .state('access.404', {
                  url: '/404',
                  templateUrl: 'static/tpl/page_404.html'
              })

              // fullCalendar
              .state('app.calendar', {
                  url: '/calendar',
                  templateUrl: 'static/tpl/app_calendar.html',
                  // use resolve to load other dependences
                  resolve: load(['moment','fullcalendar','ui.calendar','static/js/app/calendar/calendar.js'])
              })

              // mail
              .state('app.mail', {
                  abstract: true,
                  url: '/mail',
                  templateUrl: 'static/tpl/mail.html',
                  // use resolve to load other dependences
                  resolve: load( ['static/js/app/mail/mail.js','static/js/app/mail/mail-service.js','moment'] )
              })
              .state('app.mail.list', {
                  url: '/inbox/{fold}',
                  templateUrl: 'static/tpl/mail.list.html'
              })
              .state('app.mail.detail', {
                  url: '/{mailId:[0-9]{1,4}}',
                  templateUrl: 'static/tpl/mail.detail.html'
              })
              .state('app.mail.compose', {
                  url: '/compose',
                  templateUrl: 'static/tpl/mail.new.html'
              })

              .state('layout', {
                  abstract: true,
                  url: '/layout',
                  templateUrl: 'static/tpl/layout.html'
              })
              .state('layout.fullwidth', {
                  url: '/fullwidth',
                  views: {
                      '': {
                          templateUrl: 'static/tpl/layout_fullwidth.html'
                      },
                      'footer': {
                          templateUrl: 'static/tpl/layout_footer_fullwidth.html'
                      }
                  },
                  resolve: load( ['static/js/controllers/vectormap.js'] )
              })
              .state('layout.mobile', {
                  url: '/mobile',
                  views: {
                      '': {
                          templateUrl: 'static/tpl/layout_mobile.html'
                      },
                      'footer': {
                          templateUrl: 'static/tpl/layout_footer_mobile.html'
                      }
                  }
              })
              .state('layout.app', {
                  url: '/app',
                  views: {
                      '': {
                          templateUrl: 'static/tpl/layout_app.html'
                      },
                      'footer': {
                          templateUrl: 'static/tpl/layout_footer_fullwidth.html'
                      }
                  },
                  resolve: load( ['static/js/controllers/tab.js'] )
              })
              .state('apps', {
                  abstract: true,
                  url: '/apps',
                  templateUrl: 'static/tpl/layout.html'
              })
              .state('apps.note', {
                  url: '/note',
                  templateUrl: 'static/tpl/apps_note.html',
                  resolve: load( ['static/js/app/note/note.js','moment'] )
              })
              .state('apps.contact', {
                  url: '/contact',
                  templateUrl: 'static/tpl/apps_contact.html',
                  resolve: load( ['static/js/app/contact/contact.js'] )
              })
              .state('app.weather', {
                  url: '/weather',
                  templateUrl: 'static/tpl/apps_weather.html',
                  resolve: load(['static/js/app/weather/skycons.js','angular-skycons','static/js/app/weather/ctrl.js','moment'])
              })
              .state('app.todo', {
                  url: '/todo',
                  templateUrl: 'static/tpl/apps_todo.html',
                  resolve: load(['static/js/app/todo/todo.js', 'moment'])
              })
              .state('app.todo.list', {
                  url: '/{fold}'
              })
              .state('app.note', {
                  url: '/note',
                  templateUrl: 'static/tpl/apps_note_material.html',
                  resolve: load(['static/js/app/note/note.js', 'moment'])
              })
              .state('music', {
                  url: '/music',
                  templateUrl: 'static/tpl/music.html',
                  controller: 'MusicCtrl',
                  resolve: load([
                            'com.2fdevs.videogular', 
                            'com.2fdevs.videogular.plugins.controls', 
                            'com.2fdevs.videogular.plugins.overlayplay',
                            'com.2fdevs.videogular.plugins.poster',
                            'com.2fdevs.videogular.plugins.buffering',
                            'static/js/app/music/ctrl.js', 
                            'static/js/app/music/theme.css'
                          ])
              })
                  .state('music.home', {
                      url: '/home',
                      templateUrl: 'static/tpl/music.home.html'
                  })
                  .state('music.genres', {
                      url: '/genres',
                      templateUrl: 'static/tpl/music.genres.html'
                  })
                  .state('music.detail', {
                      url: '/detail',
                      templateUrl: 'static/tpl/music.detail.html'
                  })
                  .state('music.mtv', {
                      url: '/mtv',
                      templateUrl: 'static/tpl/music.mtv.html'
                  })
                  .state('music.mtvdetail', {
                      url: '/mtvdetail',
                      templateUrl: 'static/tpl/music.mtv.detail.html'
                  })
                  .state('music.playlist', {
                      url: '/playlist/{fold}',
                      templateUrl: 'static/tpl/music.playlist.html'
                  })
              .state('app.material', {
                  url: '/material',
                  template: '<div ui-view class="wrapper-md"></div>',
                  resolve: load(['static/js/controllers/material.js'])
                })
                .state('app.material.button', {
                  url: '/button',
                  templateUrl: 'static/tpl/material/button.html'
                })
                .state('app.material.color', {
                  url: '/color',
                  templateUrl: 'static/tpl/material/color.html'
                })
                .state('app.material.icon', {
                  url: '/icon',
                  templateUrl: 'static/tpl/material/icon.html'
                })
                .state('app.material.card', {
                  url: '/card',
                  templateUrl: 'static/tpl/material/card.html'
                })
                .state('app.material.form', {
                  url: '/form',
                  templateUrl: 'static/tpl/material/form.html'
                })
                .state('app.material.list', {
                  url: '/list',
                  templateUrl: 'static/tpl/material/list.html'
                })
                .state('app.material.ngmaterial', {
                  url: '/ngmaterial',
                  templateUrl: 'static/tpl/material/ngmaterial.html'
                });

          function load(srcs, callback) {
            return {
                deps: ['$ocLazyLoad', '$q',
                  function( $ocLazyLoad, $q ){
                    var deferred = $q.defer();
                    var promise  = false;
                    srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                    if(!promise){
                      promise = deferred.promise;
                    }
                    angular.forEach(srcs, function(src) {
                      promise = promise.then( function(){
                        if(JQ_CONFIG[src]){
                          return $ocLazyLoad.load(JQ_CONFIG[src]);
                        }
                        angular.forEach(MODULE_CONFIG, function(module) {
                          if( module.name == src){
                            name = module.name;
                          }else{
                            name = src;
                          }
                        });
                        return $ocLazyLoad.load(name);
                      } );
                    });
                    deferred.resolve();
                    return callback ? promise.then(function(){ return callback(); }) : promise;
                }]
            }
          }


      }
    ]
  );
