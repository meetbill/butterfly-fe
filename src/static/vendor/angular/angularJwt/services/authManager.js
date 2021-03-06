angular.module('angular-jwt.authManager', [])
  .provider('authManager', function () {

    this.$get = function ($rootScope, $injector, $location, jwtHelper, jwtInterceptor, jwtOptions, $window) {

      var config = jwtOptions.getConfig();

      function invokeToken(tokenGetter) {
        var token = null;
        if (Array.isArray(tokenGetter)) {
          token = $injector.invoke(tokenGetter, this, {options: null});
        } else {
          token = tokenGetter();
        }
        return token;
      }

      function invokeRedirector(redirector) {
        if (Array.isArray(redirector) || angular.isFunction(redirector)) {
          return $injector.invoke(redirector, config, {});
        } else {
          throw new Error('unauthenticatedRedirector must be a function');
        }
      }

      function isAuthenticated() {
        var token = invokeToken(config.tokenGetter);
        if (token) {
          return !jwtHelper.isTokenExpired(token);
        }
      }

      $rootScope.isAuthenticated = false;

      function authenticate() {
        $rootScope.isAuthenticated = true;
      }

      function unauthenticate() {
        $rootScope.isAuthenticated = false;
      }

      function validateToken() {
        var token = invokeToken(config.tokenGetter);
        if (token) {
          if (!jwtHelper.isTokenExpired(token)) {
            decode_token = jwtHelper.decodeToken(token);
            $rootScope.username = decode_token.username;
            authenticate();
          } else {
            $rootScope.$broadcast('tokenHasExpired', token);
          }
        }
      }

      function checkAuthOnRefresh() {
        if ($injector.has('$transitions')) {
          var $transitions = $injector.get('$transitions');
          $transitions.onStart({}, validateToken);
        } else {
          $rootScope.$on('$locationChangeStart', validateToken);
        }
      }

      function redirectWhenUnauthenticated() {
        $rootScope.$on('unauthenticated', function () {
          invokeRedirector(config.unauthenticatedRedirector);
          unauthenticate();
        });
      }

      function redirectWhenUnauthenticatedSSO() {
        $rootScope.$on('unauthenticated', function (event,response) {
          unauthenticate();
          target_url = response.data.data.redirect;
          // 跳转单点登录逻辑时，传入当前的路由 cur_path, 即 # 号后的路径
          $window.location.href = target_url+ "?cur_path=" + encodeURIComponent($window.location.hash);
        });
      }

      function verifyRoute(event, next) {
        if (!next) {
          return false;
        }

        var routeData = (next.$$route) ? next.$$route : next.data;

        if (routeData && routeData.requiresLogin === true && !isAuthenticated()) {
          event.preventDefault();
          invokeRedirector(config.unauthenticatedRedirector);
        }
      }

      function verifyState(transition) {
        var route = transition.to();
        var $state = transition.router.stateService;
          if (route && route.data && route.data.requiresLogin === true && !isAuthenticated()) {
            return $state.target(config.loginPath);
          }
      }

      if ($injector.has('$transitions')) {
        var $transitions = $injector.get('$transitions');
        $transitions.onStart({}, verifyState);
      } else {
        var eventName = ($injector.has('$state')) ? '$stateChangeStart' : '$routeChangeStart';
        $rootScope.$on(eventName, verifyRoute);
      }



      return {
        authenticate: authenticate,
        unauthenticate: unauthenticate,
        getToken: function(){ return invokeToken(config.tokenGetter); },
        redirect: function() { return invokeRedirector(config.unauthenticatedRedirector); },
        checkAuthOnRefresh: checkAuthOnRefresh,
        redirectWhenUnauthenticated: redirectWhenUnauthenticated,
        redirectWhenUnauthenticatedSSO: redirectWhenUnauthenticatedSSO,
        isAuthenticated: isAuthenticated
      }
    }
  });
