// config

var app =  
angular.module('app')
  .config(
    [        '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide) {
        //
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
    }
  ])
  .config(['$translateProvider', function($translateProvider){
    // Register a loader for the static files
    // So, the module will search missing translation tables under the specified urls.
    // Those urls are [prefix][langKey][suffix].
    $translateProvider.useStaticFilesLoader({
      prefix: 'static/l10n/',
      suffix: '.js'
    });
    // Tell the module what language to use by default
    //$translateProvider.preferredLanguage('en');
    $translateProvider.preferredLanguage('zh_CN');
    // Tell the module to store the language in the local storage
    $translateProvider.useLocalStorage();
  }])
    //-----------------------------------------------------------------------------------jwt
    //.config(['$httpProvider','jwtOptionsProvider',function($httpProvider, jwtOptionsProvider) {
    //jwtOptionsProvider.config({
    //  tokenGetter: ['$localStorage',function($localStorage) {
    //    return $localStorage.jwt;
    //  }],
    //  unauthenticatedRedirector: ['$state', function($state) {
    //    $state.go('access.signin');
    //  }]
    //});

    //$httpProvider.interceptors.push('jwtInterceptor');
    //}])
    //-----------------------------------------------------------------------------------jwt End
  .config(
    function($interpolateProvider) {
        $interpolateProvider.startSymbol('__');
        $interpolateProvider.endSymbol('__');
  });
